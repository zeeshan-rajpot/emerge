import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Compunents/Sidebar";
import NavBar from "../../Compunents/Navbar";
import CardsDetails from "./CardsDetail.jsx";
import ColChart from "./ColChart.jsx";
import LineChart from "./LineChart.jsx";
import DonutChart from "./DonutChart.jsx";
import MainDonutChart from "./MainDonutChart.jsx";
import LocationMap from "./LocationMap.jsx";
import MainLineChart from "./MainLineChart.jsx";
import Mostviwedpost from "./Mostviwedpost.jsx";

const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={2} className="p-0 pe-1">
            <Sidebar activeTab="Dashboard" />
          </Col>
          <Col xs={10} md={10} style={{ backgroundColor: "#F9F9F9" }}>
            <Row>
              <NavBar className="" />
            </Row>
            <Row>
              <Col
                className="px-4"
                md={12}
                style={{
                  height: "calc(100vh - 89px)",
                  overflow: "auto"
                }}
              >
                <Row className="g-3">
                  <Col lg={4} xl={4} md={6}>
                    <CardsDetails
                      logoSrc="/3User.svg"
                      title="Total Users"
                      value="995,600"
                      changePercentage="18"
                      chart={<ColChart />}
                    />
                  </Col>
                  <Col lg={4} xl={4} md={6}>
                    <CardsDetails
                      logoSrc="/Profile.svg"
                      title="Total Emerge Profile"
                      value="54,254"
                      changePercentage="18"
                      chart={<LineChart />}
                    />
                  </Col>
                  <Col lg={4} xl={4} md={6}>
                    <CardsDetails
                      logoSrc="/Document.svg"
                      title="Total My Creator"
                      value="54,254"
                      changePercentage="18"
                      chart={<DonutChart />}
                    />
                  </Col>
                  <Col lg={4} xl={4} md={6}>
                    <CardsDetails
                      logoSrc="/Shield.svg"
                      title="Total Active Users"
                      value="54,254"
                      changePercentage="18"
                      chart={<LineChart />}
                    />
                  </Col>
                </Row>

                <Row className="my-4 align-items-center">
                  <Col xs={12} md={6}>
                    <MainLineChart />
                  </Col>
                  <Col xs={12} md={6}>
                    <MainDonutChart />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <LocationMap />
                  </Col>
                  <Col xs={12} md={6}>
                    <Mostviwedpost />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
