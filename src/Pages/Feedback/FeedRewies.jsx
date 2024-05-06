import React from 'react';
import { Link } from 'react-router-dom';
const FeedReviews = ({ name, timestamp, review }) => {
  return (
    <>
      <Link to='/DetailPageFeedback'>
        <div className='d-flex align-items-center justify-content-start border rounded-5 mt-4 bg-white'>
          <div className='p-4 rounded-5' style={{ background: '#C54FE8' }}>
            <img src='/smile.png' alt='' />
          </div>
          <div className='ms-2'>
            <div className='d-flex align-items-center'>
              <p className='pricolor mb-0' style={{ fontSize: '13px' }}>
                {name}
              </p>
              <p className='mb-0' style={{ fontSize: '13px' }}>
                ({timestamp})
              </p>
            </div>
            <p style={{ fontSize: '13px' }} className='mt-1 mb-0'>
              {review}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

const FeedRewies = () => {
  // Array of review objects
  const reviews = [
    {
      name: 'John Doe',
      timestamp: '5 Days ago',
      review: 'This app is amazing! Highly recommend it to everyone.',
    },

    {
      name: 'John Doe',
      timestamp: '14 Days ago',
      review: 'This app is amazing! Highly recommend it to everyone.',
    },
    {
      name: 'John Doe',
      timestamp: '5 Month ago',
      review: 'This app is amazing! Highly recommend it to everyone.',
    },
  ];

  return (
    <>
      {reviews.map((review, index) => (
        <FeedReviews
          key={index}
          name={review.name}
          timestamp={review.timestamp}
          review={review.review}
        />
      ))}
    </>
  );
};

export default FeedRewies;
