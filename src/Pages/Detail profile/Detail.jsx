<<<<<<< HEAD
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../Compunents/Navbar';
import Sidebar from '../../Compunents/Sidebar';
import Table from './table';

const Detail = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={2} className=' ps-0'>
            <Sidebar activeTab='EmergeProfile' />
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
              <Col md={12} style={{ background: '#F9F9F9' }}>
                <Table />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
=======
import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Compunents/Sidebar";
import NavBar from "../../Compunents/Navbar";
import Table from './table';


const Detail = () => {
  return (
    <>
          <Container fluid>
      <Row>
        <Col xs={2} md={2} className=" ps-0">
          <Sidebar activeTab="EmergeProfile" />
        </Col>
        <Col xs={10} md={10} style={{ backgroundColor: "#FAFBFF" }}>
          <Row>
            <NavBar  className=''/>
          </Row>
          <Row>
            <Col md={12} style={{background:'#F9F9F9'}}>
             
<Table/>
            </Col>
          
          </Row>
        </Col>
      </Row>
    </Container>
    </>
  );
}
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a

export default Detail;
