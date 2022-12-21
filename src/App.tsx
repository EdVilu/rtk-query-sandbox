import React from 'react';
import './App.css';
import { PokemonView } from './app/views/PokemonView';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { PokemonDetailsView } from './app/views/PokemonDetailsView';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Navigate to="pokemons" replace />,
  },
  {
    path: '/pokemons',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <PokemonView />,
      },
      {
        path: ':name',
        element: <PokemonDetailsView />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
