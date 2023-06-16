export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header {...headerProps} className={`${className}`}>
      <p>Header Section</p>
    </header>
  );
};

export default Header;
