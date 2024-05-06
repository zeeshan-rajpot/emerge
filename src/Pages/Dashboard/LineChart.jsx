import React from 'react';
import Chart from 'react-apexcharts';

export const LineChart = () => {
  const chartOptions = {
    chart: {
      id: 'basic-line',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    stroke: {
      curve: 'smooth',
      colors: ['#C54FE8'],
    },
  };

  const chartSeries = [
    {
      name: 'Series 1',
      data: [30, 50, 20, 35, 36, 40, 42, 48, 55],
    },
  ];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type='line'
      height={100}
    />
  );
};

export default LineChart;
