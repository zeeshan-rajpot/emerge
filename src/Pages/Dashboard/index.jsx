import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Compunents/Sidebar";
import NavBar from "../../Compunents/Navbar";


const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={2} className="border ps-0">
            <Sidebar activeTab="Dashboard" />
          </Col>
          <Col xs={10} md={10} style={{ backgroundColor: "#FAFBFF" }}>
            <Row>
              <NavBar  className=''/>
            </Row>
            <Row>
              <Col md={12}>
               
       
              </Col>
            
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;