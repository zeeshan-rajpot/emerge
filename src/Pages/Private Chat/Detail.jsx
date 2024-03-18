import { Col, Container, Row, Table } from 'react-bootstrap';

const Detail = () => {
  const data = [
    {
      id: 1,
      ChatCreatorName: 'John Doe',
      ProfileID: 'JD123',
      AccountType: 'Premium',
      ChatMember: 'Amy Smith',
      ChatMemberName: 'AS',
      ChatCharges: '$10',
      SessionDateTime: '2024-03-05T08:00:00',
      DurationTime: '1 hour',
    },
    {
      id: 2,
      ChatCreatorName: 'Alice Johnson',
      ProfileID: 'AJ456',
      AccountType: 'Standard',
      ChatMember: 'David Lee',
      ChatMemberName: 'DL',
      ChatCharges: '$5',
      SessionDateTime: '2024-03-06T10:30:00',
      DurationTime: '45 minutes',
    },
    {
      id: 3,
      ChatCreatorName: 'John Doe',
      ProfileID: 'JD123',
      AccountType: 'Premium',
      ChatMember: 'Amy Smith',
      ChatMemberName: 'AS',
      ChatCharges: '$10',
      SessionDateTime: '2024-03-05T08:00:00',
      DurationTime: '1 hour',
    },
    {
      id: 4,
      ChatCreatorName: 'Alice Johnson',
      ProfileID: 'AJ456',
      AccountType: 'Standard',
      ChatMember: 'David Lee',
      ChatMemberName: 'DL',
      ChatCharges: '$5',
      SessionDateTime: '2024-03-06T10:30:00',
      DurationTime: '45 minutes',
    },
    {
      id: 5,
      ChatCreatorName: 'John Doe',
      ProfileID: 'JD123',
      AccountType: 'Premium',
      ChatMember: 'Amy Smith',
      ChatMemberName: 'AS',
      ChatCharges: '$10',
      SessionDateTime: '2024-03-05T08:00:00',
      DurationTime: '1 hour',
    },
    {
      id: 6,
      ChatCreatorName: 'Alice Johnson',
      ProfileID: 'AJ456',
      AccountType: 'Standard',
      ChatMember: 'David Lee',
      ChatMemberName: 'DL',
      ChatCharges: '$5',
      SessionDateTime: '2024-03-06T10:30:00',
      DurationTime: '45 minutes',
    },
    // Add more entries as needed
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
                      'Chat Creator Name',
                      `Profile I'D`,
                      'Account Type',
                      'Chat Member',
                      `Chat Member Name`,
                      'Chat Charges',
                      'Session Date/Time',
                      `Duration Time`,
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
                          src='/25e8ab5f311118b4be3c54e05bf44108.png'
                          alt='Example'
                          width='20'
                          height='20'
                          className='me-2'
                        />

                        {row.ChatCreatorName}
                      </td>

                      <td style={{ fontSize: '13px' }}>{row.ProfileID}</td>
                      <td style={{ fontSize: '13px' }}>{row.AccountType}</td>
                      <td style={{ fontSize: '13px' }}>{row.ChatMember}</td>
                      <td style={{ fontSize: '13px' }}>{row.ChatMemberName}</td>
                      <td style={{ fontSize: '13px' }}>
                        {/* <img src='/pngwing.com (6).png' alt="Example" width="30" height="30 " className='me-3' /> */}

                        {row.ChatCharges}
                      </td>
                      <td style={{ fontSize: '13px' }}>
                        {row.SessionDateTime}
                      </td>

                      <td style={{ fontSize: '13px' }}>{row.DurationTime}</td>
                      <td style={{ fontSize: '13px' }}>
                        <button
                          className='py-1 px-4 shadow'
                          style={{
                            border: '1px solid #C54FE8',
                            backgroundColor: '#FFFFFF',
                            color: ' #C54FE8',
                            borderRadius: '20px',
                          }}
                        >
                          View
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

export default Detail;
