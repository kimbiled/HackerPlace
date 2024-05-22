import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/AutoContext';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { correct, uncorrect } from '../../assets/icons';

const UserProfile = () => {
    const { authTokens } = useContext(AuthContext);
    const [profile, setProfile] = useState('');
    const [assignments, setAssignments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!authTokens) {
            setError(new Error('No token found'));
            return;
        }

        fetch('http://127.0.0.1:8000/api/users/profile/', {
            headers: {
                'Authorization': `Bearer ${authTokens.access}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => setProfile(data))
        .catch(error => setError(error));
    }, [authTokens]);

    useEffect(() => {
        if (!authTokens) {
            setError(new Error('No token found'));
            return;
        }

        fetch('http://127.0.0.1:8000/api/assignments/user-assignments/', {
            headers: {
                'Authorization': `Bearer ${authTokens.access}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                // Добавляем информацию о времени выполнения и статусе выполнения к каждому заданию
                const assignmentsWithData = data.map(assignment => ({
                    ...assignment,
                    completed_at: new Date(assignment.completed_at).toLocaleString(),
                    time_taken: assignment.time_taken
                }));
                setAssignments(assignmentsWithData);
            })
            .catch(error => setError(error));
    }, [authTokens]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <>
        <Navbar />
            <div className='flex flex-wrap items-center mx-auto justify-between max-w-screen-xl font-["Montserrat"] mt-16'>
                <div className='flex flex-col gap-4 font-medium text-md w-64 w-1/4 '>
                    <h1>Username:</h1>
                    <p className='border-[1px] border-black border-opacity-25 rounded-lg h-10 p-1 shadow-md flex flex-row items-center'>{profile.username}</p>
                    <p>Email:</p>
                    <span className='border-[1px] border-black border-opacity-25 rounded-lg p-1 shadow-md flex flex-row items-center h-10'>{profile.email}</span>
                </div>
                <div className='w-3/4 flex flex-col justify-center items-center'>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Assignments:</p>
                    {assignments.length == 0 ? (<>
                    <p className='mt-8 text-lg '>Your list of tasks is empty</p>
                    </>)
                    :
                    (<>
                    <ul className='w-full mt-4 p-4 border-black border-opacity-10 border-[1px] rounded-3xl shadow-xl  h-auto'>
                        {assignments.map(assignment => (
                            <li key={assignment.id} className='mt-4 border-black border-opacity-10 border-[1px] rounded-3xl p-4 shadow-md'>
                                <p><strong>{assignment.assignment.title}</strong></p>
                                <p className='flex flex-row gap-4 items-center'>Completed: {assignment.completed ? (<img src={correct} alt="correct" className='w-4 h-4'/>) : (<img src={uncorrect} alt="uncorrect" className='w-4 h-4'/>)}</p>
                                <p>Completed at: {assignment.completed_at}</p>
                                <p>Time taken (h/m/sec): {assignment.time_taken}</p>
                            </li>
                        ))}
                    </ul>
                    </>)
                    }
                </div>


            </div>
        <Footer />
        </>
    );
};

export default UserProfile;
