import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyle';
import Page from './components/containers/PageContext';
import App from './pages/App';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/"     element={<Page content={<App />}      title="Home" />} />
      <Route path="/404"  element={<Page content={<NotFound />} title="Not Found" />} />
      <Route path="*"     element={<Navigate to="/404" />} />
    </Routes>
  </BrowserRouter>
);
