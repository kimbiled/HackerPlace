import Home from "./Home"
import Authorization from "./components/Auth/Authorization";
import Registration from "./components/Registration/Registration";
import Error from "./Error.jsx";
import {AuthProvider} from './context/AutoContext';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import PrivateRoute from "./context/PrivateRoute";
export default function App() {
  return (
     <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<Authorization />}/>
          <Route path="/registration" element={<Registration />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </AuthProvider>
     </>
  )
}