import React from 'react';
import AddCar from '../pages/AddCar/AddCar';
import Admin from '../pages/Admin/Admin';
import CarDetail from '../pages/CarDetail/CarDetail';
import IndexLogged from '../pages/IndexLogged/IndexLogged';
import IndexUnlogged from '../pages/IndexUnlogged/IndexUnlogged';
import NotRealised from '../pages/NotRealised/NotRealised';


export interface IRoute {
  path: string;
  element: React.ReactNode;
}

export const privateRoutes: IRoute[] = [
  { path: "/", element: <IndexLogged /> },
  { path: "/add", element: <AddCar /> },
  { path: "/cars/:id", element: <CarDetail /> },
  { path: "/check", element: <CarDetail /> },
  { path: "/notRealised", element: <NotRealised /> },
  { path: "/admin", element: <Admin /> },

]

export const publicRoutes: IRoute[] = [
  { path: "/", element: <IndexUnlogged /> },
  { path: "/check", element: <CarDetail /> },
  { path: "/admin", element: <Admin /> },

  { path: "/notRealised", element: <NotRealised /> },


]


