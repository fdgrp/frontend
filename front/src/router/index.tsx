import React from 'react';
import AddCar from '../pages/AddCar/AddCar';
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


]

export const publicRoutes: IRoute[] = [
  { path: "/", element: <IndexUnlogged /> },
  { path: "/check", element: <CarDetail /> },

  { path: "/notRealised", element: <NotRealised /> },


]


