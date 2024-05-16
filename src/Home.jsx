import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats"
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";

import {Routes, Route, Link, Router} from 'react-router-dom'
export default function App() {
  return (
     <>
        <Navbar />
        <Hero />
        <Stats />
     </>
  )
}