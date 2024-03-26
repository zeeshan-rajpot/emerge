<<<<<<< HEAD
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../Compunents/Navbar';
import Sidebar from '../../Compunents/Sidebar';
import ProductTable from './ProductTable';

const ProductListing = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={2} className=' ps-0'>
            <Sidebar activeTab='ProductListing' />
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
                className='overflow-hidden bg-white m-auto  p-0'
                style={{ background: '#F9F9F9', width: '98%' }}
              >
                <ProductTable />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductListing;
=======
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Compunents/Sidebar";
import NavBar from "../../Compunents/Navbar";
import ProductTable from "./ProductTable";

const ProductListing = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={2} md={2} className=" ps-0">
                        <Sidebar activeTab="ProductListing" />
                    </Col>
                    <Col xs={10} md={10} style={{ backgroundColor: "#FAFBFF" }}>
                        <Row>
                            <NavBar className='' />
                        </Row>
                        <Row>
                            <Col md={12} className="overflow-hidden bg-white m-auto mt-4 p-0" style={{ background: '#F9F9F9', width: '90%' }}>

                                <ProductTable />
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProductListing
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a
