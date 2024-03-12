import React from 'react';
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

const FeedRewies = () => {
      // Array of review objects
      const reviews = [
        { name: 'John Doe', timestamp: '5 Days ago', review: 'This app is amazing! Highly recommend it to everyone.' },
        { name: 'Jane Smith', timestamp: '2 Weeks ago', review: 'The user interface could use some improvements, but overall a good experience.' },
        { name: 'Michael Johnson', timestamp: '1 Month ago', review: 'Not satisfied with the service. Will be looking for alternatives.' },
        { name: 'John Doe', timestamp: '5 Days ago', review: 'This app is amazing! Highly recommend it to everyone.' },
   
        // Add more reviews as needed
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
}

export default FeedRewies;
