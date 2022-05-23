import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./store";

import GlobalStyle from './components/GlobalStyle';
import "./components/font.css";

import Page from './components/containers/PageContext';
import App from './pages/App';
import NotFound from './pages/NotFound';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/minecraft-categorizer" element={<Page content={<App />} title="Home" />} />
          <Route path="/404" element={<Page content={<NotFound />} title="Not Found" />} />
          <Route path="/" element={<Navigate to="/minecraft-categorizer" />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
