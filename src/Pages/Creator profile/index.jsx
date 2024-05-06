import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Compunents/Sidebar";
import NavBar from "../../Compunents/Navbar";
import CreatorTable from "./CreatorTable";

const Creatoprofile = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={2} className="p-0 pe-1">
            <Sidebar activeTab="Creatoprofile" />
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
                style={{
                  background: "#F9F9F9",
                  height: "calc(100vh - 89px)",
                  overflow: "auto",
                }}
              >
                <CreatorTable />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Creatoprofile;
