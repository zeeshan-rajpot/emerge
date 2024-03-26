import React, { useState } from 'react';
import Inbox from './Inbox';
import Create from './Create';
// import Doctor from '../../PendingDoctor/Doctor';
// import Pharmacy from '../../PendingPharmacy/Pharmacy'; 

const Tabbtn = () => {
    const [isDoctorSelected, setIsDoctorSelected] = useState(true);

    const handleApproveClick = () => {
      setIsDoctorSelected(true);
    };
  
    const handleDisapproveClick = () => {
      setIsDoctorSelected(false);
    };
  return (
    <>
   

    <div className="mt-4 d-flex justify-content-center align-items-center">
      <button
        className="shadow"
        style={{
          width: '20%',
          height: '35px',
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
        className="shadow"
        style={{
          width: '20%',
          height: '35px',
          textAlign: 'center',
          borderRadius: '22px',
          color: isDoctorSelected ? '#C54FE8' : '#fff',
          backgroundColor: isDoctorSelected ? '#fff' : '#C54FE8',
          border: 'none',
          marginLeft: '10px',
        }}
        onClick={handleDisapproveClick}
      >
        Create
      </button>
    </div>

    <div >
      {isDoctorSelected ? (
       <>
       <Inbox/>
       </>  // Render the Doctor component when isDoctorSelected is true
      ) : (
        <>
        <Create/>
        </>  // Render the Pharmacy component when isDoctorSelected is false
      )}
    </div>
  </>
  )
}

export default Tabbtn
