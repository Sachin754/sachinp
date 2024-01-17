import React, { useState } from 'react';
import img from './p1.jpeg'
import './Home.css'
import NavBar from '../NavBar/NavBar';

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
            {window.innerWidth <1000 && <NavBar setOpen={setOpen} open={open}/>}

      <div className="aboutttt">
        <h1>ABOUT</h1>
        <div className="Navbar__Link Navbar__Link-toggle icon" onClick={()=> setOpen(!open)}>
                    <i class="fas fa-bars"></i>
                </div>
      </div>
      <div style={{ marginTop: '140px' }}>
        <div className='about'>
          <h3>
            With over 5 years of
            hands-on experience in full-stack development,
            I am a dedicated and versatile professional passionate about
            creating robust and scalable web applications. My journey in the world
            of technology has equipped me with a diverse skill set that spans both front-end and back-end development.
          </h3>
          <img src={img} className='userimg' />
        </div>
        {/* <div className="home" style={{ backgroundImage: `url(${img})`, float:'right'
      }}>
        {/* <h1 style={{ color: '#DFFF00', fontStyle:'italic', marginLeft:'1em' }}>Be the change, <h1 style={{textDecoration:'underline'}}>that you want to be.</h1></h1> */}
        {/* <h1 style={{ color: '#DFFF00' }}></h1>
      </div> */}


        <div className='aboutdescription'>
          {/* <h1 style={{textAlign:'center', color: '#964B00',paddingTop:'50px'}}>
     
     
      Be the Change that You Want To Be</h1> */}
          <div style={{ textAlign: 'center', paddingLeft: '60px', paddingRight: '60px', paddingTop: '20px', fontSize:'18px' }}>
            <h4>Front-end Development</h4>
          <p>Proficient in HTML, CSS, and JavaScript frameworks such as React and Angular. I have a keen eye for creating responsive and visually appealing user interfaces that enhance the user experience. </p>
          <h4 >Back-end Development</h4>
          <p>Experienced in building scalable server-side applications using Node.js and Python (Django). I have a solid understanding of database design, RESTful API development, and server optimization.</p>
          <h4 >Database Management</h4>
          <p> Skilled in working with various databases, including MongoDB, MySQL, and PostgreSQL. I ensure data integrity and efficiency in database operations.</p>

          <h4 >DevOps and Deployment</h4>
           <p>Familiar with containerization (Docker), continuous integration/continuous deployment (CI/CD) pipelines, and cloud platforms such as AWS and Azure. I take pride in delivering applications
            that are not only functional but also easily deployable and maintainable.</p>

          <h4>Professional Accomplishments</h4>
<p>
            Successfully led and contributed to the development of [mention notable projects], resulting in [specific achievements, such as increased user engagement, improved performance, or successful project launches].
            Proven track record of collaborating with cross-functional teams, including designers, product managers, and QA engineers, to deliver high-quality software solutions on time and within budget.
            Passion and Approach:
            I am passionate about staying up-to-date with the latest industry trends and technologies, ensuring that I bring innovative solutions to every project. My collaborative and solution-oriented approach allows me to tackle challenges with creativity and efficiency.
            </p>
          </div>


        </div>

      </div>
    </>

  )
}

export default Home;