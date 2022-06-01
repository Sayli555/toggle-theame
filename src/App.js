import logo from './logo.svg';
import { useContext } from 'react';
import './App.css';
import Dashbord from './components/Dashbord';
import Navbar from "./components/Navbar"
import {TheameContext} from "./Context/TheamContext"

function App() {
  const {isDark,toggletheme}=useContext(TheameContext)
  return (
    <div className={isDark ? "App AppDark" :"App"}>
     <Navbar/>
     <Dashbord/>
    </div>
  );
}

export default App;
