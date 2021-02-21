import React from 'react';
import {Link} from 'react-router-dom';

export interface IMainMenuItem {
  cssClasses: string;
  pathTo: string;
  title: string;
}

export const MainMenuItem = (props: {items: IMainMenuItem[]}) => {
  const { items } = props;

  return (
    <React.Fragment>
      {items.map(item => <Link key={item.title} to={item.pathTo} className={item.cssClasses}>{item.title}</Link>)}
    </React.Fragment>
  )
}