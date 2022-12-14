import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hack from './components/Hack';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'react-gmap-369410.firebaseapp.com',
  projectId: 'react-gmap-369410',
  storageBucket: 'react-gmap-369410.appspot.com',
  messagingSenderId: '944777676827',
  appId: '1:944777676827:web:a141f8abf67edb181990be',
  measurementId: 'G-NTCJBKG9BJ',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/hack',
    element: <Hack />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
