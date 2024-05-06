import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../../Compunents/Navbar";
import Sidebar from "../../Compunents/Sidebar";
import LiveTable from "./LiveTable";
// import Tabbtn from "./Tabbtn";

const Live = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={2} className="p-0 pe-1">
            <Sidebar activeTab="Live" />
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
                className="p-4 bg-white m-auto  rounded-5"
                style={{
                  width: "98%",
                  height: "calc(100vh - 89px)",
                  overflow: "auto",
                }}
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
