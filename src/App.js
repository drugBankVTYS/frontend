
import './App.css';

import React from 'react'
import Home from './pages/Home/Home';
import Medicine from './components/Medicine';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="/drug" element={<Medicine />} />
        {/* ... etc. */}
      </Route>
    )
  );
  return (
    <div>
    <RouterProvider router={router} />
    </div>
    
  )
}

export default App
