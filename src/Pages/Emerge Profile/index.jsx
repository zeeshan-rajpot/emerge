<<<<<<< HEAD
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../Compunents/Sidebar';
import NavBar from '../../Compunents/Navbar';
=======
import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Compunents/Sidebar";
import NavBar from "../../Compunents/Navbar";
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a
import EmergeTable from './EmergeTable/EmergeTable';

const EmergeProfile = () => {
  return (
    <>
<<<<<<< HEAD
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
              <Col
                md={12}
                style={{
                  background: '#F9F9F9',
                }}
              >
                <EmergeTable />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EmergeProfile;
=======
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
             
   <EmergeTable/>
            </Col>
          
          </Row>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default EmergeProfile
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a
