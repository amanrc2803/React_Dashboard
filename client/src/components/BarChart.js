import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
//import { format } from 'date-fns';

const BarChart = ({ data, labels }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const newChart = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Start Year',
            data: data.map((entry) => entry.start_year),
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
            borderWidth: 1,
          },
         
         
          {
            label: 'Intensity',
            data: data.map((entry) => entry.intensity),
            backgroundColor: 'rgba(153, 102, 255, 0.8)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          sector: {
            display: false,
            text: 'Bar Chart with Labels',
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
       
        },
      },
    });

    return () => {
      newChart.destroy();
    };
  }, [data, labels]);

  return <canvas ref={chartRef}></canvas>;
};

export default BarChart;
