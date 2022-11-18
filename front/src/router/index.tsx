import React from 'react';
import IndexUnlogged from '../pages/IndexUnlogged/IndexUnlogged';


export interface IRoute {
  path: string;
  element: React.ReactNode;
}

export const privateRoutes: IRoute[] = [

]

export const publicRoutes: IRoute[] = [
  { path: "/", element: <IndexUnlogged /> },
]


