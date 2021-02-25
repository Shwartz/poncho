import { atom } from 'recoil';

export interface IMetricValues {
  title: string;
  inputValue: number;
  color: string;
  id: number;
}
const defaultInputValues: IMetricValues[] = [
  {
    title: 'Total revenue',
    inputValue: 342,
    color: 'green',
    id: 1,
  },
  {
    title: 'Total users',
    inputValue: 345,
    color: 'pink',
    id: 2,
  },
  {
    title: 'New users',
    inputValue: 23,
    color: 'yellow',
    id: 3,
  },
  {
    title: 'Server uptime',
    inputValue: 152,
    color: 'blue',
    id: 4,
  },
  {
    title: 'To list',
    inputValue: 10,
    color: 'indigo',
    id: 5,
  },
  {
    title: 'Issues',
    inputValue: 11,
    color: 'red',
    id: 6,
  },
];

export const inputValuesState = atom({
  key: 'inputValueState',
  default: defaultInputValues,
});