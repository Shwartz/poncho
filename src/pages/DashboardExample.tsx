import React, { useState } from 'react';
import { Toolbar } from '../components/Toolbar';
import { MetricCard } from '../components/MetricCard';
import { AdminChart } from '../components/AdminChart';

const chartConfig = {
  'type': 'bar',
  'data': {
    'labels': ['January', 'February', 'March', 'April'],
    'datasets': [{
      'label': 'Page Impressions',
      'data': [10, 20, 30, 40],
      'borderColor': 'rgb(157,8,73)',
      'backgroundColor': 'rgba(117,220,238, 0.2)',
    }, {
      'label': 'Adsense Clicks',
      'data': [5, 15, 10, 30],
      'type': 'line',
      'fill': false,
      'borderColor': 'rgb(58,123,174)',
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
            <MetricCard
              styleWrap='bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5'
              styleDot='bg-green-600'
              title='Total Revenue'
              value='$3249'
            />
            <MetricCard
              styleWrap='bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5'
              styleDot='bg-pink-600'
              title='Total Users'
              value='342'
            />
            <MetricCard
              styleWrap='bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5'
              styleDot='bg-yellow-600'
              title='New Users'
              value='23'
            />
            <MetricCard
              styleWrap='bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5'
              styleDot='bg-blue-600'
              title='Server Uptime'
              value='152 days'
            />
            <MetricCard
              styleWrap='bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5'
              styleDot='bg-indigo-600'
              title='To do list'
              value='7 tasks'
            />
            <MetricCard
              styleWrap='bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5'
              styleDot='bg-red-600'
              title='Issues'
              value='3'
            />
          </div>
        </div>

        <div className='flex flex-row flex-wrap flex-grow mt-2'>
          <AdminChart
            data={chartConfig}
          />

          <AdminChart
            data={pieConfig}
          />
        </div>

      </div>
    </div>
  );
};