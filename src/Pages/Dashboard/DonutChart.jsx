import React from 'react';
import Chart from 'react-apexcharts';

export const DonutChart = () => {
  const chartOptions = {
    chart: {
      type: 'donut',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    labels: ['Series 1', 'Series 2'],
    colors: ['#C54FE8', '#E6E6E6'],
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
  };

  const chartSeries = [80, 20];

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type='donut'
        width='200'
      />
    </div>
  );
};

export default DonutChart;
