import React from 'react';
import { useRouter } from 'next/router';
import styles from './Home.module.css';

const Home = () => {
  const router = useRouter();

  const onClickCollection = () => {
    router.push('/collection');
  };
  return (
    <div className={styles.main}>
      <p>Main Home Page</p>
      <button onClick={onClickCollection}>Visit Collection Page</button>
    </div>
  );
};

export default Home;
