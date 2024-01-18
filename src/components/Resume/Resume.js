import React, { useState } from "react";
import './Resume.css'
import NavBar from "../NavBar/NavBar";
import html2canvas from 'html2canvas'; 
import jsPDF from 'jspdf';

const Resume = () => {
  const [open, setOpen] = useState(false);

  const downloadPDF = () => {
    const element = document.getElementById('resume-content');

    html2canvas(element).then((canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297); // A4 size: 210 x 297 mm
      pdf.save('Sachin_resume.pdf');
    });
  };

  return (
    <>
      {window.innerWidth < 1000 && <NavBar setOpen={setOpen} open={open} />}
      <div className="res">
        <h1>Resume</h1>
        <div className="Navbar__Link Navbar__Link-toggle icon" onClick={() => setOpen(!open)}>
          <i class="fas fa-bars"></i>
        </div>
      </div>
      
      <div className="content" style={{marginTop: '140px'}}>
        <button className="btn" onClick={downloadPDF}>
        Download Resume
          </button>
        <div className='resu' id="resume-content">
          <div className='html' >
            <div>
              <h2 >Sachin Sharma</h2>
              <h6>Full Stack Developer</h6>
            </div>
            <div>
              <p >
                +91-9306445345<br />
                sachusachin979@gmail.com<br />
                Delhi,India</p>
            </div>
          </div>

          <h5>Objective:</h5>
          <li>To challenge myself to find solutions to new problems which ensures the growth for me and my company.</li>
          <h5>Skills &amp; Ability :</h5>
          <li> <b>Programming Languages : </b> C#, Python, C, C++ </li>
          <li> <b>Bakend :</b> ASP.NET(MVC), NodeJs + Express(EventEmitter, SocketIO, SerialPort, API
            Design, TCP/IP .</li>
          <li><b>Web Technology : </b> HTML, CSS, Bootstrap, Javascript, Typescript,React js,React Native . </li>
          <li> <b>Frontend Web :</b> HTML, CSS, Bootstrap, Javascript, Typescript,React js,React Native . </li>
          <li> <b>Mobile : </b> React Native(Hooks, Redux, functional/class comp) </li>
          <li><b>Database : </b> SQL Server-2019, MongoDB </li>
          <li><b>Operating System : </b> Windows version (10, 8, 7), Linux (Debian) </li>
          <li> <b>Application :</b>Visual studio 2013,2015,2022 ,Visual Code</li>
          <li> <b>Extra : </b>GIT, GIT LAB,AWS(s3, ec2, loadblancer) </li>

          <h5>Education :</h5>
          <li><b>Bachelors in Computer Science & Engineering (2015 - 2019)</b> </li>
          <dd >a). Vaish College Of Engineering & Technology(affiliated to MDU)</dd>
          <dd>b). 75.80% (Aggregate of all semesters)</dd>

          <li> <b>Intermediate Education (10 + 2) (Graduating year: 2014)</b> </li>
          <dd>a). Arya Sen Sec School, (Affiliated to CBSE)</dd>
          <dd>b). Percentage: 70.00%</dd>

          <li><b>Metric Education (10th) (Graduating year: 2012)</b> </li>
          <dd>a).  Genious Sen Sec School (Affiliated to HBSE)</dd>
          <dd>b). Percentage: 93.00%</dd>

          <h5>Experience:</h5>
         
          <li><b>BVM Infotech</b> </li>
          <dd>a). Worked on: React-Native,React Js,Nodejs, Azure, MSSQL</dd>
          <dd>b). Current Role: Full Stack Developer</dd>
          <dd>b). Total Experience : 5 years(02/06/2019 to Current).</dd>

          <h5>Project:</h5>
          <li> <b>Scara Robot UI & Delta Scara UI</b> </li>
          <dd>This is a robot used in manufacturing line for lifting the weight/packets/box. The project is related to design its UI and backend,including the specification
            to track its battery status, its internal connectivity ,how much box/packet it
            has passed,its on/off feature,3d live moment to show on user UI and many more. Tech Used:- React js,node js,mssql,bootsrap etc</dd>


          <li> <b>WMS(Wirehouse Management System)</b> </li>
          <dd> It was a wirehouse management project ,including the specification, User Management(authentication and access role),
            Order Management(Order creation, tracking, and fulfillment),Inventory Management(Real-time tracking of inventory levels),Warehouse Layout and Slotting,
            Pick and Pack
            Tech Used: React js,node.js,mssql,bootsrap etc</dd>


          <li><b>WMS(Mobile Version):</b> </li>
          <dd>It is the mobile/Tab/Ipad version of above web application,including the same, feature and specification,
            Tech Used: React native,node js,mssql,bootsrap etc</dd>
        </div>

      </div>
    </>
  )
}

export default Resume