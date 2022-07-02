import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import { Header } from './components/header';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Outlet />
      <footer>bla bla some footer data</footer>
    </div>
  );
}

export default App;
