import React, { useState } from "react";
import './Contact.css';
import emailimg from './emailicon.png'
import linkdnicon from './linkednicon.png'
import contacticon from './contactme.png'
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <div className="res" style={{ backgroundColor:'#009688', width:'100%', height:'106px', marginTop:'-10px' }}>
        <h1 style={{ color:'white', paddingLeft:'30px', paddingTop:'19px' }}>Contact</h1>
      </div> */}
      {window.innerWidth < 1000 && <NavBar setOpen={setOpen} open={open} />}
      <div className="res">
        <h1>Contact</h1>
        <div className="Navbar__Link Navbar__Link-toggle icon" onClick={() => setOpen(!open)}>
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div className="content" style={{marginTop:'140px'}}>
      <div className="contactme">
        <h3 style={{ paddingLeft:'100px', paddingTop:'25px' }}>
        <img src={emailimg} alt="HTML5"  style={{ backgroundColor: 'transparent',height:'35px' }} /> Sachusachin979@gmail.com
        </h3>
        <h3 style={{ paddingLeft:'100px', paddingTop:'25px' }}>
        <img src={linkdnicon} alt="HTML5"  style={{ backgroundColor: 'transparent',height:'35px' }} /><small>(<Link to='https:www.linkedin.com/in/sachin-sharma-3bb30b28b' target="_blank">www.linkedin.com/in/sachin-sharma-3bb30b28b</Link>) </small>


        </h3>
        <h3 style={{ paddingLeft:'100px', paddingTop:'25px' }}>
        <img src={contacticon} alt="HTML5"  style={{ backgroundColor: 'transparent',height:'35px' }} /> 9306445345
        </h3>
      </div>
      </div>
    </>
  );
}

export default Contact;
