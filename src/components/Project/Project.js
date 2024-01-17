import React, { useState } from "react";
import './Project.css'
import NavBar from "../NavBar/NavBar";


const Project = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {window.innerWidth < 1000 && <NavBar setOpen={setOpen} open={open} />}

      <div className="pro">
        <h1>Current Company Projects</h1>
        <div className="Navbar__Link Navbar__Link-toggle icon" onClick={() => setOpen(!open)}>
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div style={{ marginTop: '140px' }}>
        <div className="content" style={{ marginTop: '20px' }}>
          <div className='scr'>
            <div className='proheader' >
              <h2>Scara Robot </h2>
            </div>
            <p >This is a robot used in manufacturing line for lifting the weight/packets/box
              The project is related to design its UI and backend,including the specification to track its  battery status, its internal connectivity ,how much box/packet it
              has passed,its on/off feature,3d live moment to show on user UI and many more.
            </p>
            <h5 >Roles & Responsibility :</h5>
            <p >Design and implement overall architecture of web application
              front-end components and user interfaces using HTML, CSS, and JavaScript,bootstrap,matierial UI frameworks like React with redux and
              server-side logic using technologies Node.js with express also Create and maintained databases ( MySQL, MongoDB,) and writing efficient queries.
            </p>
          </div>
        </div>

        <div className="content">
          <div className='scr'>
            <div className='proheader'>
              <h2>Delta Scara Robot</h2>
            </div>
            <p>This is a robot used in manufacturing line for lifting the weight/packets/box.
              The project is related to design its UI and backend,including the specification to track its  battery status, its internal connectivity ,how much box/packet it
              has passed,its on/off feature,3d live moment to show on user UI and many more.
            </p>
            <h5>Roles & Responsibility :</h5>
            <p >Design and implement overall architecture of web application
              front-end components and user interfaces using HTML, CSS, and JavaScript,bootstrap,matierial UI frameworks like React with redux and
              server-side logic using technologies Node.js with express also Create and maintained databases ( MySQL, MongoDB,) and writing efficient queries.
            </p>

          </div>
        </div>

        <div className="content">
          <div className='scr'>
            <div className='proheader' >
              <h2>Automatic Guided Vehicle</h2>
            </div>
            <p>This is a automatic guided Vehicle used in manufacturing line for lifting the weight/packets/box.
              The project is related to design its UI and backend,including the specification to track its  battery status, its internal connectivity ,how much box/packet it
              has it hold,its on/off feature,3d live moment to show on user UI and many more.
            </p>
            <h5>Roles & Responsibility :</h5>
            <p >Design and implement overall architecture of web application
              front-end components and user interfaces using HTML, CSS, and JavaScript,bootstrap,matierial UI frameworks like React with redux and
              server-side logic using technologies Node.js with express also Create and maintained databases ( MySQL, MongoDB,) and writing efficient queries.
            </p>
          </div>
        </div>

        <div className="content">
          <div className='scr'>
            <div className='proheader'>
              <h2>Wirehouse Management System(Web Version)</h2>
            </div>
            <p >It was a wirehouse  management project ,including the specification
              User Management(authentication and access role),Order Management(Order creation, tracking, and fulfillment),Inventory Management(Real-time tracking of inventory levels)
              Warehouse Layout and Slotting and Pick and Pack.
            </p>
            <h5>Roles & Responsibility :</h5>
            <p >Design and implement overall architecture of web application
              front-end components and user interfaces using HTML, CSS, and JavaScript,bootstrap,matierial UI frameworks like React with redux and
              server-side logic using technologies Node.js with express also Create and maintained databases ( MySQL, MongoDB,) and writing efficient queries.
            </p>
          </div>
        </div>

        <div className="content">
          <div className='scr'>
            <div className='proheader'>
              <h2>Wirehouse Management System(Mobile Version)</h2>


            </div>
            <p>It is the mobile/Tab/Ipad version of above web version,including the same,
              feature and specification.
            </p>


            <h5 >Roles & Responsibility :</h5>
            <p>Design and implement overall architecture of web application
              front-end components and user interfaces using HTML, CSS, and JavaScript,bootstrap,matierial UI frameworks like React with redux and
              server-side logic using technologies Node.js with express also Create and maintained databases ( MySQL, MongoDB,) and writing efficient queries.
            </p>


          </div>
        </div>
      </div>

    </>
  )
}

export default Project