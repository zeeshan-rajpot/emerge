
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../../Compunents/Sidebar";
import NavBar from "../../../Compunents/Navbar";
import { Link } from 'react-router-dom';

const FeedReviews = ({ name, timestamp, review }) => {
    return (
        <>
            <Link to='/DetailPageFeedback'>

                <div className='d-flex align-items-center justify-content-start border rounded-5 overflow-hidden mt-4 bg-white'>
                    <div className='p-4' style={{ background: '#C54FE8' }}>
                        <img src="/smile.png" alt="" />
                    </div>
                    <div className='ms-2'>
                        <div className='d-flex align-items-center'>
                            <p className='pricolor mb-0' style={{ fontSize: '13px' }}>{name}</p>
                            <p className='mb-0' style={{ fontSize: '13px' }}>({timestamp})</p>
                        </div>
                        <p style={{ fontSize: '13px' }} className='mt-1 mb-0'>{review}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}


const DetailPageFeedback = () => {
    const reviews = [
        { name: 'John Doe', timestamp: '5 Days ago', review: 'This app is amazing! Highly recommend it to everyone.' },

        // Add more reviews as needed
    ];

    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={2} md={2} className=" ps-0">
                        <Sidebar activeTab="Feedback" />
                    </Col>
                    <Col xs={10} md={10} style={{ backgroundColor: "#FAFBFF" }}>
                        <Row>
                            <NavBar className='' />
                        </Row>
                        <Row>
                            <Col md={12} className="p-4 bg-white m-auto rounded-5 mt-4" style={{ background: '#F9F9F9' ,width:'90%'}}>



                                {reviews.map((review, index) => (
                                    <FeedReviews
                                        key={index}
                                        name={review.name}
                                        timestamp={review.timestamp}
                                        review={review.review}
                                    />
                                ))}



                                <p className="pricolor ms-2 mt-4 m-auto mb-0">User Name</p>
                                <input type="text" className="w-100 p-2 py-3 border rounded-4 " placeholder="Anas Akhtar"  />

                                <p className="pricolor ms-2 mt-4 m-auto mb-0"> Email Address</p>
                                <input type="text" className="w-100 p-2 py-3 border rounded-4 " placeholder="@hotmail.com"  />
                                <p className="pricolor ms-2 mt-4 m-auto mb-0"> Message</p>
                                <textarea name="" id="" cols="20" rows="5" className="w-100 rounded-5 border p-3" placeholder="Anyway, I'm pretty sure I'm just imagining things, but it made me think of you! How's everything going on your end? Let's catch up soon!"></textarea>
                                <div className="text-center mt-5"> 
                                <button className="px-5 pribg text-light border-0 py-2 m-auto text-center" style={{width:'300px'}}>Send</button>

                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DetailPageFeedback;
