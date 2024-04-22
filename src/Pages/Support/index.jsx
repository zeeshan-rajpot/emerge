import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../Compunents/Navbar';
import Sidebar from '../../Compunents/Sidebar';
import Chat from './Chat.jsx';
const index = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmation = () => {
    // Set the state to true to show the paragraph
    setIsConfirmed(true);
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={2} className=' ps-0'>
            <Sidebar activeTab='Support' />
          </Col>
          <Col
            xs={10}
            md={10}
            style={{
              backgroundColor: '#FAFBFF',
              height: '100vh',
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            <Row>
              <NavBar className='' />
            </Row>
            <Row>
              <Col
                md={12}
              >
                <div className='shadow mb-3 mx-3 rounded-4 bg-white  '>
                  {!isConfirmed && (
                    <div>
                      <div
                        className='d-flex justify-content-between align-items-center  px-4'
                        style={{ borderRadius: '25px' }}
                      >
                        <div className='p-2'>
                          <p>Chat</p>
                        </div>
                        <div className='p-2'>
                          <img src='/Search.svg' alt='' />
                        </div>
                      </div>

                      <div style={{ height: '70vh', overflowY: 'auto' }}>
                        <div
                          className='d-flex justify-content-between align-items-center w-100'
                          role='button'
                          onClick={handleConfirmation}
                        >
                          <div style={{ width: '97%' }}>
                            <div
                              style={{ backgroundColor: '#F0E5F7' }}
                              className='d-flex justify-content-between align-items-center  p-2 '
                            >
                              <div className='px-2 d-flex'>
                                <div
                                  className='d-flex justify-content-center align-items-center'
                                  style={{
                                    width: '36px',
                                    height: '35px',
                                    borderRadius: '50px',
                                    backgroundColor: '#FBCACA',
                                  }}
                                >
                                  <p
                                    className='my-0'
                                    style={{
                                      color: '#884747',
                                      fontSize: '15px',
                                      fontWeight: '500',
                                    }}
                                  >
                                    G
                                  </p>
                                </div>
                                <div className='d-flex flex-column justify-content-start align-items-start ms-3'>
                                  <p
                                    className=' my-0'
                                    style={{
                                      color: '#252424',
                                      fontSize: '17px',
                                      fontWeight: '500',
                                    }}
                                  >
                                    Gus M.
                                  </p>
                                  <p
                                    className=' my-0'
                                    style={{
                                      color: '#66717E',
                                      fontSize: '12px',
                                      fontWeight: '500',
                                    }}
                                  >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                  </p>
                                </div>
                              </div>

                              <div className='px-2'>
                                <p
                                  className='my-0'
                                  style={{
                                    color: '#ABAAAA',
                                    fontSize: '10px',
                                    fontWeight: '500',
                                  }}
                                >
                                  1:23 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className='px-3' style={{ width: '3%' }}>
                            <img src='/threedots.svg' alt='' />
                          </div>
                        </div>

                        <div
                          className='d-flex justify-content-between align-items-center w-100'
                          role='button'
                          onClick={handleConfirmation}
                        >
                          <div style={{ width: '97%' }}>
                            <div
                              style={{ backgroundColor: '#FFFFFF' }}
                              className='d-flex justify-content-between align-items-center  p-2 '
                            >
                              <div className='px-2 d-flex'>
                                <div
                                  className='d-flex justify-content-center align-items-center'
                                  style={{
                                    width: '36px',
                                    height: '35px',
                                    borderRadius: '50px',
                                    backgroundColor: '#FBCACA',
                                  }}
                                >
                                  <p
                                    className='my-0'
                                    style={{
                                      color: '#884747',
                                      fontSize: '15px',
                                      fontWeight: '500',
                                    }}
                                  >
                                    G
                                  </p>
                                </div>
                                <div className='d-flex flex-column justify-content-start align-items-start ms-3'>
                                  <p
                                    className=' my-0'
                                    style={{
                                      color: '#252424',
                                      fontSize: '17px',
                                      fontWeight: '500',
                                    }}
                                  >
                                    Gus M.
                                  </p>
                                  <p
                                    className=' my-0'
                                    style={{
                                      color: '#66717E',
                                      fontSize: '12px',
                                      fontWeight: '500',
                                    }}
                                  >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                  </p>
                                </div>
                              </div>

                              <div className='px-2'>
                                <p
                                  className='my-0'
                                  style={{
                                    color: '#ABAAAA',
                                    fontSize: '10px',
                                    fontWeight: '500',
                                  }}
                                >
                                  1:23 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className='px-3' style={{ width: '3%' }}>
                            <img src='/threedots.svg' alt='' />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {isConfirmed && (
                    <div>
                      <Chat />
                    </div>
                  )}
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
