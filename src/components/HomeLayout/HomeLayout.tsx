import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export interface IHomeLayout extends React.ComponentPropsWithoutRef<'div'> {}

const HomeLayout = ({ children }: IHomeLayout) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default HomeLayout;
