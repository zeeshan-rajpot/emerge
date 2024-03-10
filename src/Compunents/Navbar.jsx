import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

const NavBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second
  
    return () => clearInterval(interval);
  }, []);
  
  const formattedTime = currentDate.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
  const formattedDate = currentDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  
  const formattedDateTime = `${formattedTime} ${formattedDate}`;
  

  return (
    <>
      <Col className="d-flex align-item-center justify-content-between pt-2 pb-3 flex-wrap bg-light" style={{background:'#FFFFFF'}} >
        <div>
        <h5 className="p-0 mb-0 ">Hello, David William</h5>

        <p className=" mb-0">{formattedDateTime}</p>

        </div>
      
      
        <div
     className="me-3"
        > 
         <input type="text" placeholder="Search" className="bg-light w-100"  />
          {/* <FaUser className='icon' /> */}
          <img src="/Component 11 – 1.svg" />
          <img src="/Group 67873.svg" alt="" />
          <span>David William</span>
        </div>
      </Col>
    </>
  );
};

export default NavBar;