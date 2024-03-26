<<<<<<< HEAD
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../Compunents/Sidebar';
import NavBar from '../../Compunents/Navbar';
import ListingTable from './ListingTable';
=======
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Compunents/Sidebar";
import NavBar from "../../Compunents/Navbar";
import ListingTable from "./ListingTable";
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a

const ListingApproval = () => {
  return (
    <>
<<<<<<< HEAD
      <Container fluid>
        <Row>
          <Col xs={2} md={2} className=' ps-0'>
            <Sidebar activeTab='ListingApproval' />
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
                className='overflow-hidden bg-white m-auto p-0'
                style={{ background: '#F9F9F9', width: '98%' }}
              >
                <ListingTable />
              </Col>
=======
          <Container fluid>
        <Row>
          <Col xs={2} md={2} className=" ps-0">
            <Sidebar activeTab="ListingApproval" />
          </Col>
          <Col xs={10} md={10} style={{ backgroundColor: "#FAFBFF" }}>
            <Row>
              <NavBar  className=''/>
            </Row>
            <Row>
              <Col md={12} className="overflow-hidden bg-white m-auto mt-4 p-0" style={{ background: '#F9F9F9', width: '90%' }}>
               
       <ListingTable/>
              </Col>
            
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a
            </Row>
          </Col>
        </Row>
      </Container>
<<<<<<< HEAD
    </>
  );
};

export default ListingApproval;
=======
      
    </>
  )
}

export default ListingApproval
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a
