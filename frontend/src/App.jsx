import Home from "./Home"
import Authorization from "./components/Auth/Authorization";
import Registration from "./components/Registration/Registration";

import {Routes, Route, Link, Router} from 'react-router-dom'
export default function App() {
  return (
     <>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<Authorization />}/>
          <Route path="/registration" element={<Registration />}/>
        </Routes>
     </>
  )
}