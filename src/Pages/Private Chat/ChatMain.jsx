import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../Compunents/Sidebar';
import NavBar from '../../Compunents/Navbar';

import Chat from './Chat';
import Chattab from './Chattab';

const ChatMain = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={2} className=' ps-0'>
            <Sidebar activeTab='Chat' />
          </Col>
          <Col xs={10} md={10} style={{ backgroundColor: '#FAFBFF' }}>
            <Row>
              <NavBar className='' />
            </Row>
            <Row>
              <Col md={12} style={{ background: '#F9F9F9' }}>
                <Chattab />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChatMain;
