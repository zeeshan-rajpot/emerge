import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

// import MyVerticallyCenteredModal from "./verticalModal";

const Sidebar = (props) => {
  const [activeTab, setActiveTab] = useState(props.activeTab);
  const [modalShow, setModalShow] = useState(false);

  const navItems = [
    { id: "Dashboard", text: "Dashboard", icon: "Group 68037"   , link: "/"},
    { id: "EmergeProfile", text: "Emerge Profile", icon: "Emerge Profile" , link :'/EmergeProfile'},
    { id: "Creatoprofile", text: "My Creator Profile", icon: "My Creator Profile"  , link: "/Creatoprofile"},
    { id: "Feedback", text: "Feedback", icon: "Feedback" ,link:'/Feedback' },
    { id: "Support", text: "Support", icon: "Support" ,link:'/Pharmacy' },
    { id: "Live", text: "Live", icon: "podcast-icon" ,link:'/Live' },
    { id: "Chat", text: "Private Chat", icon: "Private Chat" ,link:'/Chat' },
    { id: "ProductListing", text: "Product Listing", icon: "Product Listing" ,link:'/ProductListing' },
    { id: "ListingApproval", text: "Listing Approvals", icon: "Listing Approvals" ,link:'/ListingApproval' },
    { id: "Magzine", text: "Magzine", icon: "M" ,link:'/Pharmacy' },
    { id: "Order", text: "Orders", icon: "Orders" ,link:'/Order' },
    
  ];

  //   , link: "/Dashbord"
  //   , link: "/Disapproved"
  //   , link: "/Doctor"
  //   , link: "/Pharmacy"

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderNavItem = (item) => (
    <Link to={item.link}>
   
    <div
      key={item.id}
      className={`d-flex align-items-center justify-content-start mt-2 ps-4 ${
        activeTab === item.id ? "active-tabbbb" : ""
      }`}
      onClick={() => handleTabClick(item.id)}
    >
    
        <img
          src={`/${item.icon}.svg`}
          alt={`${item.text} Icon`}
          style={{width:'15px'}}
          className={` ${activeTab === item.id ? "active-icons" : ""}`}
        />
    

        <p
          className={`ps-2 pt-1 pb-1 pb-0 mb-0 mt-0 text-secondary d-none d-md-flex ${
            activeTab === item.id ? "active-tabbbb" : "tab-btn"
          }`}
        >
        {item.text}
        </p>

    </div>
    </Link>
  );

  return (
    <>
      <div className="mobilenone">
        <div
          className="d-flex align-items-start justify-content-between flex-column pt-3"
          style={{ minHeight: "100vh" }}
        >
          <div >
            <div className="text-center">
            <img src="/EMERGE LOGO EPS.png" className="mb-4 text-center ms-auto " />

            </div>
  

            {navItems.map((item) => renderNavItem(item))}
          </div>

          <div className=" ps-4 d-flex align-items-start justify-content-start">
            <img src={`/Log out.svg`} alt="Logout Icon" className={` `} />
            <p
              className={`ps-2 text-secondary d-none d-md-flex`}
              style={{ cursor: "pointer", textDecoration: "none" }}
              onClick={() => setModalShow(true)}
            >
              <b>Log out</b>
            </p>
            {/* <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} /> */}
          </div>
        </div>
      </div>

      {/* <div className="destopnone pt-2">
        <div className="d-flex align-item-center justify-content-between">
          {navItems.map((item) => (
            <Link to={item.link} key={item.id}>
              <div className="d-flex justify-content-center" style={{ alignItems: "flex-start" }}>
                <img
                  src={require(`../images/${item.icon}.svg`)}
                  alt={`${item.text} Icon`}
                  className={`svg ${activeTab === item.id ? "active-icons" : ""}`}
                />
                <p
                  className={`text-secondary mobilesidebartext ${
                    activeTab === item.id ? "active-tabbbb" : ""
                  }`}
                >
                  <b>{item.text}</b>
                </p>
              </div>
            </Link>
          ))}
          <div className="d-flex align-items-start justify-content-center text-center">
            <img src={require("../images/Logout.svg")} alt="Logout Icon" className={` `} />
            <p
              className={`text-secondary mobilesidebartext`}
              style={{ cursor: "pointer", textDecoration: "none" }}
              onClick={() => setModalShow(true)}
            >
              <b>Logout</b>
            </p>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Sidebar;