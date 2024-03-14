import React from 'react'
const FeedReviews = ({ name, timestamp, review, image }) => {
    return (
      <div className='d-flex align-items-center justify-content-start border rounded-5 overflow-hidden mt-4 bg-white'>
        <div className='p-4' >
          <img src={image} alt="" />
        </div>
        <div className='ms-2'>
          <div className='d-flex align-items-center'>
            <p className='pricolor mb-0' style={{ fontSize: '13px' }}>{name}</p>
            <p className='mb-0' style={{ fontSize: '13px' }}>({timestamp})</p>
          </div>
          <p style={{ fontSize: '13px' }} className='mt-1 mb-0'>{review}</p>
        </div>
      </div>
    );
  }

const Inbox = () => {
    const reviews = [
        { name: 'Rajpal Yahdav', timestamp: '3 Days ago', review: 'Thank you for using our VPN app! We value your feedback and would appreciate it if you could take a moment to share your thoughts with us. Your input helps us improve our services. Thank you for using our VPN app! We value your feedback and would appreciate it if you could take a moment to share your thoughts with us. Your input helps us improve our services.', image: '/IMG20230616232003.png' },
        { name: 'John Doe', timestamp: '5 Days ago', review: 'This app is amazing! Highly recommend it to everyone.', image: '/IMG20230616232003.png' },
        { name: 'Jane Smith', timestamp: '2 Weeks ago', review: 'The user interface could use some improvements, but overall a good experience.', image: '/IMG20230616232003.png' },
        { name: 'Michael Johnson', timestamp: '1 Month ago', review: 'Not satisfied with the service. Will be looking for alternatives.', image: '/IMG20230616232003.png' },
        // Add more reviews with different data as needed
      ];
  return (
    <>
      <div className='m-auto' style={{width:'90%'}}>
        <p><b>Recent Notifications</b></p>

        {reviews.map((review, index) => (
        <FeedReviews
          key={index}
          name={review.name}
          timestamp={review.timestamp}
          review={review.review}
          image={review.image}
        />
      ))}
      </div>
    </>
  )
}

export default Inbox
