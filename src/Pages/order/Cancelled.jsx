import { Table } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

const Cancelled = () => {
  const data = [
    {
      id: 1,
      Product: "John Doe",
      OrderId: "12345",
      OrderType: "premium",
      country: "USA",
      PaymentMethod: "***2345",
      Price: 1000,
      Customername: "Jocn Wick",
      Vendorname: "Walmart",
      profileCreationDate: "2022-03-10",
      Reviews: "(4.5)",
    },
    {
      id: 2,
      Product: "Jane Smith",
      OrderId: "67890",
      OrderType: "jane.smith@example.com",
      country: "UK",
      PaymentMethod: "****54321",
      Price: 600,
      Customername: "Jocn Wick",
      Vendorname: "Walmart",
      profileCreationDate: "2022-04-15",
      Reviews: "(4.5)",
    },
    {
      id: 3,
      Product: "John Doe",
      OrderId: "12345",
      OrderType: "premium",
      country: "USA",
      PaymentMethod: "***12345",
      Price: 1000,
      Customername: "Jocn Wick",
      Vendorname: "Walmart",
      profileCreationDate: "2022-03-10",
      Reviews: "(4.5)",
    },
    {
      id: 4,
      Product: "Jane Smith",
      OrderId: "67890",
      OrderType: "jane.smith@example.com",
      country: "UK",
      PaymentMethod: "***4321",
      Price: 400,
      Customername: "Jocn Wick",
      Vendorname: "Walmart",
      profileCreationDate: "2022-04-15",
      Reviews: "(4.5)",
    },
    {
      id: 5,
      Product: "John Doe",
      OrderId: "12345",
      OrderType: "premium",
      country: "USA",
      PaymentMethod: "***12345",
      Price: 1000,
      Customername: "Jocn Wick",
      Vendorname: "Walmart",
      profileCreationDate: "2022-03-10",
      Reviews: "(4.5)",
    },
    {
      id: 6,
      Product: "Jane Smith",
      OrderId: "67890",
      OrderType: "jane.smith@example.com",
      country: "UK",
      PaymentMethod: "****54321",
      Price: 500,
      Customername: "Jocn Wick",
      Vendorname: "Walmart",
      profileCreationDate: "2022-04-15",
      Reviews: "(4.5)",
    },
    // Add more dummy data for 20 persons
  ];
  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="p-0  mt-3">
            <div className="table-responsive">
              <Table>
                <thead className="pribg">
                  <tr className="pribg">
                    {[
                      "Sr.",
                      "Product",
                      `Order Id`,
                      "Order Type",
                      "Price",
                      `Date`,
                      "Payment Method",
                      "Customer name",
                      `Vendor Name`,
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
                  {data.map((row, index) => (
                    <tr key={index} style={{}}>
                      <td className="p-2" style={{ fontSize: "13px" }}>
                        {row.id}
                      </td>

                      <td style={{ fontSize: "13px" }}>
                        <img
                          src="/revolt-164_6wVEHfI-unsplash.png"
                          alt="Example"
                          width="30"
                          height="30 "
                          className="me-3"
                        />
                        {row.Product}
                      </td>

                      <td style={{ fontSize: "13px" }}>{row.OrderId}</td>
                      <td style={{ fontSize: "13px" }}>{row.OrderType}</td>
                      <td style={{ fontSize: "13px" }}>{row.Price}</td>
                      <td style={{ fontSize: "13px" }}>
                        {row.profileCreationDate}
                      </td>
                      <td style={{ fontSize: "13px" }}>
                        <img
                          src="/pngwing.com (6).png"
                          alt="Example"
                          width="30"
                          height="30 "
                          className="me-3"
                        />

                        {row.PaymentMethod}
                      </td>
                      <td style={{ fontSize: "13px" }}>
                        {row.Customername}
                        <br />
                        zeeshan74@gmail.com
                      </td>

                      <td style={{ fontSize: "13px" }}>
                        {row.Vendorname}
                        <br />
                        zeeshan74@walmart.com{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cancelled;
