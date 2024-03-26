import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
// import backgroundImage from '../../assets/Mask Group 10.png'

const Tablee = () => {
  const data = [
    {
      id: 1,
      profileName: 'John Doe',
      profileID: '12345',
      email: 'john.doe@example.com',
      country: 'USA',
      zipCode: '12345',
      followers: 1000,
      following: 500,
      posts: 50,
      profileCreationDate: '2022-03-10',
    },
    {
      id: 2,
      profileName: 'Jane Smith',
      profileID: '67890',
      email: 'jane.smith@example.com',
      country: 'UK',
      zipCode: '54321',
      followers: 1500,
      following: 700,
      posts: 80,
      profileCreationDate: '2022-04-15',
    },
    {
      id: 3,
      profileName: 'John Doe',
      profileID: '12345',
      email: 'john.doe@example.com',
      country: 'USA',
      zipCode: '12345',
      followers: 1000,
      following: 500,
      posts: 50,
      profileCreationDate: '2022-03-10',
    },
    {
      id: 4,
      profileName: 'Jane Smith',
      profileID: '67890',
      email: 'jane.smith@example.com',
      country: 'UK',
      zipCode: '54321',
      followers: 1500,
      following: 700,
      posts: 80,
      profileCreationDate: '2022-04-15',
    },
    {
      id: 5,
      profileName: 'John Doe',
      profileID: '12345',
      email: 'john.doe@example.com',
      country: 'USA',
      zipCode: '12345',
      followers: 1000,
      following: 500,
      posts: 50,
      profileCreationDate: '2022-03-10',
    },
    {
      id: 6,
      profileName: 'Jane Smith',
      profileID: '67890',
      email: 'jane.smith@example.com',
      country: 'UK',
      zipCode: '54321',
      followers: 1500,
      following: 700,
      posts: 80,
      profileCreationDate: '2022-04-15',
    },
    // Add more dummy data for 20 persons
  ];
  return (
    <>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className='shadow m-auto bg-deaitl rounded-4 mobw100'
            style={{ minHeight: '200px', width: '30%' }}
          >
            <div className='text-center pt-2'>
              <img
                src='/de4zci5-070477c6-12e0-4d32-80db-8592ff266c4d.png'
                alt=''
                width='100px'
                className=' p-1 m-auto'
                style={{ border: '#C54FE8 dashed 1px', borderRadius: '50%' }}
              />
            </div>
            <div className='text-center mt-2'>
              <p className='mb-0' style={{ fontSize: '12px' }}>
                <b> Anas Shiek </b>
              </p>
            </div>

            <div className='text-center'>
              <p className='text-secondary mb-0' style={{ fontSize: '12px' }}>
                Lorem ipsum dolor sit{' '}
              </p>
            </div>

            <div className='d-flex align-items-center justify-content-around mt-3'>
              <div className='text-center'>
                <p className='mb-0' style={{ fontSize: '12px' }}>
                  54,214{' '}
                </p>
                <p style={{ fontSize: '10px' }}>Posts</p>
              </div>
              <div className='text-center'>
                <p className='mb-0' style={{ fontSize: '12px' }}>
                  54,214{' '}
                </p>
                <p style={{ fontSize: '10px' }}>Followers</p>
              </div>
              <div className='text-center'>
                <p className='mb-0' style={{ fontSize: '12px' }}>
                  54,214{' '}
                </p>
                <p style={{ fontSize: '10px' }}>Following</p>
              </div>
            </div>
          </Col>
          <Col
            md={4}
            className='shadow m-auto rounded-4 mobw100'
            style={{ minHeight: '220px', width: '30%' }}
          >
            <div
              className=' mt-3 d-flex align-items-center'
              style={{ justifyContent: 'space-between' }}
            >
              <p className='mb-0' style={{ fontSize: '13px' }}>
                Shamsi Ali Followers
              </p>
              <p
                className='mb-0'
                style={{ fontSize: '13px', color: '#C54FE8' }}
              >
                See All
              </p>
            </div>
            <div className=' mt-3 d-flex align-items-center justify-content-start border-bottom pb-1'>
              <div>
                <img src='/page4_img3.png' width='30px' alt='' />
              </div>
              <div className='ms-2 border-bottom-1'>
                <p className='mb-0' style={{ fontSize: '13px' }}>
                  Sheikh Sab
                </p>
                <p className='mb-0 text-secondary' style={{ fontSize: '10px' }}>
                  Sheik Bari wadi Film ay
                </p>
              </div>
            </div>
            <div className=' mt-3 d-flex align-items-center justify-content-start border-bottom pb-1'>
              <div>
                <img src='/page4_img3.png' width='30px' alt='' />
              </div>
              <div className='ms-2 border-bottom-1'>
                <p className='mb-0' style={{ fontSize: '13px' }}>
                  Sheikh Sab
                </p>
                <p className='mb-0 text-secondary' style={{ fontSize: '10px' }}>
                  Sheik Bari wadi Film ay
                </p>
              </div>
            </div>
            <div className=' mt-3 d-flex align-items-center justify-content-start border-bottom pb-1'>
              <div>
                <img src='/page4_img3.png' width='30px' alt='' />
              </div>
              <div className='ms-2 border-bottom-1'>
                <p className='mb-0' style={{ fontSize: '13px' }}>
                  Sheikh Sab
                </p>
                <p className='mb-0 text-secondary' style={{ fontSize: '10px' }}>
                  Sheik Bari wadi Film ay
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={4}
            className='shadow m-auto rounded-4 mobw100'
            style={{ minHeight: '220px', width: '30%' }}
          >
            <div
              className=' mt-3 d-flex align-items-center'
              style={{ justifyContent: 'space-between' }}
            >
              <p className='mb-0' style={{ fontSize: '13px' }}>
                Shamsi Ali Followers
              </p>
              <p
                className='mb-0'
                style={{ fontSize: '13px', color: '#C54FE8' }}
              >
                See All
              </p>
            </div>
            <div className=' mt-3 d-flex align-items-center justify-content-start border-bottom pb-1'>
              <div>
                <img src='/page4_img3.png' width='30px' alt='' />
              </div>
              <div className='ms-2 border-bottom-1'>
                <p className='mb-0' style={{ fontSize: '13px' }}>
                  Sheikh Sab
                </p>
                <p className='mb-0 text-secondary' style={{ fontSize: '10px' }}>
                  Sheik Bari wadi Film ay
                </p>
              </div>
            </div>
            <div className=' mt-3 d-flex align-items-center justify-content-start border-bottom pb-1'>
              <div>
                <img src='/page4_img3.png' width='30px' alt='' />
              </div>
              <div className='ms-2 border-bottom-1'>
                <p className='mb-0' style={{ fontSize: '13px' }}>
                  Sheikh Sab
                </p>
                <p className='mb-0 text-secondary' style={{ fontSize: '10px' }}>
                  Sheik Bari wadi Film ay
                </p>
              </div>
            </div>
            <div className=' mt-3 d-flex align-items-center justify-content-start border-bottom pb-1'>
              <div>
                <img src='/page4_img3.png' width='30px' alt='' />
              </div>
              <div className='ms-2 border-bottom-1'>
                <p className='mb-0' style={{ fontSize: '13px' }}>
                  Sheikh Sab
                </p>
                <p className='mb-0 text-secondary' style={{ fontSize: '10px' }}>
                  Sheik Bari wadi Film ay
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={12} className='p-0  mt-3'>
            <div className='table-responsive'>
              <Table>
                <thead className='pribg'>
                  <tr className='pribg'>
                    {[
                      'Sr.',
                      'Profile Name',
                      `Profile I'D`,
                      'Email',
                      'Country',
                      `Zip Code`,
                      'Followers',
                      'Following',
                      `Posts`,
                      'Profile Creation Date',
                      'Action',
                    ].map((header, index) => (
                      <th
                        key={index}
                        className='pribg text-light'
                        style={{ fontSize: '13px' }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                      }}
                    >
                      <Link to='/Detail' className=''>
                        <td
                          className='p-2'
                          style={{
                            fontSize: '13px',
                            backgroundColor:
                              index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                          }}
                        >
                          {row.id}
                        </td>
                      </Link>

                      <td
                        style={{
                          fontSize: '13px',
                          backgroundColor:
                            index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                        }}
                      >
                        <img
                          src='/25e8ab5f311118b4be3c54e05bf44108.png'
                          alt='Example'
                          width='20'
                          height='20'
                        />
                        {row.profileName}
                      </td>

                      <td
                        style={{
                          fontSize: '13px',
                          backgroundColor:
                            index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                        }}
                      >
                        {row.profileID}
                      </td>
                      <td
                        style={{
                          fontSize: '13px',
                          backgroundColor:
                            index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                        }}
                      >
                        {row.email}
                      </td>
                      <td
                        style={{
                          fontSize: '13px',
                          backgroundColor:
                            index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                        }}
                      >
                        {row.country}
                      </td>
                      <td
                        style={{
                          fontSize: '13px',
                          backgroundColor:
                            index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                        }}
                      >
                        {row.zipCode}
                      </td>
                      <td
                        style={{
                          fontSize: '13px',
                          backgroundColor:
                            index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                        }}
                      >
                        {row.followers}
                      </td>
                      <td
                        style={{
                          fontSize: '13px',
                          backgroundColor:
                            index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                        }}
                      >
                        {row.following}
                      </td>
                      <td
                        style={{
                          fontSize: '13px',
                          backgroundColor:
                            index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                        }}
                      >
                        {row.posts}
                      </td>
                      <td
                        style={{
                          fontSize: '13px',
                          backgroundColor:
                            index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                        }}
                      >
                        {row.profileCreationDate}
                      </td>
                      <td
                        style={{
                          fontSize: '13px',
                          backgroundColor:
                            index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                        }}
                      >
                        <button
                          className='py-1 px-2 '
                          style={{
                            border: '1px solid #9F23C4',
                            borderRadius: '20px',
                            backgroundColor: ' #FFFFFF',
                            color: '#C54FE8',
                            fontSize: '12px',
                          }}
                        >
                          Warning{' '}
                          <img src='/SVG/icon2.svg' className='ms-3' alt='' />
                        </button>
                        <button
                          className='py-1 px-2 ms-3'
                          style={{
                            border: '1px solid #DF4655',
                            borderRadius: '20px',
                            backgroundColor: ' #DF4655',
                            color: '#FFFFFF',
                            fontSize: '12px',
                          }}
                        >
                          Delete{' '}
                          <img src='/SVG/icon.svg' className='ms-3' alt='' />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tablee;
