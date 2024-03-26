import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Mostviwedpost = () => {
  const data = [
    {
      MostViewedPosts: 'Handcrafted Tonic',
      Date: 'John Doe',
      Views: '12345',
      Likes: 'USA',
      Comments: '12345',
      Shares: '1000',
    },
  ];
  return (
    <div>
      <div className='table-responsive w-100'>
        <Table>
          <thead className='mostpribg '>
            <tr className='pribg text-nowrap'>
              {[
                'Most Viewed Posts',
                'Date',
                `Views`,
                'Likes',
                'Comments',
                `Shares`,
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
                  backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                }}
              >
                <td
                  style={{
                    fontSize: '13px',
                    backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                  }}
                >
                  <img
                    src='/25e8ab5f311118b4be3c54e05bf44108.png'
                    alt='Example'
                    width='46'
                    height='46'
                  />
                  {row.MostViewedPosts}
                </td>

                <td
                  style={{
                    fontSize: '13px',
                    backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                  }}
                >
                  {row.Date}
                </td>
                <td
                  style={{
                    fontSize: '13px',
                    backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                  }}
                >
                  {row.Views}
                </td>
                <td
                  style={{
                    fontSize: '13px',
                    backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                  }}
                >
                  {row.Likes}
                </td>
                <td
                  style={{
                    fontSize: '13px',
                    backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                  }}
                >
                  {row.Comments}
                </td>
                <td
                  style={{
                    fontSize: '13px',
                    backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                  }}
                >
                  {row.Shares}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default Mostviwedpost;
