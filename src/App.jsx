import 'regenerator-runtime/runtime';
import React from 'react'
//import './App.css';
import VozEj1 from './components/VozEj1'
import VozEj2 from './components/VozEj2'
import Gestos from './components/Gestos'
import AR from './components/AR'
import Home from './components/Home'
import ARKaren from './components/ar/ARKaren'; // se añadio nueva página para el modelo 3D
import { createBrowserRouter, RouterProvider } from 'react-router-dom' //importamos la libreria

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/vozej1',
        element: <VozEj1 />
      },
      {
        path: '/vozej2',
        element: <VozEj2 />
      },
      {
        path: '/gestos',
        element: <Gestos />
      },
      {
        path: '/ar',
        element: <AR />
      },
      {
        path: '/arkaren',  // añadimos la ruta para la nueva página
        element: <ARKaren />
      }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
