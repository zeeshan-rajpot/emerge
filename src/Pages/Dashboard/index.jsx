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
              <Col md={9}>
                <h4 className="text-center mt-4">
                  <b>Pending Approvals Await Your Verdict</b>
                </h4>
       
              </Col>
              <Col
                md={3}
                className="border vh-100"
                style={{ backgroundColor: "#FAFBFF" }}
              >
              
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;