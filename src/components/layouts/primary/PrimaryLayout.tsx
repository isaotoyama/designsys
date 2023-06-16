import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <div {...divProps}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
