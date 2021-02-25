import React from 'react';
import { Toolbar } from '../components/Toolbar';
import { MetricCard } from '../components/MetricCard';
import { AdminChart } from '../components/AdminChart';
import { InputList } from '../components/inputs/InputList';
import { useRecoilValue } from 'recoil';
import { inputValuesState } from '../atoms/atoms';

const barConfig = {
  'type': 'bar',
  'data': {
    'labels': ['January', 'February', 'March', 'April', 'May', 'June'],
    'datasets': [{
      'label': 'Page Impressions',
      'data': [10, 20, 30, 40, 32, 22],
      'borderColor': 'rgb(157,8,73)',
      'backgroundColor': 'rgba(253,240,191, 0.3)',
    }, {
      'label': 'Total Revenue',
      'data': [5, 15, 10, 30, 11, 10, 10],
      'type': 'line',
      'fill': false,
      'borderColor': 'rgb(29,155,111)',
    }],
  },
  'options': {
    'scales': {
      'yAxes': [{
        'ticks': {
          'beginAtZero': true,
        },
      }],
    },
  },
};
const pieConfig = {
  'type': 'doughnut',
  'data': {
    'labels': ['P1', 'P2', 'P3'],
    'datasets': [{
      'label': 'Issues',
      'data': [300, 50, 100],
      'backgroundColor': ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
    }],
  },
};

export const DashboardExample = () => {
  const inputValues = useRecoilValue(inputValuesState);
  const newBarData = inputValues.map(item => item.inputValue);
  const updatedBarChartData = {...barConfig};
  updatedBarChartData.data.datasets[1].data = newBarData;

  return (
    <div className='max-w-7xl mx-auto'>
      <Toolbar />
      <div className='px-2 md:px-8 mt-8'>
        <h1>Dashboard</h1>
        <div className='main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5'>
          <div className='pt-6 tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white'>
            <h3 className='font-bold pl-2'>Analytics</h3>
          </div>
          <div className='flex flex-wrap'>
            {inputValues.map(item => {
              const {color, title, id, inputValue} = item;
              const value = id === 1 ? `$${inputValue}` : inputValue;
              const style = `bg-gradient-to-b from-${color}-200 to-${color}-100 border-b-4 border-${color}-600 rounded-lg shadow-xl p-5`;
              return (
                <MetricCard key={id} styleWrap={style} styleDot={`bg-${color}-600`} title={title} value={value} />
              )
            })}
          </div>
        </div>

        <div className='flex flex-row flex-wrap flex-grow mt-2'>
          <AdminChart
            data={updatedBarChartData}
          />
          <AdminChart
            data={pieConfig}
          />
        </div>

        <div className='flex flex-row flex-wrap flex-grow mt-2 flex-1'>
          <InputList/>
        </div>

      </div>
    </div>
  );
};