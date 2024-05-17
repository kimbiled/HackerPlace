import {createContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

export default AuthContext

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    );
    

    const [user, setUser] = useState(() => 
        localStorage.getItem("authTokens")
            ? jwt_decode(localStorage.getItem("authTokens"))
            : null
    );


    const [loading, setLoading] = useState(true);

    let navigate = useNavigate();

    const loginUser = async (email, password) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/token/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email, 
                    password: password
                })
            });
    
            const data = await response.json();
            console.log(data);
    
            if (response.status === 200) {
                console.log("Logged In");
                setAuthTokens(data);
                setUser(jwt_decode(data.access));
                localStorage.setItem("authTokens", JSON.stringify(data));
                navigate("/");
            } else {
                console.log(response.status);
                console.log("There was a server issue");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    const registerUser = async (email, username, password) => {
        const response = await fetch("http://127.0.0.1:8000/api/users/register/", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email, username, password
            })
        })
        if(response.status === 201){
            navigate("/auth")
            
        } else {
            console.log(response.status);
            console.log("there was a server issue");
           
        }
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem("authTokens")
        navigate("/auth")
        
    }

    const contextData = {
        user, 
        setUser,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser,
    }

    useEffect(() => {
        if (authTokens) {
            setUser(jwt_decode(authTokens.access))
        }
        setLoading(false)
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )

}