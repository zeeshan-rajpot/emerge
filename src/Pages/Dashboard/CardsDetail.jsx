import React from 'react';

export const CardsDetail = ({ logoSrc, title, value, changePercentage, chart }) => {
  return (
    <div>
      <div
        className='d-flex flex-column justify-content-center  align-items-center gap-2 pt-4 pb-2'
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '15px',
        }}
      >
        <div
          className='d-flex justify-content-center align-items-center gap-2'
          style={{
            backgroundColor: '#F0E5F7',
            borderRadius: '20px',
            width: '60px',
            height: '60px',
          }}
        >
          <img src={logoSrc} alt='' />
        </div>

        <div className=''>
          <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
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
