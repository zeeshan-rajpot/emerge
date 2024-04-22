import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../Compunents/Sidebar';
import NavBar from '../../Compunents/Navbar';
import Tabbtn from './Tabbtn';

const Notification = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={2} className=' ps-0'>
            <Sidebar activeTab='' />
          </Col>
          <Col
            xs={10}
            md={10}
            style={{
              backgroundColor: '#FAFBFF',
            }}
          >
            <Row>
              <NavBar className='' />
            </Row>
            <Row>
              <Col
                md={12}
                xs={12}
                className=' reswidth md-p-4 p-0 bg-white m-auto mt-4 rounded-5'
                style={{
                  background: '#F9F9F9',
                  width: '90%',
                }}
              >
                <Tabbtn />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Notification;
