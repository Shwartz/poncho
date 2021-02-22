import React from 'react';
import { Toolbar } from '../components/Toolbar';

export const TemplateExamples = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Toolbar />
      <div className='px-2 md:px-8 mt-8'>
        <h1>Two col template</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <div className='bg-green-600 rounded-md flex items-center justify-center text-white text-2xl font-extrabold h-36'>1</div>
          <div className='md:col-span-2 bg-green-600 rounded-md flex items-center justify-center text-white text-2xl font-extrabold h-36'>2</div>
        </div>

        <h1>Two col template</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <div className='md:col-span-2 bg-green-600 rounded-md flex items-center justify-center text-white text-2xl font-extrabold h-36'>2</div>
          <div className='bg-green-600 rounded-md flex items-center justify-center text-white text-2xl font-extrabold h-36'>1</div>
        </div>

        <h1>Three col template</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <div className='bg-green-600 rounded-md flex items-center justify-center text-white text-2xl font-extrabold h-36'>1</div>
          <div className='bg-green-600 rounded-md flex items-center justify-center text-white text-2xl font-extrabold h-36'>2</div>
          <div className='bg-green-600 rounded-md flex items-center justify-center text-white text-2xl font-extrabold h-36'>3</div>
        </div>
      </div>
    </div>
  );
};