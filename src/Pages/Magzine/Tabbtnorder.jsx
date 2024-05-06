import React, { useState } from "react";
import Magzine from "./AllMagzine.jsx";
import Music from "./Music.jsx";
import Documentary from "./Documentary";
import { Col, Container, Row } from "react-bootstrap";
import Merchandise from "./Merchandise";
import "./tabbtnor.css"; // Import your CSS file for styling

const Tabbtnorder = () => {
  const [selectedTab, setSelectedTab] = useState("AllMagzine");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="tab-bar-container">
              <p
                className={`tab-btn ${
                  selectedTab === "AllMagzine" && "active"
                }`}
                onClick={() => handleTabClick("AllMagzine")}
              >
                Magazine
              </p>
              <p
                className={`tab-btn ms-0 ms-md-3  ${
                  selectedTab === "Music" && "active"
                }`}
                onClick={() => handleTabClick("Music")}
              >
                Music
              </p>
              <p
                className={`tab-btn  ms-0 ms-md-3 ${
                  selectedTab === "Documentary" && "active"
                }`}
                onClick={() => handleTabClick("Documentary")}
              >
                Documentary
              </p>
              <p
                className={`tab-btn  ms-0 ms-md-3 ${
                  selectedTab === "Merchandise" && "active"
                }`}
                onClick={() => handleTabClick("Merchandise")}
              >
                Merchandise
              </p>
            </div>

            <div>
              {selectedTab === "AllMagzine" && <Magzine />}
              {selectedTab === "Music" && <Music />}
              {selectedTab === "Documentary" && <Documentary />}
              {selectedTab === "Merchandise" && <Merchandise />}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tabbtnorder;
