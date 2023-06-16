import React from 'react';
import { useRouter } from 'next/router';
import styles from './Collection.module.css';

const Collection = () => {
  const router = useRouter();

  const onGoHome = () => {
    router.push('/');
  };
  return (
    <div className={styles.main}>
      <p>Collection Page</p>
      <button onClick={onGoHome}>Go Home Page</button>
    </div>
  );
};

export default Collection;
