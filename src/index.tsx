import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./store";

import GlobalStyle from './components/GlobalStyle';
import "./components/font.css";

import React from 'react';
import ROUTES from './lib/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {ROUTES}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);