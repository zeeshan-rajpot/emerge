import { Col, Container, Row, Table } from 'react-bootstrap';

const Music = () => {
  const data = [
    {
      id: 1,
      MusicName: 'In the quiet moments find yourself',
      VendorName: 'Ali Asghar',
      AccountType: 'Emerge Profile',
      ProfileID: '587462',
      MusicDuration: '04 min 47 sec',
      UploadDateTime: '14 Dec 2023 02:20 pm ',
    },
    {
      id: 2,
      MusicName: 'In the quiet moments find yourself',
      VendorName: 'Ali Asghar',
      AccountType: 'Emerge Profile',
      ProfileID: '587462',
      MusicDuration: '04 min 47 sec',
      UploadDateTime: '14 Dec 2023 02:20 pm ',
    },
    {
      id: 3,
      MusicName: 'In the quiet moments find yourself',
      VendorName: 'Ali Asghar',
      AccountType: 'Emerge Profile',
      ProfileID: '587462',
      MusicDuration: '04 min 47 sec',
      UploadDateTime: '14 Dec 2023 02:20 pm ',
    },
    {
      id: 4,
      MusicName: 'In the quiet moments find yourself',
      VendorName: 'Ali Asghar',
      AccountType: 'Emerge Profile',
      ProfileID: '587462',
      MusicDuration: '04 min 47 sec',
      UploadDateTime: '14 Dec 2023 02:20 pm ',
    },
    {
      id: 5,
      MusicName: 'In the quiet moments find yourself',
      VendorName: 'Ali Asghar',
      AccountType: 'Emerge Profile',
      ProfileID: '587462',
      MusicDuration: '04 min 47 sec',
      UploadDateTime: '14 Dec 2023 02:20 pm ',
    },
    {
      id: 6,
      MusicName: 'In the quiet moments find yourself',
      VendorName: 'Ali Asghar',
      AccountType: 'Emerge Profile',
      ProfileID: '587462',
      MusicDuration: '04 min 47 sec',
      UploadDateTime: '14 Dec 2023 02:20 pm ',
    },
    {
      id: 7,
      MusicName: 'In the quiet moments find yourself',
      VendorName: 'Ali Asghar',
      AccountType: 'Emerge Profile',
      ProfileID: '587462',
      MusicDuration: '04 min 47 sec',
      UploadDateTime: '14 Dec 2023 02:20 pm ',
    },
    {
      id: 8,
      MusicName: 'In the quiet moments find yourself',
      VendorName: 'Ali Asghar',
      AccountType: 'Emerge Profile',
      ProfileID: '587462',
      MusicDuration: '04 min 47 sec',
      UploadDateTime: '14 Dec 2023 02:20 pm ',
    },
    {
      id: 9,
      MusicName: 'In the quiet moments find yourself',
      VendorName: 'Ali Asghar',
      AccountType: 'Emerge Profile',
      ProfileID: '587462',
      MusicDuration: '04 min 47 sec',
      UploadDateTime: '14 Dec 2023 02:20 pm ',
    },
    {
      id: 10,
      MusicName: 'In the quiet moments find yourself',
      VendorName: 'Ali Asghar',
      AccountType: 'Emerge Profile',
      ProfileID: '587462',
      MusicDuration: '04 min 47 sec',
      UploadDateTime: '14 Dec 2023 02:20 pm ',
    },
    {
      id: 11,
      MusicName: 'In the quiet moments find yourself',
      VendorName: 'Ali Asghar',
      AccountType: 'Emerge Profile',
      ProfileID: '587462',
      MusicDuration: '04 min 47 sec',
      UploadDateTime: '14 Dec 2023 02:20 pm ',
    },
  ];
  return (
    <>
      <Container>
        <Row>
          <Col md={12} className='p-0  mt-3'>
            <div className='table-responsive'>
              <Table>
                <thead className='pribg'>
                  <tr className='pribg'>
                    {[
                      'Sr.',
                      'Music Name',
                      'Vendor Name',
                      'Account Type',
                      `Profile I'D`,
                      'Music Duration',
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
                    <tr key={index} style={{}}>
                      <td className='p-2' style={{ fontSize: '13px' }}>
                        {row.id}
                      </td>

                      <td style={{ fontSize: '13px' }}>
                        <img
                          src='/0bb04bba8f6be2a7cbfe5e0a1868d7ce.png'
                          alt='Example'
                          width='30'
                          height='30 '
                          className='me-3'
                        />
                        {row.MusicName}
                      </td>

                      <td style={{ fontSize: '13px' }}>{row.VendorName}</td>
                      <td style={{ fontSize: '13px' }}>{row.AccountType}</td>
                      <td style={{ fontSize: '13px' }}>{row.ProfileID}</td>
                      <td style={{ fontSize: '13px' }}>{row.MusicDuration}</td>

                      <td style={{ fontSize: '13px' }}>{row.UploadDateTime}</td>

                      <td style={{ fontSize: '13px' }}>
                        <button
                          className='py-1 px-2'
                          style={{
                            border: '1px solid #9F23C4',
                            borderRadius: '20px',
                            backgroundColor: '#C54FE8',
                            color: '#FFFFFF',
                            fontSize: '12px',
                          }}
                        >
                          View{' '}
                          <img src='/SVG/icon.svg' className='ms-3' alt='' />
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
                          Warning{' '}
                          <img src='/SVG/icon2.svg' className='ms-3' alt='' />
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
                          Delete{' '}
                          <img src='/SVG/icon.svg' className='ms-3' alt='' />
                        </button>
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

export default Music;
