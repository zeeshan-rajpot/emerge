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
        <Col xs={2} md={2} className="border ps-0">
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

export default Detail;
