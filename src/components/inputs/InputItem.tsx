import React, { useState } from 'react';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { IMetricValues, inputValuesState } from '../../atoms/atoms';


function replaceItemAtIndex(arr: any, index: number, newValue: {}) {
  console.log('newValue: ', newValue);
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: [], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}


export const InputItem = ({item}: any) => {
  const [itemList, setItemList] = useRecoilState(inputValuesState);
  const {title, inputValue, id} = item;
  const index = itemList.findIndex((itemList) => itemList === item);

  const editItemText = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(itemList, index, {
      ...item,
      inputValue: value,
    });

    setItemList(newList);
  }


  return (
    <label key={id} className='m-5'>{title}
      <input onChange={editItemText} className='m-2 border p-1' type='text' value={inputValue} />
    </label>
  );
};