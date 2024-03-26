import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductTable = () => {
  const data = [
    {
      id: 1,
      profileName: 'Table',
      ProductCategory: '12345',
      VendorName: 'john.doe@example.com',
      AccountType: 'USA',
      zipCode: '12345',
      ProfileID: 1000,
      TotalSales: 500,
      posts: 50,
      profileCreationDate: '2022-03-10',
    },
    {
      id: 2,
      profileName: 'Table',
      ProductCategory: '67890',
      VendorName: 'jane.smith@example.com',
      AccountType: 'UK',
      zipCode: '54321',
      ProfileID: 1500,
      TotalSales: 700,
      posts: 80,
      profileCreationDate: '2022-04-15',
    },
    {
      id: 3,
      profileName: 'Table Doe',
      ProductCategory: '12345',
      VendorName: 'john.doe@example.com',
      AccountType: 'USA',
      zipCode: '12345',
      ProfileID: 1000,
      TotalSales: 500,
      posts: 50,
      profileCreationDate: '2022-03-10',
    },
    {
      id: 4,
      profileName: 'Jane Table',
      ProductCategory: '67890',
      VendorName: 'jane.smith@example.com',
      AccountType: 'UK',
      zipCode: '54321',
      ProfileID: 1500,
      TotalSales: 700,
      posts: 80,
      profileCreationDate: '2022-04-15',
    },
    {
      id: 5,
      profileName: 'John Table',
      ProductCategory: '12345',
      VendorName: 'john.doe@example.com',
      AccountType: 'USA',
      zipCode: '12345',
      ProfileID: 1000,
      TotalSales: 500,
      posts: 50,
      profileCreationDate: '2022-03-10',
    },
    {
      id: 6,
      profileName: 'Table Smith',
      ProductCategory: '67890',
      VendorName: 'jane.smith@example.com',
      AccountType: 'UK',
      zipCode: '54321',
      ProfileID: 1500,
      TotalSales: 700,
      posts: 80,
      profileCreationDate: '2022-04-15',
    },
    ,
    {
      id: 7,
      profileName: 'Table Doe',
      ProductCategory: '12345',
      VendorName: 'john.doe@example.com',
      AccountType: 'USA',
      zipCode: '12345',
      ProfileID: 1000,
      TotalSales: 500,
      posts: 50,
      profileCreationDate: '2022-03-10',
    },
    {
      id: 8,
      profileName: 'Table Smith',
      ProductCategory: '67890',
      VendorName: 'jane.smith@example.com',
      AccountType: 'UK',
      zipCode: '54321',
      ProfileID: 1500,
      TotalSales: 700,
      posts: 80,
      profileCreationDate: '2022-04-15',
    },
    {
      id: 9,
      profileName: 'John Table',
      ProductCategory: '12345',
      VendorName: 'john.doe@example.com',
      AccountType: 'USA',
      zipCode: '12345',
      ProfileID: 1000,
      TotalSales: 500,
      posts: 50,
      profileCreationDate: '2022-03-10',
    },
    {
      id: 10,
      profileName: 'Jane Table',
      ProductCategory: '67890',
      VendorName: 'jane.smith@example.com',
      AccountType: 'UK',
      zipCode: '54321',
      ProfileID: 1500,
      TotalSales: 700,
      posts: 80,
      profileCreationDate: '2022-04-15',
    },
    {
      id: 11,
      profileName: 'Table Table',
      ProductCategory: '12345',
      VendorName: 'john.doe@example.com',
      AccountType: 'USA',
      zipCode: '12345',
      ProfileID: 1000,
      TotalSales: 500,
      posts: 50,
      profileCreationDate: '2022-03-10',
    },
    {
      id: 12,
      profileName: 'Table Smith',
      ProductCategory: '67890',
      VendorName: 'jane.smith@example.com',
      AccountType: 'UK',
      zipCode: '54321',
      ProfileID: 1500,
      TotalSales: 700,
      posts: 80,
      profileCreationDate: '2022-04-15',
    },
    // Add more dummy data for 20 persons
  ];
  return (
    <>
      <div className='table-responsive'>
        <Table>
          <thead className='pribg p-2'>
            <tr className='pribg text-nowrap'>
              {[
                'Sr.',
                'Profile Name',
                `Product Category`,
                'Vendor Name',
                'Account Type',
                `Profile I'D`,
                'Product Price',
                'Total Sales',
                `Upload Date/Time`,
                'Action',
              ].map((header, index) => (
                <th
                  key={index}
                  className='pribg text-light'
                  style={{ fontSize: '13px' }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc',
                }}
              >
                <td className='' style={{ fontSize: '13px' }}>
                  {row.id}
                </td>

                <td style={{ fontSize: '13px' }}>
                  <img
                    src='/0bb04bba8f6be2a7cbfe5e0a1868d7ce.png'
                    className='me-2'
                    alt='Example'
                    width='20'
                    height='20'
                  />
                  {row.profileName}
                </td>

                <td style={{ fontSize: '13px' }}>{row.ProductCategory}</td>
                <td style={{ fontSize: '13px' }}>{row.VendorName}</td>
                <td style={{ fontSize: '13px' }}>{row.VendorName}</td>
                <td style={{ fontSize: '13px' }}>{row.AccountType}</td>
                <td style={{ fontSize: '13px' }}>{row.ProfileID}</td>
                {/* <td style={{ fontSize: '13px'}}>{row.fee}</td> */}
                <td style={{ fontSize: '13px' }}>{row.TotalSales}</td>
                {/* <td style={{ fontSize: '13px'}}>{row.posts}</td> */}
                <td style={{ fontSize: '13px' }}>{row.profileCreationDate}</td>
                <td style={{ fontSize: '13px' }}>
                  {' '}
                  <button
                    className='py-1 px-2 '
                    style={{
                      border: '1px solid #9F23C4',
                      borderRadius: '20px',
                      backgroundColor: '#C54FE8',
                      color: '#FFFFFF',
                      fontSize: '12px',
                    }}
                  >
                    View <img src='/SVG/icon.svg' className='ms-3' alt='' />
                  </button>
                  <button
                    className='py-1 px-2 ms-3'
                    style={{
                      border: '1px solid #9F23C4',
                      borderRadius: '20px',
                      backgroundColor: ' #FFFFFF',
                      color: '#C54FE8',
                      fontSize: '12px',
                    }}
                  >
                    Warning <img src='/SVG/icon2.svg' className='ms-3' alt='' />
                  </button>
                  <button
                    className='py-1 px-2 ms-3'
                    style={{
                      border: '1px solid #DF4655',
                      borderRadius: '20px',
                      backgroundColor: ' #DF4655',
                      color: '#FFFFFF',
                      fontSize: '12px',
                    }}
                  >
                    Delete <img src='/SVG/icon.svg' className='ms-3' alt='' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ProductTable;
