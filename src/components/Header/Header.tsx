import MenuItem from '../MenuItem/MenuItem';
import './Header.scss';
import HeaderLogo from '../HeaderLogo/HeaderLogo';

const Header = (): JSX.Element => {
  return (
    <div className="Header">
      <a href="/" className="Header-LogoContainer">
        <HeaderLogo />
      </a>
      <div className="Header-Menu">
        <MenuItem name="Home" url="/" />
        <MenuItem name="Topology" url="/topology" />
        <MenuItem name="Telemetry" url="/telemetry" />
        <MenuItem name="About" url="/about" />
      </div>
    </div>
  );
};

export default Header;
