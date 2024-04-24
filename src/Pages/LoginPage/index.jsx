import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const index = () => {
  return (
    <div>
      <Container className='mt-5'>
        <Row className=''>
          <Col lg={6} md={6} xl={6} xs={12}>
            <div
              className='shadow py-5 '
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '43px',
              }}
            >
              <div className='text-center'>
                <img
                  src='/EMERGE LOGO EPS.svg'
                  alt=''
                  style={{ width: '149px', height: '186px' }}
                />
              </div>
              <div className='text-center'>
                {' '}
                <p
                  style={{
                    color: '#C54FE8',
                    fontWeight: '700',
                    flexSize: '42px',
                  }}
                >
                  Welcome back!
                </p>
              </div>

              <div className='text-center px-5 pb-5'>
                <div
                  className='w-100 py-2 px-4 shadow d-flex justify-content-center align-items-center'
                  style={{ backgroundColor: '#FFFFFF', borderRadius: '20px' }}
                >
                  <img src='/emailicon.svg' alt='' classname='me-3' />
                  <input
                    type='text'
                    className='w-100 border-0'
                    placeholder='Davidwilliam@gmail.com'
                  />
                </div>
                <div
                  className='w-100 mt-4 py-2 px-4 shadow d-flex justify-content-center align-items-center'
                  style={{ backgroundColor: '#FFFFFF', borderRadius: '20px' }}
                >
                  <img src='/Lockicon.svg' alt='' classname='me-3' />
                  <input
                    type='password'
                    className='w-100 border-0'
                    placeholder='*************'
                  />
                </div>
              </div>
              <Row className='pb-4'>
                <Col lg={4}></Col>
                <Col lg={4}>
                  <Link to='/Dashboard'>
                    <button
                      className='border-0 w-100 py-2 px-3 shadow'
                      style={{
                        color: '#FFFFFF',
                        backgroundColor: '#C54FE8',
                        borderRadius: '25px',
                      }}
                    >
                      Sign In
                      <img src='/SVG/icon.svg' alt='' className='ms-3' />
                    </button>
                  </Link>
                </Col>
                <Col lg={4}></Col>
              </Row>
            </div>
          </Col>
          <Col lg={6} md={6} xl={6} xs={12}>
            <div className='px-5 pt-5 mt-5 text-center'>
              <img src='/Digital lifestyle.png' alt='' className='w-75' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
