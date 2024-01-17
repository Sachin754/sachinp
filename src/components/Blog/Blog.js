import React, { useState } from "react";
import './Blog.css'
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const Blog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>

      {window.innerWidth < 1000 && <NavBar setOpen={setOpen} open={open} />}

      <div className="pro">
        <h1>BLOG</h1>
        <div className="Navbar__Link Navbar__Link-toggle icon" onClick={() => setOpen(!open)}>
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div style={{ marginTop: '140px' }}>
        <div className="content" style={{ marginTop: '20px' }}>
          <div className='scr'>
            <div className='proheader' >
              <h2>Jio Insurance Booking </h2>
            </div>
            <h5 >Description</h5>
            <p >I designed this project for one of my major client Reliance. This is used to manage and control
              the insurance operations on the shop floor. It includes functions such as health insurance, two wheeler insurance, four wheeler Insurance and data collection for analysis and reporting
            </p>
            <h5 >Responsibilities: (Fullstack Engineer)</h5>
            <li> Identifying and solving technical challenges and issues related to frontend development.</li>
            <li>Coordinating with backend developers to integrate frontend components with server-side logic. - Optimizing
              frontend code and assets for improved performance and faster loading times.</li>
            <li> Participating in code reviews to maintain code quality, share best practices, and identify areas for improvement.</li>
            <li> Design RESTful APIs for effective data transfer.</li>
            <li> Design, implement, and maintain databases (relational or NoSQL) to store and retrieve data efficiently.</li>
            <h5 >Tools & Technologies :</h5>
            <p >HTML, CSS, JavaScript, MUI, ReactJS, Webpack, Redux, Yarn, Git, AJAX, REST, Jest, Enzyme NodeJS, MySQL,
              ExpressJS, JWT, Azure, JIRA. </p>
          </div>

          <div className="content">
          <div className='scr'>
            <div className='proheader' >
              <h2>Codemonk Platform: 
                <small>(<Link to='https://dashboard.codemonk.ai/' target="_blank">https://dashboard.codemonk.ai</Link>) </small></h2>
            </div>
            <h5 >Description</h5>
            <p >A Client and Talent Bridge to connect with each other. I have been part of the Core platform team.
              The client want to create a digital platform where client can find Pre-vetted talents from the platform
              directly and also can create a team from the platform and can hire entrie team as well. The project have main
              5 modules: Admin, Client, Talent, Agency, Ambasador.  </p>
            <h5 >Responsibilities: (Frontend Engineer)</h5>
            <li> Designing and implementing user interfaces for web applications.</li>
            <li>Ensuring that web applications work seamlessly across different browsers and devices.</li>
            <li> Optimizing frontend code and assets for improved performance and faster loading times.</li>
            <li> Conducting unit testing and debugging to ensure the reliability and stability of the frontend code. </li>
            <li>Participating in code reviews to maintain code quality, share best practices, and identify areas for improvement.</li>
            <li>Collaborating with cross-functional teams, including designers, product managers, and backend developers.</li>
            <h5 >Tools & Technologies :</h5>
            <p >HTML, CSS, JavaScript, ReactJS, Webpack, Redux, Bootstrap,
              Yarn, Git, AJAX, REST, Jest, RTL, JWT, AWS Amplify, Bitbucket, JIRA. </p>
          </div>
          </div>

          <div className="content">
          <div className='scr'>
            <div className='proheader' >
              <h2>Cook My Grub (CMG):
                <small>(<Link to='https://flavers.uk/' target="_blank">https://flavers.uk/</Link>)</small> </h2>
            </div>
            <h5 >Description</h5>
            <p >A Online chef management system. The project have main 3 modules: Super Admin, Chef, User. </p>
            <h5 >Responsibilities: (Frontend Engineer)</h5>
            <li> Identifying and solving technical challenges and issues related to frontend development.</li>
            <li> Using version control systems like Git to manage and track changes in code.</li>
            <li>  Communicating effectively with team members and stakeholders.</li>
            <li> Coordinating with backend developers to integrate frontend components with server-side logic.</li>
            <li> Implementing responsive design principles to ensure optimal user experience on various screen sizes.</li>
            <li>  Collaborating with UX/UI designers to translate design wireframes and mockups into functional and responsive web pages.</li>
            <h5 >Tools & Technologies :</h5>
            <p >HTML, CSS, JavaScript, ReactJS, Webpack, Redux, Bootstrap, Yarn, Git, AJAX, REST, Jest,
              RTL, JWT, AWS Amplify, Bitbucket, JIRA. </p>
          </div>
          </div>

          <div className="content">
          <div className='scr'>
            <div className='proheader' >
              <h2>Shopdot:<small>(<Link to='https://shopdotapp.com/' target="_blank">https://shopdotapp.com/</Link>)</small>  </h2>
            </div>
            <h5 >Description</h5>
            <p >ShopDot helps suppliers streamline their retail partnerships by allowing them to embed
              product catalogs, price lists, inventory and ordering capabilities into their existing software
              and workflows.</p>
            <h5 >Responsibilities: (Frontend Engineer)</h5>
            <li> Create entrie Frontend from Scratch with the tech stack of ReactJS, Bootstrap, SCSS, Redux, RTK, React Router Dom.</li>
            <li> Designing and implementing user interfaces for web applications.</li>
            <li> Ensuring that web applications work seamlessly across different browsers and devices.</li>
            <li> Optimizing frontend code and assets for improved performance and faster loading times.</li>
            <li> Conducting unit testing and debugging to ensure the reliability and stability of the frontend code. </li>
            <li> Communicating effectively with team members and stakeholders.</li>
            <li>Coordinating with backend developers to integrate frontend components with server-side logic.</li>
            <li> Implementing responsive design principles to ensure optimal user experience on various screen sizes.</li>
            <li> Collaborating with UX/UI designers to translate design wireframes and mockups into functional and responsive web pages.</li>
            <h5 >Tools & Technologies :</h5>
            <p >HTML, CSS, JavaScript, MUI, ReactJS, Webpack, npm, Git, AJAX, REST, Redux, Bitbucket, JIRA. </p>
          </div>
          </div>


          <div className="content">
          <div className='scr'>
            <div className='proheader' >
              <h2>MACHINE EXICUTION SYSTEM (MES) :</h2>
            </div>
            <h5 >Description</h5>
            <p >I design the MES for one of my major client BL Agro Manufacturing Limited. MES software is
              used to manage and control the manufacturing operations on the shop floor. It includes functions
              such as production scheduling, resource allocation, quality management, and data collection for
              analysis and reporting.  </p>
            <h5 >Responsibilities: (Fullstack Engineer)</h5>
            <li> Designing and implementing user interfaces for web applications.</li>
            <li> Ensuring that web applications work seamlessly across different browsers and devices.</li>
            <li>Optimizing frontend code and assets for improved performance and faster loading times.</li>
            <li> Implement caching mechanisms to improve performance by storing frequently accessed data in memory.</li>
            <li> Implement security measures to protect sensitive data.</li>
            <li> Follow best practices for secure coding to prevent common vulnerabilities.</li>
            <li> Manage database migrations and versioning to ensure smooth updates and changes to the database schema.</li>
            <li> Implement effective error handling mechanisms and log system activities for troubleshooting and debugging.</li>
            <h5 >Tools & Technologies :</h5>
            <p >HTML, CSS, JavaScript, MUI, ReactJS, Webpack, npm, Git, AJAX, REST, Redux, Bitbucket, Azure,
              Nodejs, MySQL, Sequalize ORM, JIRA. </p>
          </div>
          </div>

          <div className="content">
          <div className='scr'>
            <div className='proheader' >
              <h2>WAREHOUSE MANAGEMENT SYSTEM (WMS):</h2>
            </div>
            <h5 >Description</h5>
            <p >WMS (Warehouse Management Software)-Streamlines and optimizes warehouse operations by providing
              real-time visibility and control over inventory, order fulfillment, and warehouse processes.
              Enables accurate inventory tracking, efficient order picking, packing, and shipping. </p>
            <h5 >Responsibilities: (Fullstack Engineer)</h5>
            <li> Designing and implementing user interfaces for web applications.</li>
            <li> Ensuring that web applications work seamlessly across different browsers and devices.</li>
            <li> Optimizing frontend code and assets for improved performance and faster loading times.</li>
            <li> Implement caching mechanisms to improve performance by storing frequently accessed data in memory.</li>
            <li> Implement security measures to protect sensitive data.</li>
            <li> Follow best practices for secure coding to prevent common vulnerabilities.</li>
            <li> Manage database migrations and versioning to ensure smooth updates and changes to the database schema.</li>
            <li>Implement effective error handling mechanisms and log system activities for troubleshooting and debugging.</li>
            <h5 >Tools & Technologies :</h5>
            <p >HTML, CSS, JavaScript, ANTD, ReactJS, Webpack, npm, Git, AJAX, REST, Redux, Bitbucket,
              AWS Lamda, AWS DynamoDB, Serverless, Nodejs, MongoDB, MySQL, Squalize ORM, JIRA. </p>

          </div>
          </div>

          <div className="content">
          <div className='scr'>
            <div className='proheader' >
              <h2>AGV Robot User Interface:</h2>
            </div>
            <h5 >Description</h5>
            <p >I design the user interface for Automatic guided vehicle (AGV) , with the functionality to
              access the current location of the vehicle, whether it is connected to the local network or Not,
              how a user can control the vehicle through UI Buttons, What weight the vehicle is currently
              working on and extra.</p>
            <h5 >Responsibilities: (Fullstack Engineer)</h5>
            <li> Develop, maintain, and optimize server-side logic using Node.js.</li>
            <li> Design, implement, and maintain databases (relational or NoSQL) to store and retrieve data efficiently.</li>
            <li> Create and maintain APIs (Application Programming Interfaces) for communication between the frontend and backend systems.</li>
            <li> Optimize database queries and ensure data integrity.</li>
            <li>Implementing responsive design principles to ensure optimal user experience on various screen sizes.</li>
            <li> Designing and implementing user interfaces for web applications.</li>
            <h5 >Tools & Technologies :</h5>
            <p >HTML, CSS, JavaScript, ANTD, ReactJS, Webpack, npm, Git, AJAX, REST, Redux, Bitbucket, AWS Amplify,
              Serverless, Nodejs, MongoDB, JIRA.</p>
          </div>
          </div>

          <div className="content" style={{paddingBottom:'50px'}}>
          <div className='scr' >
            <div className='proheader' >
              <h2>WebbWe: 
                <small>(<Link to='https://www.webbwe.com/' target="_blank">https://www.webbwe.com/</Link>)</small></h2>
            </div>
            <h5 >Description</h5>
            <p >A web’s shopping mall. A platform where offline retailer can run an Ad into this platform to
              target desired customer. It have 2 main module: Admin, User.</p>
            <h5 >Responsibilities: (Fullstack Engineer)</h5>
            <li> Create entrie Frontend and Backend from Scratch with the tech stack of ReactJS, MUI, NodeJS, MySQL, AWS Lamda, Serverless Framework.</li>
            <li> Identifying and solving technical challenges and issues related to frontend development.</li>
            <li> Using version control systems like Git to manage and track changes in code.</li>
            <li> Communicating effectively with team members and stakeholders.</li>
            <li> Coordinating with backend developers to integrate frontend components with server-side logic.</li>
            <li> Implementing responsive design principles to ensure optimal user experience on various screen sizes.</li>
            <li> Collaborating with UX/UI designers to translate design wireframes and mockups into functional and responsive web pages.</li>
            <h5 >Tools & Technologies :</h5>
            <p >HTML, CSS, JavaScript, MUI, ReactJS, Webpack, npm, Git, AJAX, REST, Redux, Bitbucket, AWS Amplify, JIRA. </p>
          </div>
          </div>

        </div>


      </div>

    </>
  )
}

export default Blog