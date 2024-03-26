import React from 'react';
<<<<<<< HEAD
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../Compunents/Navbar';
import Sidebar from '../../Compunents/Sidebar';
=======
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../Compunents/Sidebar';
import NavBar from '../../Compunents/Navbar';
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a
import LiveTable from './LiveTable';
// import Tabbtn from "./Tabbtn";

const Live = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={2} className=' ps-0'>
            <Sidebar activeTab='Live' />
          </Col>
<<<<<<< HEAD
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
=======
          <Col xs={10} md={10} style={{ backgroundColor: '#FAFBFF' }}>
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a
            <Row>
              <NavBar className='' />
            </Row>
            <Row>
              <Col
                md={12}
<<<<<<< HEAD
                className='p-4 bg-white m-auto  rounded-5'
                style={{ width: '98%' }}
=======
                className='p-4 bg-white m-auto mt-4 rounded-5'
                style={{ width: '90%' }}
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a
              >
                {/* <Tabbtn/> */}
                <LiveTable />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Live;
