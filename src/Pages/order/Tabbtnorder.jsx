import React, { useState } from 'react';
import All from './All';
import Active from './Active';
import Cancelled from './Cancelled';
import Complete from './Complete';
import './taborder.css'; // Import your CSS file for styling

const Tabbtnorder = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  const handleTabClick = tabName => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <div className='tab-bar-container'>
        <p
          className={`tab-btn ${selectedTab === 'All' && 'active'}`}
          onClick={() => handleTabClick('All')}
        >
          All (1200)
        </p>
        <p
          className={`tab-btn ${selectedTab === 'Active' && 'active'}`}
          onClick={() => handleTabClick('Active')}
        >
          Active
        </p>
        <p
          className={`tab-btn ${selectedTab === 'Completed' && 'active'}`}
          onClick={() => handleTabClick('Completed')}
        >
          Completed
        </p>
        <p
          className={`tab-btn ${selectedTab === 'Cancelled' && 'active'}`}
          onClick={() => handleTabClick('Cancelled')}
        >
          Cancelled
        </p>
      </div>

      <div>
        {selectedTab === 'All' && <All />}
        {selectedTab === 'Active' && <Active />}
        {selectedTab === 'Completed' && <Complete />}
        {selectedTab === 'Cancelled' && <Cancelled />}
      </div>
    </>
  );
};

export default Tabbtnorder;
