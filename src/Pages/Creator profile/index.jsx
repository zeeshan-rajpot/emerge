<<<<<<< HEAD
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../Compunents/Sidebar';
import NavBar from '../../Compunents/Navbar';
import CreatorTable from './CreatorTable';

const Creatoprofile = () => {
=======
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Compunents/Sidebar";
import NavBar from "../../Compunents/Navbar";
import CreatorTable from "./CreatorTable";

const Creatoprofile = () => {

>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a
  return (
    <>
      <Container fluid>
        <Row>
<<<<<<< HEAD
          <Col xs={2} md={2} className=' ps-0'>
            <Sidebar activeTab='Creatoprofile' />
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
              <Col md={12}>
                <CreatorTable />
              </Col>
=======
          <Col xs={2} md={2} className=" ps-0">
            <Sidebar activeTab="Creatoprofile" />
          </Col>
          <Col xs={10} md={10} style={{ backgroundColor: "#FAFBFF" }}>
            <Row>
              <NavBar  className=''/>
            </Row>
            <Row>
                
              <Col md={12}>
               <CreatorTable/>
       
              </Col>
            
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a

export default Creatoprofile;
