import React from 'react';
import {Link} from 'react-router-dom';

export interface IMainMenuItem {
  pathTo: string;
  title: string;
}

export const MainMenuItem = (props: {items: IMainMenuItem[], cssClasses: string}) => {
  const { items, cssClasses } = props;

  return (
    <React.Fragment>
      {items.map(item => <Link key={item.title} to={item.pathTo} className={cssClasses}>{item.title}</Link>)}
    </React.Fragment>
  )
}