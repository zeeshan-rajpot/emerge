import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () =>
{
  const [ currentDate, setCurrentDate ] = useState( new Date() );

  useEffect( () =>
  {
    const interval = setInterval( () =>
    {
      setCurrentDate( new Date() );
    }, 1000 ); // Update every second

    return () => clearInterval( interval );
  }, [] );

  const formattedTime = currentDate.toLocaleTimeString( [], {
    hour: 'numeric',
    minute: 'numeric',
  } );
  const formattedDate = currentDate.toLocaleDateString( 'en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  } );

  const formattedDateTime = `${ formattedTime } ${ formattedDate }`;

  return (
    <>
      <Col
        className='d-flex align-items-center justify-content-between pt-2 pb-3 flex-wrap bg-light'
        style={ { background: '#FFFFFF' } }
      >
        <div>
          <h5 className='p-0 mb-0 pricolor'> David William</h5>

          <p className=' mb-0'>{ formattedDateTime }</p>
        </div>

        <div className='me-3 d-flex align-items-center '>
          <div className='input-container shadow bg-light rounded-5 ressearch'>
            {/* <FaUser className='icon' /> */ }

            <input
              type='text'
              name='email'
              placeholder=''
              className='bg-light'
            />
            <img src='/Filter Icon.png' />
          </div>
          {/* <FaUser className='icon' /> */ }
          <Link to='/Notification'>
            <img src='/Component 11 – 1.svg' className='resnoti' />
          </Link>
          <div className='mob'>
            <img src='/Group 67873.svg' alt='' />
            <span> William</span>
          </div>
        </div>
      </Col>
    </>
  );
};

export default NavBar;
