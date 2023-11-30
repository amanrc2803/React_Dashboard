import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

import axios from 'axios';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement)
const PieChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch data from MongoDB Atlas
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/data');
        const data = response.data;

        // Group data by intensity
        const intensityGroups = groupByIntensity(data);

        // Create color palette
        const colorPalette = generateColorPalette(intensityGroups.length);

        // Create Pie Chart data
        const chartData = {
          labels: intensityGroups.map(group => group.intensity),
          datasets: [
            {
              data: intensityGroups.map(group => group.count),
              backgroundColor: colorPalette,
              borderColor: colorPalette.map(color => color.replace('0.2', '1')), // Adjust border opacity
              borderWidth: 1,
            },
          ],
        };

        setChartData(chartData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const groupByIntensity = (data) => {
    // Implement your logic to group data by intensity
    // For example, you can use reduce to count occurrences of each intensity
    // Replace this logic with your actual data structure and grouping logic
    const intensityGroups = data.reduce((groups, item) => {
      const intensity = item.intensity;
      const existingGroup = groups.find(group => group.intensity === intensity);

      if (existingGroup) {
        existingGroup.count++;
      } else {
        groups.push({ intensity, count: 1 });
      }

      return groups;
    }, []);

    return intensityGroups;
  };

  const generateColorPalette = (count) => {
    // Implement your logic to generate a color palette
    // You can use a library like chroma.js for more advanced color generation
    // Replace this logic with your actual color generation logic
    const colors = ['#FF5733', '#3498DB', '#2ECC71', '#F39C12', '#8E44AD', '#E74C3C'];
    return colors.slice(0, count);
  };

  return (
    <>
      <div className='header'>
        <div className='links'></div>
      </div>
      {chartData && <Pie data={chartData} />}
    </>
  );
};

export default PieChart;
