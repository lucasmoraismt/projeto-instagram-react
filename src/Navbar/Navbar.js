import Logo from "./Logo";
import LogoMobile from "./LogoMobile";
import Search from "./Search";
import Icons from "./Icons";
import IconsMobile from "./IconsMobile";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Logo />
        <LogoMobile />

        <Search />

        <Icons />
        <IconsMobile />
      </div>
    </div>
  );
}
