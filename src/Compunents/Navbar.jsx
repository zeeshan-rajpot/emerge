<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
=======
import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a

const NavBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second
<<<<<<< HEAD

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentDate.toLocaleTimeString([], {
    hour: 'numeric',
    minute: 'numeric',
  });
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const formattedDateTime = `${formattedTime} ${formattedDate}`;

  return (
    <>
      <Col
        className='d-flex align-items-center justify-content-between pt-2 pb-3 flex-wrap bg-light'
        style={{ background: '#FFFFFF' }}
      >
        <div>
          <h5 className='p-0 mb-0 pricolor'> David William</h5>

          <p className=' mb-0'>{formattedDateTime}</p>
        </div>

        <div className='me-3 d-flex align-items-center '>
          <div className='input-container shadow bg-light rounded-5'>
            {/* <FaUser className='icon' /> */}

            <input
              type='text'
              name='email'
              placeholder=''
              className='bg-light'
            />
            <img src='/Filter Icon.png' />
          </div>
          {/* <FaUser className='icon' /> */}
          <Link to='/Notification'>
            <img src='/Component 11 – 1.svg' />
          </Link>
          <div className='mob'>
            <img src='/Group 67873.svg' alt='' />
            <span> William</span>
          </div>
=======
  
    return () => clearInterval(interval);
  }, []);
  
  const formattedTime = currentDate.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
  const formattedDate = currentDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  
  const formattedDateTime = `${formattedTime} ${formattedDate}`;
  

  return (
    <>
      <Col className="d-flex align-items-center justify-content-between pt-2 pb-3 flex-wrap bg-light" style={{background:'#FFFFFF'}} >
        <div>
        <h5 className="p-0 mb-0 pricolor"> David William</h5>

        <p className=" mb-0">{formattedDateTime}</p>

        </div>
      
      
        <div
     className="me-3 d-flex align-items-center "
        > 
     <div className="input-container shadow bg-light rounded-5">
              {/* <FaUser className='icon' /> */}
 
              <input type="text" name='email' placeholder="" className="bg-light" />
              <img src= "/Filter Icon.png" />
            </div>
          {/* <FaUser className='icon' /> */}
          <Link to='/Notification'>
          <img src="/Component 11 – 1.svg" />
          </Link>
          <img src="/Group 67873.svg" alt="" />
          <span > William</span>
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a
        </div>
      </Col>
    </>
  );
};

<<<<<<< HEAD
export default NavBar;
=======
export default NavBar;
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a
