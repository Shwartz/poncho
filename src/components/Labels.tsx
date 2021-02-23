import React from 'react';

export const Labels = () => {
  return (
    <React.Fragment>
      <label className='m-5'>Total revenue
        <input className='m-2 border p-1' type='text' value={0} />
      </label>
      <label className='m-5'>Total users
        <input className='m-2 border p-1' type='text' value={0} />
      </label>
      <label className='m-5'>New users
        <input className='m-2 border p-1' type='text' value={0} />
      </label>
      <label className='m-5'>Server uptime
        <input className='m-2 border p-1' type='text' value={0} />
      </label>
      <label className='m-5'>To list
        <input className='m-2 border p-1' type='text' value={0} />
      </label>
      <label className='m-5'>Issues
        <input className='m-2 border p-1' type='text' value={0} />
      </label>
    </React.Fragment>
  )
}