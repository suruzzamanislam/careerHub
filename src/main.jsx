import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root/Root.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Error from './components/Error/Error.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Statistics></Statistics>,
      },
      {
        path: '/appliedjob',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('../jobs.json'),
      },
      {
        path: '/jobdetails/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json'),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
