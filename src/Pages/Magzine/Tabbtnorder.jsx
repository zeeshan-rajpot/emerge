import React, { useState } from 'react';
import Magzine from './AllMagzine.jsx';
import Music from './Music.jsx';
import Documentary from './Documentary';
import Merchandise from './Merchandise';

const Tabbtnorder = () => {
  const [selectedTab, setSelectedTab] = useState('AlMagazine');

  const handleTabClick = tabName => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <div className='mt-4 d-flex justify-content-start align-items-center border-bottom'>
        <p
          className='mb-0'
          style={{
            height: '35px',
            textAlign: 'center',
            borderBottom:
              selectedTab === 'AllMagzine' ? '0.1rem solid #C54FE8 ' : '',
            border: 'none',
          }}
          onClick={() => handleTabClick('AllMagzine')}
        >
          Magzine
        </p>
        <p
          className='mb-0'
          style={{
            height: '35px',
            textAlign: 'center',
            borderBottom:
              selectedTab === 'Music' ? '0.1rem solid #C54FE8 ' : '#fff',
            border: 'none',
            marginLeft: '10px',
          }}
          onClick={() => handleTabClick('Music')}
        >
          Music
        </p>
        <p
          className='mb-0'
          style={{
            height: '35px',
            textAlign: 'center',
            borderBottom:
              selectedTab === 'Documentary' ? '0.1rem solid #C54FE8  ' : '#fff',
            border: 'none',
            marginLeft: '10px',
          }}
          onClick={() => handleTabClick('Documentary')}
        >
          Documentary
        </p>

        <p
          className='mb-0'
          style={{
            height: '35px',
            textAlign: 'center',
            borderBottom:
              selectedTab === 'Merchandise' ? '0.1rem solid #C54FE8  ' : '#fff',
            border: 'none',
            marginLeft: '10px',
          }}
          onClick={() => handleTabClick('Merchandise')}
        >
          Merchandise
        </p>

        {/*  */}
      </div>

      <div>
        {selectedTab === 'AllMagzine' ? (
          <>
            {/* Render Magzine component */}
            <Magzine />
          </>
        ) : selectedTab === 'Music' ? (
          <>
            {/* Render Music component */}
            <Music />
          </>
        ) : selectedTab === 'Documentary' ? (
          <>
            {/* Render Merchandised component */}
            <Documentary />
          </>
        ) : (
          <>
            {/* Render Merchandised component */}
            <Merchandise />
          </>
        )}
      </div>
    </>
  );
};

export default Tabbtnorder;
