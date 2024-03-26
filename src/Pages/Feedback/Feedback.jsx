<<<<<<< HEAD
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../Compunents/Sidebar';
import NavBar from '../../Compunents/Navbar';
import FeedRewies from './FeedRewies';
=======

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Compunents/Sidebar";
import NavBar from "../../Compunents/Navbar";
import FeedRewies from "./FeedRewies";

>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a

const Feedback = () => {
  return (
    <>
<<<<<<< HEAD
      <Container fluid>
        <Row>
          <Col xs={2} md={2} className=' ps-0'>
            <Sidebar activeTab='Feedback' />
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
                className='pb-4 px-4 bg-white'
                style={{
                  background: '#F9F9F9',
                  height: '100vh',
                  overflowY: 'auto',
                  overflowX: 'hidden',
                }}
              >
                <FeedRewies />
              </Col>
=======
     <Container fluid>
        <Row>
          <Col xs={2} md={2} className=" ps-0">
            <Sidebar activeTab="Feedback" />
          </Col>
          <Col xs={10} md={10} style={{ backgroundColor: "#FAFBFF" }}>
            <Row>
              <NavBar  className=''/>
            </Row>
            <Row>
              <Col md={12} className="p-4 bg-white" style={{background:'#F9F9F9'}}>
               
              <FeedRewies/>
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

export default Feedback;
