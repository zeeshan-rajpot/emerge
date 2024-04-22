import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../Compunents/Sidebar';
import NavBar from '../../Compunents/Navbar';
import CardsDetails from './CardsDetail.jsx';
import ColChart from './ColChart.jsx';
import LineChart from './LineChart.jsx';
import DonutChart from './DonutChart.jsx';
import MainDonutChart from './MainDonutChart.jsx';
import LocationMap from './LocationMap.jsx';
import MainLineChart from './MainLineChart.jsx';
import Mostviwedpost from './Mostviwedpost.jsx';

const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={2} className=' ps-0'>
            <Sidebar activeTab='Dashboard' />
          </Col>
          <Col xs={10} md={10} style={{ backgroundColor: '#F9F9F9' }}>
            <Row>
              <NavBar className='' />
            </Row>
            <Row>
              <Col
                md={12}
                style={{
                  height: '100vh',
                  overflowY: 'auto',
                  overflowX: 'hidden',
                }}
              >
                <Row>
                  <Col lg={3} xl={3} md={3}>
                    <CardsDetails
                      logoSrc='/3User.svg'
                      title='Total Users'
                      value='995,600'
                      changePercentage='18'
                      chart={<ColChart />}
                    />
                  </Col>
                  <Col lg={3} xl={3} md={3}>
                    <CardsDetails
                      logoSrc='/Profile.svg'
                      title='Total Emerge Profile'
                      value='54,254'
                      changePercentage='18'
                      chart={<LineChart />}
                    />
                  </Col>
                  <Col lg={3} xl={3} md={3}>
                    <CardsDetails
                      logoSrc='/Document.svg'
                      title='Total My Creator'
                      value='54,254'
                      changePercentage='18'
                      chart={<DonutChart />}
                    />
                  </Col>
                  <Col lg={3} xl={3} md={3}>
                    <CardsDetails
                      logoSrc='/Shield.svg'
                      title='Total Active Users'
                      value='54,254'
                      changePercentage='18'
                      chart={<LineChart />}
                    />
                  </Col>
                </Row>

                <Row className='my-4'>
                  <Col xs={12} md={8}>
                    <MainLineChart />
                  </Col>
                  <Col xs={12} md={4}>
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
