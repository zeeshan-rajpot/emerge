import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../Compunents/Navbar';
import Sidebar from '../../Compunents/Sidebar';

const index = () => {
  const [activeButton, setActiveButton] = useState('Chat');

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);
    // You can add logic here to handle button clicks
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={2} className=' ps-0'>
            <Sidebar activeTab='Private Chat' />
          </Col>
          <Col xs={10} md={10} style={{ backgroundColor: '#FAFBFF' }}>
            <Row>
              <NavBar className='' />
            </Row>
            <Row>
              <Col
                md={12}
                className='p-4 bg-white m-auto mt-4 rounded-5'
                style={{ width: '90%' }}
              >
                <div
                  className='m-auto w-50 mobwidth d-flex justify-content-center align-items-center '
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '38px',
                    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <button
                    className={`w-100 border-0 p-2 ${
                      activeButton === 'Chat' ? 'active' : ''
                    }`}
                    style={{
                      background:
                        activeButton === 'Chat'
                          ? 'linear-gradient(to right, #C955EC, #8300AA)'
                          : '#FFFFFF',
                      borderRadius: '38px',
                      color: activeButton === 'Chat' ? '#FFFFFF' : '#000000',
                    }}
                    onClick={() => handleButtonClick('Chat')}
                  >
                    Chat
                  </button>
                  <button
                    className={`w-100 border-0 p-2 ${
                      activeButton === 'Detail' ? 'active' : ''
                    }`}
                    style={{
                      background:
                        activeButton === 'Detail'
                          ? 'linear-gradient(to right, #C955EC, #8300AA)'
                          : '#FFFFFF',
                      borderRadius: '38px',
                      color: activeButton === 'Detail' ? '#FFFFFF' : '#000000',
                    }}
                    onClick={() => handleButtonClick('Detail')}
                  >
                    Detail
                  </button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
