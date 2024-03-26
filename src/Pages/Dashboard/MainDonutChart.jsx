import React from 'react';
import Chart from 'react-apexcharts';

export const MainDonutChart = () => {
  const chartOptions = {
    chart: {
      type: 'donut',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
      background: {
        enabled: true,
        foreColor: '#000',
      },
      style: {
        fontSize: '10px',
        width: '44px',
        height: '44px',
        fontWeight: '400',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: '44px',
      },
    },
    colors: ['#C54FE8', '#F0E5F7', '#9B17C2'],
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
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              fontSize: '44px',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              color: '#000', // Color of the total value
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              },
            },
          },
        },
      },
    },
  };

  const chartSeries = [40, 45, 15];

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type='donut'
        width='380'
      />
    </div>
  );
};

export default MainDonutChart;
