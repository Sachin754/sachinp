import React, { useState } from 'react';
import './Education.css'
import NavBar from '../NavBar/NavBar';

const Education = () => {

    const [open, setOpen] = useState(false);


    return (
        <>
            {window.innerWidth < 1000 && <NavBar setOpen={setOpen} open={open} />}
            <div className="edu">
                <h1>EDUCATION</h1>
                <div className="Navbar__Link Navbar__Link-toggle icon" onClick={() => setOpen(!open)}>
                    <i class="fas fa-bars"></i>
                </div>
            </div>
            <div style={{ marginTop: '140px' }}>
                <div className='content'>
                    <div className='primary'>
                        <div className='header'>
                            <h2 style={{ color: '#009688' }}>Matric Education</h2>
                            <p style={{ color: '#964B00' }}>Genious School of Education (2011 - 2012)</p>
                        </div>
                        <ol>
                            <li>Earned Matriculation Certificate with an overall grade of 93%</li>
                            <li>Subjects Studied: Mathematics, English Literature, Science, Social Studies, Computer Science</li>
                            <li>Actively participated in the School Science Club and served as Club Secretary</li>
                            <li>Specialized in Science and Mathematics
                            </li>
                        </ol>
                    </div>
                </div>
                <div className='content'>
                    <div className='primary'>
                        <div className='header'>
                            <h2 className='title'>Secondary Education</h2>
                            <p className='metaTitle'>Arya School of Education (2012 - 2014)</p>
                        </div>
                        <ol>
                            <li >Completed 12th grade with a focus on Science stream</li>
                            <li > Obtained an overall percentage of 70% in the final board exams</li>
                            <li> Subjects Studied: Physics, Chemistry, Mathematics, English</li>
                            <li > Presented a research project on the effects of environmental pollution on plant growth at the school's annual science exhibition
                            </li>
                        </ol>
                    </div>
                </div>
                <div className='content'>
                    <div className='primary'>
                        <div className='header' style={{ paddingLeft: '25px', paddingTop: '5px', borderBottom: 'solid' }}>
                            <h2 style={{ color: '#009688' }}>Graduation</h2>
                            <p style={{ color: '#964B00' }}>Vaish College of Engineering (2015 - 2019)</p>
                        </div>
                        <ol>
                            <li >Bachelor of Technology degree in Computer Science with a specialization in Software Engineering</li>
                            <li > Graduated with overall percentage of 76%
                            </li>
                            <li > Relevant coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Web Development</li>
                            <li> Presented a research project on the effects of environmental pollution on plant growth at the school's annual science exhibition
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education