import React, { useState } from 'react';

const Tabbtnorder = () => {
    const [selectedTab, setSelectedTab] = useState('All');

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };
    
    return (
        <>
            <div className="mt-4 d-flex justify-content-start align-items-center border-bottom">
                <p
                    className="mb-0"
                    style={{
                        height: '35px',
                        textAlign: 'center',
                        borderBottom: selectedTab === 'All' ? '0.1rem solid #C54FE8 ' : '',
                        border: 'none',
                    }}
                    onClick={() => handleTabClick('All')}
                >
                    All (1200)
                </p>
                <p
                          className="mb-0"
                    style={{
                        height: '35px',
                        textAlign: 'center',
                        borderBottom: selectedTab === 'Active' ? '0.1rem solid #C54FE8 ' : '#fff',
                        border: 'none',
                        marginLeft: '10px',
                    }}
                    onClick={() => handleTabClick('Active')}
                >
                    Active
                </p>
                <p
                          className="mb-0"
                    style={{
                        height: '35px',
                        textAlign: 'center',
                        borderBottom: selectedTab === 'Completed' ? '0.1rem solid #C54FE8  ' : '#fff',
                        border: 'none',
                        marginLeft: '10px',
                    }}
                    onClick={() => handleTabClick('Completed')}
                >
                    Completed
                </p>

                <p
                          className="mb-0"
                    style={{
                        height: '35px',
                        textAlign: 'center',
                        borderBottom: selectedTab === 'Cancelled' ? '0.1rem solid #C54FE8  ' : '#fff',
                        border: 'none',
                        marginLeft: '10px',
                    }}
                    onClick={() => handleTabClick('Cancelled')}
                >
                    Cancelled
                </p>


                {/*  */}
            </div>

            <div>
                {selectedTab === 'All' ? (
                    <>
                        {/* Render All component */}
                        {/* <All /> */}
                        ssssffff
                    </>
                ) : selectedTab === 'Active' ? (
                    <>
                        {/* Render Active component */}
                        {/* <Active /> */}
                        ssss
                    </>
                ) : selectedTab === 'Completed' ? (
                    <>
                        {/* Render Completed component */}
                        {/* <Completed /> */}
                        ssssssss
                    </>
                ): (
                    <>
                        {/* Render Completed component */}
                        {/* <Completed /> */}
                        sssssdsafweff
                    </>
                )}
            </div>
        </>
    );
};

export default Tabbtnorder;
