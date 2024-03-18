import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../Compunents/Sidebar';
import NavBar from '../../Compunents/Navbar';
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
