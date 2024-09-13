import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import NavBar from './components/NavBar';
import Games from './components/Projects/Games';
import WebApp from './components/Projects/WebApp';
import OtherProj from './components/Projects/OtherProj';


function App() {
  return (
    <>
    <main className='bg-slate-300/20'>
      <Router>
        <NavBar/>
        <Routes>
            <Route path ="/" element ={<Home />}/>
            <Route path= "/about" element ={<About />} />
            <Route path= "/skills" element ={<Skills />} />
            <Route path= "/portfolio" element ={<Projects />} />
            <Route path= "/workexperience" element ={<Experience />} />
            <Route path="/portfolio/games" element={<Games />} />
            <Route path="/portfolio/webapps" element={<WebApp />} />
            <Route path="/portfolio/projectapps" element={<OtherProj />} />
        </Routes>
      </Router>
    </main>
    </>
  )
   
}

export default App;
