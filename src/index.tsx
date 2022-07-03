import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

import { MainPage } from './pages/main';
import { AuthPage } from './pages/auth';
import { StageInfo, StagePage } from './pages/stage';

import './index.css';
import { LoginPage } from './pages/login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/stage" element={<StagePage />}>
            <Route path=":stageId" element={<StageInfo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
