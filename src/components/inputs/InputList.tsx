import React from 'react';
import { InputItem } from './InputItem';
import { useRecoilValue } from 'recoil';
import { inputValuesState } from '../../atoms/atoms';


export const InputList = () => {
  const inputValues = useRecoilValue(inputValuesState);

  return (
    <React.Fragment>
      {
        inputValues.map((item) => {
          return (
              <InputItem item={item} key={item.id}/>
          );
        })
      }
    </React.Fragment>
  )
};