import React from 'react';
import AddCar from '../pages/AddCar/AddCar';
import IndexLogged from '../pages/IndexLogged/IndexLogged';
import IndexUnlogged from '../pages/IndexUnlogged/IndexUnlogged';


export interface IRoute {
  path: string;
  element: React.ReactNode;
}

export const privateRoutes: IRoute[] = [
  { path: "/", element: <IndexLogged /> },
  { path: "/add", element: <AddCar /> },
]

export const publicRoutes: IRoute[] = [
  { path: "/", element: <IndexUnlogged /> },
]


