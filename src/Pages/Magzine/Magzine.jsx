import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Compunents/Sidebar";
import NavBar from "../../Compunents/Navbar";
import Tabbtnorder from "./Tabbtnorder";

const Order = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={2} className="p-0 pe-1">
            <Sidebar activeTab="Magzine" />
          </Col>
          <Col
            xs={10}
            md={10}
            style={{
              backgroundColor: "#FAFBFF",
              height: "100vh",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <Row>
              <NavBar className="" />
            </Row>
            <Row>
              <Col
                md={12}
                style={{ height: "calc(100vh - 89px)", overflow: "auto" }}
              >
                <Tabbtnorder />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Order;
