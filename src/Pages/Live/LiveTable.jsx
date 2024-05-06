import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Table } from "react-bootstrap";
// import { Link } from 'react-router-dom';

const ListProfile = ({ data }) => {
  return (
    <div className="d-flex align-items-center overflow-auto">
      {data.map((item, index) => (
        <div key={index} className="text-center ms-2">
          <img src={item.image} alt="" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

const LiveTable = () => {
  const dataArray = [
    { name: "John", image: "/90b646cb3530d7d58ec198115c076e4f.png" },
    { name: "Jane", image: "/90b646cb3530d7d58ec198115c076e4f.png" },
    { name: "Rio", image: "/90b646cb3530d7d58ec198115c076e4f.png" },
    { name: "July", image: "/90b646cb3530d7d58ec198115c076e4f.png" },
    { name: "John", image: "/90b646cb3530d7d58ec198115c076e4f.png" },
    { name: "Jane", image: "/90b646cb3530d7d58ec198115c076e4f.png" },
    { name: "Rio", image: "/90b646cb3530d7d58ec198115c076e4f.png" },
    { name: "July", image: "/90b646cb3530d7d58ec198115c076e4f.png" },
    { name: "John", image: "/90b646cb3530d7d58ec198115c076e4f.png" },
    { name: "Jane", image: "/90b646cb3530d7d58ec198115c076e4f.png" },
    { name: "Rio", image: "/90b646cb3530d7d58ec198115c076e4f.png" },
    { name: "July", image: "/90b646cb3530d7d58ec198115c076e4f.png" },
    // Add more data objects as needed
  ];

  const Livelist = [
    {
      id: 1,
      profileName: "John Doe",
      profileID: "12345",
      Invite: "john.doe@example.com",
      AccountType: "USA",
      zipCode: "12345",
      Likes: 1000,
      Comment: 500,
      Shares: 50,
      Price: "2022-03-10",
      Tipping: "edit",
      SessionDateTime: "2022-06-01 10:00 AM",
      DurationTime: "1 hour",
      TittleLink: "https://example.com",
    },
    {
      id: 2,
      profileName: "Jane Smith",
      profileID: "67890",
      Invite: "jane.smith@example.com",
      AccountType: "UK",
      zipCode: "54321",
      Likes: 1500,
      Comment: 700,
      Shares: 80,
      Price: "2022-04-15",
      Tipping: "edit",
      SessionDateTime: "2022-06-02 11:00 AM",
      DurationTime: "45 minutes",
      TittleLink: "https://example.com",
    },
    {
      id: 1,
      profileName: "John Doe",
      profileID: "12345",
      Invite: "john.doe@example.com",
      AccountType: "USA",
      zipCode: "12345",
      Likes: 1000,
      Comment: 500,
      Shares: 50,
      Price: "2022-03-10",
      Tipping: "edit",
      SessionDateTime: "2022-06-01 10:00 AM",
      DurationTime: "1 hour",
      TittleLink: "https://example.com",
    },
    {
      id: 2,
      profileName: "Jane Smith",
      profileID: "67890",
      Invite: "jane.smith@example.com",
      AccountType: "UK",
      zipCode: "54321",
      Likes: 1500,
      Comment: 700,
      Shares: 80,
      Price: "2022-04-15",
      Tipping: "edit",
      SessionDateTime: "2022-06-02 11:00 AM",
      DurationTime: "45 minutes",
      TittleLink: "https://example.com",
    },
    {
      id: 1,
      profileName: "John Doe",
      profileID: "12345",
      Invite: "john.doe@example.com",
      AccountType: "USA",
      zipCode: "12345",
      Likes: 1000,
      Comment: 500,
      Shares: 50,
      Price: "2022-03-10",
      Tipping: "edit",
      SessionDateTime: "2022-06-01 10:00 AM",
      DurationTime: "1 hour",
      TittleLink: "https://example.com",
    },
    {
      id: 2,
      profileName: "Jane Smith",
      profileID: "67890",
      Invite: "jane.smith@example.com",
      AccountType: "UK",
      zipCode: "54321",
      Likes: 1500,
      Comment: 700,
      Shares: 80,
      Price: "2022-04-15",
      Tipping: "edit",
      SessionDateTime: "2022-06-02 11:00 AM",
      DurationTime: "45 minutes",
      TittleLink: "https://example.com",
    },
    {
      id: 1,
      profileName: "John Doe",
      profileID: "12345",
      Invite: "john.doe@example.com",
      AccountType: "USA",
      zipCode: "12345",
      Likes: 1000,
      Comment: 500,
      Shares: 50,
      Price: "2022-03-10",
      Tipping: "edit",
      SessionDateTime: "2022-06-01 10:00 AM",
      DurationTime: "1 hour",
      TittleLink: "https://example.com",
    },
    {
      id: 2,
      profileName: "Jane Smith",
      profileID: "67890",
      Invite: "jane.smith@example.com",
      AccountType: "UK",
      zipCode: "54321",
      Likes: 1500,
      Comment: 700,
      Shares: 80,
      Price: "2022-04-15",
      Tipping: "edit",
      SessionDateTime: "2022-06-02 11:00 AM",
      DurationTime: "45 minutes",
      TittleLink: "https://example.com",
    },
  ];
  return (
    <>
      <div>
        <p>
          <b>Current Live</b>
        </p>
        <ListProfile data={dataArray} />

        <p className="mt-4">
          <b>Recent Live</b>{" "}
        </p>

        <div className="table-responsive">
          <Table>
            <thead className="pribg">
              <tr className="pribg">
                {[
                  "Sr.",
                  "Profile Name",
                  `Profile I'D`,
                  "Invite",
                  "Account Type",
                  `Zip Code`,
                  "Likes",
                  "Comment",
                  `Shares`,
                  "Price",
                  "Tipping",
                  "Session Date/Time",
                  "Duration Time",
                  "Tittle/Link",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="pribg text-light"
                    style={{ fontSize: "13px" }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Livelist.map((row, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#F0E5F7" : "#f9f5fc",
                  }}
                >
                  {/* <Link to='/Detail' className=''> */}
                  <td className="p-2" style={{ fontSize: "13px" }}>
                    {row.id}
                  </td>
                  {/* </Link>   */}

                  <td style={{ fontSize: "13px" }}>
                    <img
                      src="/25e8ab5f311118b4be3c54e05bf44108.png"
                      alt="Example"
                      width="20"
                      height="20"
                      className="me-2"
                    />
                    {row.profileName}
                  </td>

                  <td style={{ fontSize: "13px" }}>{row.profileID}</td>
                  <td style={{ fontSize: "13px" }}>{row.Invite}</td>
                  <td style={{ fontSize: "13px" }}>{row.AccountType}</td>
                  <td style={{ fontSize: "13px" }}>{row.zipCode}</td>
                  <td style={{ fontSize: "13px" }}>{row.Likes}</td>
                  <td style={{ fontSize: "13px" }}>{row.Comment}</td>
                  <td style={{ fontSize: "13px" }}>{row.Shares}</td>
                  <td style={{ fontSize: "13px" }}>{row.Price}</td>
                  <td style={{ fontSize: "13px" }}>{row.Tipping}</td>
                  <td style={{ fontSize: "13px" }}>{row.SessionDateTime}</td>
                  <td style={{ fontSize: "13px" }}>{row.DurationTime}</td>
                  <td style={{ fontSize: "13px" }}>{row.TittleLink}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default LiveTable;
