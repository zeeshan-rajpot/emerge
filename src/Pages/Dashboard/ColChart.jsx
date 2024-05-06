import React from 'react';
import Chart from 'react-apexcharts';

export const ColChart = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '19px',
        endingShape: 'flat',
      },
      borderRadius: {
        topLeft: 10,
        topRight: 10,
      },
    },

    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    colors: ['#C54FE8', '#F5F1F1', '#C54FE8', '#F5F1F1'],
  };

  const series = [
    {
      name: 'Series 1',
      data: [50, 80, 30, 70],
    },
  ];
  return (
    <div>
      <Chart options={options} series={series} type='bar' height={100}/>
    </div>
  );
};
export default ColChart;
