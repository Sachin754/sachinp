import React, { useState } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import projectIcon from './project.png'
import img from '../Home/p1.jpeg'

const NavBar = (props) => {
    const { open, setOpen } = props;
    const width = window.innerWidth;
    return (
        <>
            <div className="w3-sidebar w3-light-grey w3-bar-block" style={{
                width: `${width < 1000 ? '100%' : 'auto'}`, maxWidth: `${width > 1000 && '17%'}`,
                display: `${open ? 'block' : width < 1000 ? 'none' : 'flex'}`
            }}>
                {width < 1000 && <i class="fa fa-close close" onClick={() => setOpen(false)}></i>}

                <div className="headername" style={{ borderBottom: '1px solid black', textAlign: 'center' }}>
                    <img src={img} alt="Avatar" class="avatar" />
                    <h3 className="w3-bar-item" style={{ color: '#009688', margin: '0', padding: '5px 15px 1px' }}>Sachin Sharma</h3>
                    <h6 className="w3-bar-item" style={{ color: '#964B00', margin: '0', padding: '1px 15px 3px' }}>Full Stack Developer</h6>
                </div>

                <div className='about' style={{ marginLeft: '1em' }} >
                    <Link to="/about" className="w3-bar-item w3-button">
                        <i className="fas fa-user" style={{ marginRight: '7.3px', color: '#009688' }}></i> <span className="link-text">About</span>
                    </Link>
                </div>

                <div className='experience' style={{ marginLeft: '1em' }}>
                    <Link to="/exp" className="w3-bar-item w3-button">
                        <i className="fas fa-briefcase" style={{ marginRight: '7.3px', color: '#00bcd4' }}></i> <span className="link-text">Experience</span>
                    </Link>
                </div>

                <div className='project' style={{ marginLeft: '1em' }} >
                    <Link to="/pro" className="w3-bar-item w3-button">
                        <img src={projectIcon} width='17' />
                        <i style={{ paddingLeft: '10px' }}><span className="link-text">Project</span></i>
                        {/* <i className="fas fa-project-diagram" style={{ marginRight: '3.3px', color: '#3f51b5' }}></i> <span className="link-text">Project</span> */}
                    </Link>
                </div>

                <div className='skills' style={{ marginLeft: '1em' }}>
                    <Link to="/ski" className="w3-bar-item w3-button">
                        <i className="fas fa-clipboard-list" style={{ marginRight: '10.3px', color: '#9c27b0 ' }}></i> <span className="link-text">Skills</span>
                    </Link>
                </div>

                <div className='education' style={{ marginLeft: '1em' }} >
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

                <div className='resume' style={{ marginLeft: '1em' }} >
                    <Link to="/res" className="w3-bar-item w3-button">
                        <i className="fas fa-file" style={{ marginRight: '8.3px' }}></i> <span className="link-text">Resume</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavBar;