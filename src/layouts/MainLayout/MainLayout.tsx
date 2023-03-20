import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import Navbar from '../../components/Navbar/Navbar';

const MainLayout = () => (
  <main className={styles.main__wrapper}>
    <div className={styles.main__container}>
      <Navbar />
      <Outlet />
    </div>
  </main>
);
export default MainLayout;
