import React from 'react'
import ReactDOM from 'react-dom/client'
 
import { Provider } from 'react-redux';
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter as Router,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Partners} from "./pages/partners/Partners";
import Form from './pages/form/Form';
import  Calendar  from './pages/calendar/Calendar'
import Barchart from './pages/barchart/Barchart';
import Piechart from './pages/piechart/Piechart';
import Geography from './pages/geography/Geography';
import Cooptation from './pages/cooptation/Cooptation';




const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='partners' element={<Partners/>} />
      <Route path='cooptation' element={<Cooptation/>} />
      <Route path='form' element={<Form />} />
      <Route path='calendar' element={<Calendar />} />
      {<Route path='/bar' element={<Barchart />} />}
      {<Route path='/pie' element={<Piechart/>} />}
      {<Route path='/geography' element={<Geography/>} />}
  
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
