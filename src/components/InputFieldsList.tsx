import React, { useState } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';


interface IMetricValues {
  title: string;
  value: number;
  id: number;
}

const defaultInputValues: IMetricValues[] = [
  {
    title: 'Total revenue',
    value: 342,
    id: 1,
  },
  {
    title: 'Total users',
    value: 345,
    id: 2,
  },
  {
    title: 'New users',
    value: 23,
    id: 3,
  },
  {
    title: 'Server uptime',
    value: 152,
    id: 4,
  },
  {
    title: 'To list',
    value: 10,
    id: 5,
  },
  {
    title: 'Issues',
    value: 11,
    id: 6,
  },
];

const inputValuesState = atom({
  key: 'inputValueState',
  default: defaultInputValues,
});

function replaceItemAtIndex(arr: [], index: number, newValue: {}) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: [], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export const InputFieldsList = () => {

  const [inputValue, setInputValue] = useState('');
  const inputValues = useRecoilValue(inputValuesState);
  const setInputValues = useSetRecoilState(inputValuesState);
  console.log('inputValues', inputValues);

  const onChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value);
    setInputValue(value);
    //setInputValues(value);
  }

  return (
    <React.Fragment>
      {
        inputValues.map(({ title, value, id }, index) => {
          return (
            <label key={id} className='m-5'>title
              <input onChange={onChange} className='m-2 border p-1' type='text' value={value} />
            </label>
          );
        })
      }
    </React.Fragment>
  );
};