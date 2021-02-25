import React from 'react';
import { useRecoilValue } from 'recoil';
import { InputItem } from './InputItem';
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