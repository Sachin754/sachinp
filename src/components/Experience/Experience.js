import React, { useState } from 'react';
import './Experience.css'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
const Experience = () => {

    const [open, setOpen] = useState(false);
    return (
        <>
            {window.innerWidth <1000 && <NavBar setOpen={setOpen} open={open}/>}

            <div className="exp">
                <h1 >EXPERIENCE</h1>
                <div className="Navbar__Link Navbar__Link-toggle icon" onClick={()=> setOpen(!open)}>
                    <i class="fas fa-bars"></i>
                </div>
            </div>
<div style={{marginTop:'140px'}}>
            <div className='content'>
                <div className='rite'>
                    <div className='header' >
                        <h2 className='title'>BVM Infotech</h2>
                        <p className='metaTitle'>Full Stack Developer (1/06/2019 To Present)</p>
                    </div>
                    <h5>Roles & Responsibility :</h5>
                    <ol>
                        <li>
                            Developing Full Stack Applications: Building end-to-end web applications from the frontend
                            (<span style={{ color: '#009688' }} >using React</span>) to the backend (<span style={{ color: '#009688' }}>using Node.js</span>) and integrating them with databases like <sapn style={{ color: '#009688' }}>MongoDB</sapn> and <span style={{ color: '#009688' }}>SQL</span>.
                        </li>
                        <li>
                            Frontend Development: Creating interactive and responsive user interfaces using React.js and implementing frontend components, user flows, and UI interactions.
                        </li>
                        <li>
                            Backend Development: Building server-side logic and APIs using Node.js to handle requests, process data, and interact with databases.
                        </li>
                        <li>
                            <span style={{ color: '#009688' }}>Mobile App Development</span>: Utilizing React Native to build cross-platform mobile applications for iOS and Android platforms, leveraging your knowledge of React to create reusable UI components.
                        </li>
                        <li>
                            Mobile UI/UX Design: Collaborating with UI/UX designers to create intuitive and visually appealing mobile app interfaces, ensuring a seamless user experience across different devices.
                        </li>
                    </ol>
                </div>
            </div>

            {/* <div className='content'>
                <div className='rite'>
                    <div className='header'>
                        <h2 className='title'>Octopus Tech</h2>
                        <p className='metaTitle'>Associate Software Engineer (26/02/2020 To 25/4/2022)</p>
                    </div>
                    <h5>Roles & Responsibility :</h5>
                    <ol>
                        <li>
                            Developing User Interfaces: Building responsive and user-friendly web applications using React.js as the primary frontend framework.
                        </li>
                        <li>
                            Utilizing React Ecosystem: Leveraging the capabilities of React.js and its ecosystem, including state management (e.g., <span style={{ color: '#009688' }}>Redux</span>, <span style={{ color: '#009688' }}>Context API</span>), routing (e.g., React Router), and form handling libraries.
                        </li>
                        <li>
                            Integrating UI Frameworks: Implementing UI frameworks like <span style={{ color: '#009688' }}>Bootstrap</span>, <span style={{ color: '#009688' }}>Material UI</span>, or <span style={{ color: '#009688' }}>Kendo UI</span> to enhance the visual appearance and user experience of the application.
                        </li>
                        <li>
                            Collaborating with Backend Developers: Working closely with backend developers to integrate frontend components with the server-side infrastructure, APIs, and databases.
                        </li>
                    </ol>
                </div>
            </div> */}
            </div>
        </>
    )
}

export default Experience