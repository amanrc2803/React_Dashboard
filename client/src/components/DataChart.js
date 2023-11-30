import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Chart } from 'chart.js/auto';

const DataChart = () => {
  const [chartInstance, setChartInstance] = useState(null);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    end_year: '',
    topic: '', // Corrected to 'topic' instead of 'topics'
    sector: '',
    region: '',
    pest: '',
    source: '',
    swot: '',
    country: '',
    city: '',
  });

  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/data', {
          params: filters,
        });

        // Destroy the previous chart instance
        if (chartInstance) {
          chartInstance.destroy();
        }

        // Filter data based on your criteria
        const filteredChartData = response.data.filter((entry) => {
          return (
            (filters.sector === '' || entry.sector === filters.sector) &&
            (filters.region === '' || entry.region === filters.region)
          );
        });

        // Create a new chart
        const newChart = new Chart(chartRef.current, {
          type: 'pie',
          data: {
            labels: filteredChartData.map((entry) => entry.sector),
            datasets: [
              {
                data: filteredChartData.map((entry) => entry.intensity),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.8)',
                  'rgba(54, 162, 235, 0.8)',
                  'rgba(255, 206, 86, 0.8)',
                  'rgba(75, 192, 192, 0.8)',
                  'rgba(153, 102, 255, 0.8)',
                  'rgba(255, 159, 64, 0.8)',
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            plugins: {
              title: {
                display: true,
                text: `Sector ${filters.sector}`
              },
            },
          },
        });

        setData(response.data);

        // Store the new chart instance
        setChartInstance(newChart);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [filters, chartInstance]);

  const handleFilterChange = (filterName, value) => {
    // Update the filters
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <div>
      <h2>Pie Chart</h2>
      {/* Add filter UI components here */}
      <div>
        <label>End Year:</label>
        <input
          type="text"
          value={filters.end_year}
          onChange={(e) => handleFilterChange('end_year', e.target.value)}
        />
      </div>
      <div>
        <label>Topics:</label>
        <input
          type="text"
          value={filters.topic}
          onChange={(e) => handleFilterChange('topic', e.target.value)}
        />
      </div>
      <div>
        <label>Sector:</label>
        <input
          type="text"
          value={filters.sector}
          onChange={(e) => handleFilterChange('sector', e.target.value)}
        />
      </div>
      <div>
        <label>Region:</label>
        <select
          value={filters.region}
          onChange={(e) => handleFilterChange('region', e.target.value)}
        >
          <option value="">Select Region</option>
          <option value="Northern America">Northern America</option>
          <option value="Central America">Central America</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Repeat the above for other filters */}
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default DataChart;
