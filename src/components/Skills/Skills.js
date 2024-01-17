import React, { useState } from "react";
import './Skills.css'
import img from './html5-g1b36f314f_640.png'
import img2 from './React-icon.svg.png'
import cssimg from './CSS3.png'
import bootstrapimg from './bootstrap.png'
import materialimg from './materialui.png'
import javascriptimg from './javascripticon.png'
import nodeimg from './node.png'
import mongoimg from './mongodb_icon.png'
import sqlimg from './sql_png.png'
import html5 from './html5icon.png'
import NavBar from "../NavBar/NavBar";
import azureimg from "./Azure.png"
import awsimg from "./aws.png"


const Skills = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {window.innerWidth < 1000 && <NavBar setOpen={setOpen} open={open} />}

      <div className="ski">
        <h1>SKILLS</h1>
        <div className="Navbar__Link Navbar__Link-toggle icon" onClick={() => setOpen(!open)}>
          <i class="fas fa-bars"></i>
        </div>
      </div>
<div style={{marginTop:'140px'}}>
      <div className="content">
        <div className='skill'>
          <div className='html'>
            <h2>HTML</h2>
          </div>
          <div className="hmtljsx">
            <div className="html5">
              <img src={html5} alt="HTML5" className='html-img' />
              <h7>HTML5</h7>
            </div>
            <div className="html5">
              <img src={img2} alt="HTML5" className='html-img' />
              <h7>JSX</h7>
            </div>
          </div>
        </div>
      </div>
      {/* CSS skills */}
      <div className="content">
        <div className='skill'>
          <div className='html'>
            <h2 >CSS</h2>
          </div>
          <div className="hmtljsx">
            <div className="html5">
              <img src={cssimg} alt="HTML5" className='html-img' />
              <h7>CSS3</h7>
            </div>
            <div className="html5">
              <img src={bootstrapimg} alt="HTML5" className='html-img' />
              <h7 >BOOTSTRAP</h7>
            </div>
            <div className="html5">
              <img src={materialimg} alt="HTML5" className='html-img' />
              <h7 >Material UI</h7>
            </div>
          </div>
        </div>
      </div>

      {/* javascript skills */}
      <div className="content">
        <div className='skill'>
          <div className='html'>
            <h2>Javascript</h2>
          </div>
          <div className="hmtljsx">
            <div className="html5">
              <img src={img2} alt="HTML5" className='html-img' />
              <h7>React js</h7>
            </div>

            <div className="html5">
              <img src={img2} alt="HTML5" className='html-img' />
              <h7>React Native</h7>
            </div>
            <div className="html5">
              <img src={javascriptimg} alt="HTML5" className='html-img' />
              <h7></h7>
            </div>
            <div className="html5">
              <img src={nodeimg} alt="HTML5" className='html-img' />
              <h7>Node js</h7>
            </div>
          </div>
        </div>
      </div>

      {/* Database skills */}
      <div className="content">
        <div className='skill'>
          <div className='html'>
            <h2>Database</h2>
          </div>
          <div className="hmtljsx">
            <div className="html5">
              <img src={mongoimg} alt="HTML5" className='html-img' />
              <h7></h7>
            </div>
            <div className="html5">
              <img src={sqlimg} alt="HTML5" className='html-img' />
              <h7></h7>
            </div>
          </div>
        </div>
      </div>

      <div className="content" style={{paddingBottom:'50px'}}>
        <div className='skill'>
          <div className='html'>
            <h2>Cloud</h2>
          </div>
          <div className="hmtljsx">
            <div className="html5">
              <img src={azureimg} alt="HTML5" className='html-img' />
              <h7>Azure</h7>
            </div>
            <div className="html5">
              <img src={awsimg} alt="HTML5" className='html-img' />
              <h7>AWS</h7>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Skills