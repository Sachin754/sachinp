import React from 'react';
import { BrowserRouter as Router,  Route,Routes,Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Blog from './components/Blog/Blog';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';


import './App.css'
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <div className="App">
      <Router>
     {window.innerWidth >1000 && <NavBar/>}

{/* <div className="w3-sidebar w3-light-grey w3-bar-block" style={{width:'auto', maxWidth:'17%', boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.2)', flexDirection: 'column', alignItems: 'flex-start'}}>
  <div className="headername" style={{ borderBottom: '1px solid black' }}>
  <h3 className="w3-bar-item" style={{ color: '#009688' }}>Sachin Sharma</h3>
  <h className="w3-bar-item" style={{ color: '#964B00' }}>Full Stack Developer</h>
  </div>


  <div className='about' style={{ marginLeft: '1em' }}>
  <Link to="/about" className="w3-bar-item w3-button">
    <i className="fas fa-user" style={{ marginRight: '7.3px', color: '#009688' }}></i> <span className="link-text">About</span>
  </Link>
</div>

<div className='experience' style={{ marginLeft: '1em' }}>
  <Link to="/exp" className="w3-bar-item w3-button">
    <i className="fas fa-briefcase" style={{ marginRight: '7.3px', color: '#00bcd4' }}></i> <span className="link-text">Experience</span>
  </Link>
</div>

<div className='project' style={{ marginLeft: '1em' }}>
  <Link to="/pro" className="w3-bar-item w3-button">
    <i className="fas fa-project-diagram" style={{ marginRight: '3.3px', color: '#3f51b5' }}></i> <span className="link-text">Project</span>
  </Link>
</div>

<div className='skills' style={{ marginLeft: '1em' }}>
  <Link to="/ski" className="w3-bar-item w3-button">
    <i className="fas fa-clipboard-list" style={{ marginRight: '10.3px', color: '#9c27b0 ' }}></i> <span className="link-text">Skills</span>
  </Link>
</div>

<div className='education' style={{ marginLeft: '1em' }}>
  <Link to="/edu" className="w3-bar-item w3-button">
    <i className="fas fa-graduation-cap" style={{ marginRight: '3.3px', color: '#ff9800' }}></i> <span className="link-text">Education</span>
  </Link>
</div>

<div className='contact' style={{ marginLeft: '1em' }}>
  <Link to="/con" className="w3-bar-item w3-button">
    <i className="fas fa-envelope" style={{ marginRight: '6.3px', color: '#444' }}></i> <span className="link-text">Contact</span>
  </Link>
</div>

<div className='blog' style={{ marginLeft: '1em' }}>
  <Link to="/blo" className="w3-bar-item w3-button">
    <i className="fas fa-blog" style={{ marginRight: '6.3px', color: '#ffeb3b ' }}></i> <span className="link-text">Free Work</span>
  </Link>
</div>

<div className='resume' style={{ marginLeft: '1em' }}>
  <Link to="/res" className="w3-bar-item w3-button">
    <i className="fas fa-file" style={{ marginRight: '8.3px' }}></i> <span className="link-text">Resume</span>
  </Link>
</div>


    


     
     
 
 


</div> */}

<div className='display'>
    

     {window.location.pathname === '/index.html'&& <Home/> }
     
     <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/exp" element={<Experience />} />
            <Route path="/edu" element={<Education />} />
            <Route path="/blo" element={<Blog />} />
            <Route path="/ski" element={<Skills />} />
            <Route path="/pro" element={<Project />} />
            <Route path="/con" element={<Contact />} />
            <Route path="/res" element={<Resume />} />
          </Routes>
    
 


 </div>

    </Router>
    </div>
  
    
  );
}

export default App;
