import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';

export const AdminChart = ({ data }: any) => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      // @ts-ignore
      const newChartInstance = new Chart(chartContainer.current, data);
      // @ts-ignore
      setChartInstance(newChartInstance);
    }
  }, [data]);

  return (
    <div className='w-full lg:w-1/2 p-5'>
      <div className='bg-white border-transparent rounded-lg shadow-xl'>
        <div
          className='bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2'>
          <h5 className='font-bold uppercase text-gray-600'>Graph</h5>
        </div>
        <div className='p-5'>
          <canvas ref={chartContainer} width='undefined' height='undefined' />
        </div>
      </div>
    </div>
  );
};