import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Col, Row } from 'react-bootstrap';
import './MainLineChart.css';

export const MainLineChart = () => {
  const [options] = useState({
    chart: {
      id: 'line-chart',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yaxis: {
      min: 10,
      max: 60,
      labels: {
        formatter: function (val) {
          return val + '%';
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#F0E5F7'],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    colors: ['#C54FE8'],
  });

  const [series, setSeries] = useState([
    {
      name: 'Emerge App Download',
      data: [30, 40, 45, 50, 55, 50, 45, 40, 35, 30, 25, 20], // Sample data, you should replace it with your data
    },
  ]);

  // Dropdown state for week, month, and year
  const [selectedWeek, setSelectedWeek] = useState('Week 1');
  const [selectedMonth, setSelectedMonth] = useState('Jan');
  const [selectedYear, setSelectedYear] = useState('2013');

  const updateChart = () => {
    // Update chart data based on selected values
    // You should replace the following lines with your actual data fetching logic
    const newData = [
      30,
      40,
      45,
      50,
      55,
      50,
      45,
      40,
      35,
      30,
      25,
      20, // Sample data, you should replace it with your data
    ];
    setSeries([{ ...series[0], data: newData }]);
  };

  // Handle dropdown item click for week
  const handleWeekItemClick = week => {
    setSelectedWeek(week);
    updateChart();
  };

  // Handle dropdown item click for month
  const handleMonthItemClick = month => {
    setSelectedMonth(month);
    updateChart();
  };

  // Handle dropdown item click for year
  const handleYearItemClick = year => {
    setSelectedYear(year);
    updateChart();
  };

  return (
    <div>
      <Row>
        {/* <div className='d-flex justify-content-between align-items-center '> */}
        <Col xs={12} md={6}>
          <div>
            <p>Emerge App Download</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='d-flex'>
            {/* Dropdown buttons */}
            {/* Week */}
            <div className='dropdown d-inline-block'>
              <button
                className=' d-flex justify-content-center align-items-center dropdown-toggle md-px-3 md-py-2 px-2 py-1'
                type='button'
                id='weekDropdown'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                style={{
                  border: '1px solid #C54FE8',
                  borderRadius: '10px',
                }}
              >
                <p
                  style={{
                    color: '#000000',
                    fontSize: '13px',
                    fontWeight: '400',
                  }}
                  className='my-0'
                >
                  {selectedWeek}
                </p>
                <img src='/Icon.svg' className='ms-3' alt='' />
              </button>
              <ul className='dropdown-menu' aria-labelledby='weekDropdown'>
                {Array.from({ length: 5 }, (_, i) => (
                  <li key={i}>
                    <button
                      className='dropdown-item'
                      onClick={() => handleWeekItemClick(`Week ${i + 1}`)}
                    >
                      Week {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Month */}
            <div className='dropdown d-inline-block ms-3'>
              <button
                type='button'
                id='monthDropdown'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                className='d-flex d-flex justify-content-center align-items-center  ms-3 btn  dropdown-toggle md-px-3 md-py-2 px-2 py-1'
                style={{
                  border: '1px solid #C54FE8',
                  borderRadius: '10px',
                }}
              >
                <p
                  style={{
                    color: '#000000',
                    fontSize: '13px',
                    fontWeight: '400',
                  }}
                  className='my-0'
                >
                  {selectedMonth}
                </p>
                <img src='/Icon.svg' className='ms-3' alt='' />
              </button>
              <ul className='dropdown-menu' aria-labelledby='monthDropdown'>
                {[
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ].map((month, index) => (
                  <li key={index}>
                    <button
                      className='dropdown-item'
                      onClick={() => handleMonthItemClick(month)}
                    >
                      {month}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Year */}
            <div className='dropdown d-inline-block ms-3'>
              <button
                type='button'
                id='yearDropdown'
                aria-expanded='false'
                className='d-flex d-flex justify-content-center align-items-center  ms-3 btn   dropdown-toggle md-px-3 md-py-2 px-2 py-1'
                style={{
                  border: '1px solid #C54FE8',
                  borderRadius: '10px',
                }}
              >
                <p
                  style={{
                    color: '#000000',
                    fontSize: '13px',
                    fontWeight: '400',
                  }}
                  className='my-0'
                >
                  {selectedYear}
                </p>
                <img src='/Icon.svg' className='ms-3' alt='' />
              </button>
              <ul className='dropdown-menu' aria-labelledby='yearDropdown'>
                {Array.from({ length: 5 }, (_, i) => (
                  <li key={i}>
                    <button
                      className='dropdown-item'
                      onClick={() => handleYearItemClick(`201${i + 3}`)}
                    >
                      201{i + 3}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
        {/* </div> */}
      </Row>

      {/* Line Chart */}
      <div>
        <Chart options={options} series={series} type='line' height={350} />
      </div>
    </div>
  );
};

export default MainLineChart;
