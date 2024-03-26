import React from 'react';
import ColChart from './ColChart.jsx';
import LineChart from './LineChart.jsx';

export const CardsDetail = ({ logoSrc, title, value, changePercentage, chart }) => {
  return (
    <div>
      <div
<<<<<<< HEAD
        className='d-flex flex-column justify-content-center  align-items-center'
=======
        className='d-flex flex-column justify-content-center align-items-center'
>>>>>>> cfbd9e3955a42140453b023ba28d865a5a41853a
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '15px',
        }}
      >
        <div
          className='text-center'
          style={{
            backgroundColor: '#F0E5F7',
            borderRadius: '0px 0px 15px 15px',
            width: '92px',
            height: '55px',
          }}
        >
          <img src={logoSrc} alt='' />
        </div>

        <div className='d-flex justify-content-between align-items-center '>
          <div className='d-flex flex-column justify-content-center align-items-center '>
            <p
              className='my-0'
              style={{ color: '#222222', fontSize: '15px', fontWeight: '500' }}
            >
              {title}
            </p>
            <p
              className='my-0'
              style={{ color: '#222222', fontSize: '18px', fontWeight: '700' }}
            >
              {value}
            </p>
            <p
              className='my-0 text-nowrap '
              style={{ color: '#704DE2', fontSize: '13px', fontWeight: '400' }}
            >
              <img src='/uppergraph.svg' alt='' />
              {changePercentage}%{' '}
              <span
                style={{
                  color: '#808080',
                  fontSize: '10px',
                  fontWeight: '400',
                }}
              >
                {' '}
                prev month
              </span>
            </p>
          </div>
          <div>
            {chart}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetail;
