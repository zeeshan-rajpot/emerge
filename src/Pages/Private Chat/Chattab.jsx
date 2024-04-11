import React, { useState } from 'react';
import Detail from './Detail';
import Chat from './ChatDetail.jsx';
// import Chat from './Chat';

const Chattab = () => {
  const [isDoctorSelected, setIsDoctorSelected] = useState(true);

  const handleApproveClick = () => {
    setIsDoctorSelected(true);
  };

  const handleDisapproveClick = () => {
    setIsDoctorSelected(false);
  };
  return (
    <>
      <div
        className=' d-flex justify-content-center align-items-center shadow m-auto w-50 reswidth '
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '22px',
        }}
      >
        <button
          className='w-100 p-2'
          style={{
            // width: '20%',
            // height: '35px',
            textAlign: 'center',
            borderRadius: '22px',
            color: isDoctorSelected ? '#fff' : '#C54FE8',
            backgroundColor: isDoctorSelected ? '#C54FE8' : '#fff',
            border: 'none',
          }}
          onClick={handleApproveClick}
        >
          Inbox
        </button>
        <button
          className='w-100 p-2'
          style={{
            // width: '20%',
            // height: '35px',
            textAlign: 'center',
            borderRadius: '22px',
            color: isDoctorSelected ? '#C54FE8' : '#fff',
            backgroundColor: isDoctorSelected ? '#fff' : '#C54FE8',
            border: 'none',
            marginLeft: '10px',
          }}
          onClick={handleDisapproveClick}
        >
          Detail
        </button>
      </div>

      <div>
        {isDoctorSelected ? (
          <>
            {/* <Inbox/> */}
            <Chat />
          </> // Render the Doctor component when isDoctorSelected is true
        ) : (
          <>
            <Detail />
          </> // Render the Pharmacy component when isDoctorSelected is false
        )}
      </div>
    </>
  );
};

export default Chattab;
