import React from 'react';
import './App.scss';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import NavBar from './components/NavBar';
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
    </Routes>
  
    </Router>

    </main>
 {/*  <Route index element ={<Home />} />
        <Route path= "/about" element ={<About />} />
        <Route path= "/skills" element ={<Skills />} />
        <Route path= "/portfolio" element ={<Projects />} />
        <Route path= "/workexperience" element ={<Experience />} /> */}
    {/* <Routes>
      <Route path ="/" element ={<Layout />}>
       
        </Route>
    </Routes>
  */}

  {/* <div className="app">
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="workexperience">
        < Experience/>
      </div>
  </div> */}


    </>
  )
   
}

export default App;
