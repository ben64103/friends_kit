import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import usersReducer from './redux/users/userSlice.js';

import './tailwind.css';
import Root from './routes/root.jsx';
import Signup from './pages/signup/Signup.jsx';
import NotFound from './pages/404/NotFound.jsx';
import SelectAccount from './components/signup/steps/SelectAccount.jsx';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

console.log(store.getState());

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/signup/select-account',
    element: <SelectAccount />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
