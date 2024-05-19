import Home from "./Home"
import Authorization from "./components/Auth/Authorization";
import Registration from "./components/Registration/Registration";
import Error from "./Error.jsx";
import {AuthProvider} from './context/AutoContext';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Play from './components/Play/Play'


import BinaryExploitation from './components/playPages/binaryExploitation.jsx'
import Cryptography from './components/playPages/Cryptography.jsx'
import OSINT from './components/playPages/osint.jsx'
import ReverseEng from './components/playPages/reverseEng.jsx'
import Steganography from './components/playPages/Steganography.jsx'
import WebExploitation from './components/playPages/webExploitation.jsx'

export default function App() {
  return (
     <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<Authorization />}/>
          <Route path="/registration" element={<Registration />}/>
          <Route path="/play" element={<Play />} />
          <Route path="*" element={<Error />}/>

          <Route path="/binaryExp" element={<BinaryExploitation />}/>
          <Route path="/cryptography" element={<Cryptography />}/>
          <Route path="/osint" element={<OSINT />} />
          <Route path="/reverseEng" element={<ReverseEng />}/>
          <Route path="/steganography" element={<Steganography />}/>
          <Route path="/webExp" element={<WebExploitation />}/>
        </Routes>
      </AuthProvider>
     </>
  )
}