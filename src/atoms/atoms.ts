import { atom } from 'recoil';

export interface IMetricValues {
  title: string;
  inputValue: number;
  id: number;
}
const defaultInputValues: IMetricValues[] = [
  {
    title: 'Total revenue',
    inputValue: 342,
    id: 1,
  },
  {
    title: 'Total users',
    inputValue: 345,
    id: 2,
  },
  {
    title: 'New users',
    inputValue: 23,
    id: 3,
  },
  {
    title: 'Server uptime',
    inputValue: 152,
    id: 4,
  },
  {
    title: 'To list',
    inputValue: 10,
    id: 5,
  },
  {
    title: 'Issues',
    inputValue: 11,
    id: 6,
  },
];

export const inputValuesState = atom({
  key: 'inputValueState',
  default: defaultInputValues,
});