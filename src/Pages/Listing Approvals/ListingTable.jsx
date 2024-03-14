import { Table } from 'react-bootstrap';

const ListingTable = () => {
    const data = [
        { id: 1, profileName: 'Table', ProductCategory: '12345', ListingCategory: 'Premium', VendorName: 'Createex', zipCode: '12345', ProfileID: 1000, TotalSales: 500, posts: 50, profileCreationDate: '2022-03-10', action: 'edit' },
        { id: 2, profileName: 'Table', ProductCategory: '67890', ListingCategory: 'Normal', VendorName: 'Createex', zipCode: '54321', ProfileID: 1500, TotalSales: 700, posts: 80, profileCreationDate: '2022-04-15', action: 'edit' },
        { id: 3, profileName: 'Table Doe', ProductCategory: '12345', ListingCategory: 'Premium', VendorName: 'Createex', zipCode: '12345', ProfileID: 1000, TotalSales: 500, posts: 50, profileCreationDate: '2022-03-10', action: 'edit' },
        { id: 4, profileName: 'Jane Table', ProductCategory: '67890', ListingCategory: 'Normal', VendorName: 'Createex', zipCode: '54321', ProfileID: 1500, TotalSales: 700, posts: 80, profileCreationDate: '2022-04-15', action: 'edit' },
        { id: 5, profileName: 'John Table', ProductCategory: '12345', ListingCategory: 'Premium', VendorName: 'Createex', zipCode: '12345', ProfileID: 1000, TotalSales: 500, posts: 50, profileCreationDate: '2022-03-10', action: 'edit' },
        { id: 6, profileName: 'Table Smith', ProductCategory: '67890', ListingCategory: 'Normal', VendorName: 'Createex', zipCode: '54321', ProfileID: 1500, TotalSales: 700, posts: 80, profileCreationDate: '2022-04-15', action: 'edit' },
      ,
      { id: 7, profileName: 'Table Doe', ProductCategory: '12345', ListingCategory: 'Premium', VendorName: 'Createex', zipCode: '12345', ProfileID: 1000, TotalSales: 500, posts: 50, profileCreationDate: '2022-03-10', action: 'edit' },
      { id: 8, profileName: 'Table Smith', ProductCategory: '67890', ListingCategory: 'Normal', VendorName: 'Createex', zipCode: '54321', ProfileID: 1500, TotalSales: 700, posts: 80, profileCreationDate: '2022-04-15', action: 'edit' },
      { id: 9, profileName: 'John Table', ProductCategory: '12345', ListingCategory: 'Premium', VendorName: 'Createex', zipCode: '12345', ProfileID: 1000, TotalSales: 500, posts: 50, profileCreationDate: '2022-03-10', action: 'edit' },
      { id: 10, profileName: 'Jane Table', ProductCategory: '67890', ListingCategory: 'Normal', VendorName: 'Createex', zipCode: '54321', ProfileID: 1500, TotalSales: 700, posts: 80, profileCreationDate: '2022-04-15', action: 'edit' },
      { id: 11, profileName: 'Table Table', ProductCategory: '12345', ListingCategory: 'Premium', VendorName: 'Createex', zipCode: '12345', ProfileID: 1000, TotalSales: 500, posts: 50, profileCreationDate: '2022-03-10', action: 'edit' },
      { id: 12, profileName: 'Table Smith', ProductCategory: '67890', ListingCategory: 'Normal', VendorName: 'Createex', zipCode: '54321', ProfileID: 1500, TotalSales: 700, posts: 80, profileCreationDate: '2022-04-15', action: 'edit' },
      // Add more dummy data for 20 persons
    ];
  return (
    <>
            <div className="table-responsive">
                            <Table>
                                <thead className='pribg p-2'>
                                    <tr className='pribg text-nowrap'>
                                        {['Sr.', 'Listing Name', `Listing type`, "Listing Category",'Vendor Name', 'Account Type', `Profile I'D`, 'Product Price',"Action", ].map((header, index) => (
                                            <th key={index} className='pribg text-light' style={{ fontSize: '13px' }}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                 <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F0E5F7' : '#f9f5fc' }}>
                                        
                                          <td className='' style={{ fontSize: '13px'}}>{row.id}</td>
                 

                                            <td style={{ fontSize: '13px'}}>
                                                <img src='/0bb04bba8f6be2a7cbfe5e0a1868d7ce.png' className='me-2' alt="Example" width="20" height="20" />
                                                {row.profileName}
                                            </td>

                                          
                                                 <td style={{ fontSize: '13px'}}>{row.ProductCategory}</td>
                                               <td style={{ fontSize: '13px'}}>{row.ListingCategory}</td>
                                            <td style={{ fontSize: '13px'}}>{row.VendorName}</td>
                                            <td style={{ fontSize: '13px'}}>{row.ListingCategory}</td>
                                            <td style={{ fontSize: '13px'}}>{row.ProfileID}</td>
                                            {/* <td style={{ fontSize: '13px'}}>{row.fee}</td> */}
                                            <td style={{ fontSize: '13px'}}>{row.TotalSales}</td>
                                            {/* <td style={{ fontSize: '13px'}}>{row.posts}</td> */}
                                            {/* <td style={{ fontSize: '13px'}}>{row.profileCreationDate}</td> */}
                                            <td style={{ fontSize: '13px'}}>{row.action}</td>

                                        </tr> 
                                   
                                    ))}
                                </tbody>
                            </Table>
                        </div>
      
    </>
  )
}

export default ListingTable
