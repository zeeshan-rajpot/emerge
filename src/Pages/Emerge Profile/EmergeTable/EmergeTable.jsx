import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EmergeTable = () => {
    const data = [
        { id: 1, profileName: 'John Doe', profileID: '12345', email: 'john.doe@example.com', country: 'USA', zipCode: '12345', followers: 1000, following: 500, posts: 50, profileCreationDate: '2022-03-10', action: 'edit' },
        { id: 2, profileName: 'Jane Smith', profileID: '67890', email: 'jane.smith@example.com', country: 'UK', zipCode: '54321', followers: 1500, following: 700, posts: 80, profileCreationDate: '2022-04-15', action: 'edit' },
        { id: 3, profileName: 'John Doe', profileID: '12345', email: 'john.doe@example.com', country: 'USA', zipCode: '12345', followers: 1000, following: 500, posts: 50, profileCreationDate: '2022-03-10', action: 'edit' },
        { id: 4, profileName: 'Jane Smith', profileID: '67890', email: 'jane.smith@example.com', country: 'UK', zipCode: '54321', followers: 1500, following: 700, posts: 80, profileCreationDate: '2022-04-15', action: 'edit' },
        { id: 5, profileName: 'John Doe', profileID: '12345', email: 'john.doe@example.com', country: 'USA', zipCode: '12345', followers: 1000, following: 500, posts: 50, profileCreationDate: '2022-03-10', action: 'edit' },
        { id: 6, profileName: 'Jane Smith', profileID: '67890', email: 'jane.smith@example.com', country: 'UK', zipCode: '54321', followers: 1500, following: 700, posts: 80, profileCreationDate: '2022-04-15', action: 'edit' },
      ,
      { id: 7, profileName: 'John Doe', profileID: '12345', email: 'john.doe@example.com', country: 'USA', zipCode: '12345', followers: 1000, following: 500, posts: 50, profileCreationDate: '2022-03-10', action: 'edit' },
      { id: 8, profileName: 'Jane Smith', profileID: '67890', email: 'jane.smith@example.com', country: 'UK', zipCode: '54321', followers: 1500, following: 700, posts: 80, profileCreationDate: '2022-04-15', action: 'edit' },
      { id: 9, profileName: 'John Doe', profileID: '12345', email: 'john.doe@example.com', country: 'USA', zipCode: '12345', followers: 1000, following: 500, posts: 50, profileCreationDate: '2022-03-10', action: 'edit' },
      { id: 10, profileName: 'Jane Smith', profileID: '67890', email: 'jane.smith@example.com', country: 'UK', zipCode: '54321', followers: 1500, following: 700, posts: 80, profileCreationDate: '2022-04-15', action: 'edit' },
      { id: 11, profileName: 'John Doe', profileID: '12345', email: 'john.doe@example.com', country: 'USA', zipCode: '12345', followers: 1000, following: 500, posts: 50, profileCreationDate: '2022-03-10', action: 'edit' },
      { id: 12, profileName: 'Jane Smith', profileID: '67890', email: 'jane.smith@example.com', country: 'UK', zipCode: '54321', followers: 1500, following: 700, posts: 80, profileCreationDate: '2022-04-15', action: 'edit' },
      // Add more dummy data for 20 persons
    ];
    return (
        <>
            <Container className='' >
                <Row className='mt-3'>
                    <Col md={12} className='py-3  ' style={{ borderTopRightRadius: '30px', borderTopLeftRadius: '30px', backgroundColor: '#fff' }}>
                        <b>    Total Emerge Profile <span className='text-secaondry'>(56,251) </span>
                        </b>
                    </Col>
                    <Col md={12} className='p-0  ' >

                        <div className="table-responsive">
                            <Table>
                                <thead className='pribg'>
                                    <tr className='pribg'>
                                        {['Sr.', 'Profile Name', `Profile I'D`, 'Email', 'Country', `Zip Code`, 'Followers', 'Following', `Posts`, 'Profile Creation Date', 'Action'].map((header, index) => (
                                            <th key={index} className='pribg text-light' style={{ fontSize: '13px' }}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                 <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc' }}>
                                         <Link to='/Detail' className=''>
                                          <td className='p-2' style={{ fontSize: '13px', backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc' }}>{row.id}</td>
                                         </Link>  

                                            <td style={{ fontSize: '13px', backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc' }}>
                                                <img src='/25e8ab5f311118b4be3c54e05bf44108.png' alt="Example" width="20" height="20" />
                                                {row.profileName}
                                            </td>

                                          
                                                 <td style={{ fontSize: '13px', backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc' }}>{row.profileID}</td>
                                               <td style={{ fontSize: '13px', backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc' }}>{row.email}</td>
                                            <td style={{ fontSize: '13px', backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc' }}>{row.country}</td>
                                            <td style={{ fontSize: '13px', backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc' }}>{row.zipCode}</td>
                                            <td style={{ fontSize: '13px', backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc' }}>{row.followers}</td>
                                            <td style={{ fontSize: '13px', backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc' }}>{row.following}</td>
                                            <td style={{ fontSize: '13px', backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc' }}>{row.posts}</td>
                                            <td style={{ fontSize: '13px', backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc' }}>{row.profileCreationDate}</td>
                                            <td style={{ fontSize: '13px', backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc' }}>{row.action}</td>

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
}

export default EmergeTable;
