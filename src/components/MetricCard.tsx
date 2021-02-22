import React from 'react';

export interface IMetricCard {
  styleWrap: string;
  styleDot: string;
  title: string;
  value: string;
}

export const MetricCard = ({styleWrap, styleDot, title, value}: IMetricCard) => {
  return (
    <div className='w-full md:w-1/2 xl:w-1/3 p-6'>
      <div
        className={`${styleWrap}`}>
        <div className='flex flex-row items-center'>
          <div className='flex-shrink pr-4'>
            <div className={`rounded-full p-5 ${styleDot}`}/>
          </div>
          <div className='flex-1 text-right md:text-center'>
            <h5 className='font-bold uppercase text-gray-600'>
              {title}
            </h5>
            <h3 className='font-bold text-3xl'>
              {value}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}