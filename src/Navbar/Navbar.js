import Logo from "./Logo";
import LogoMobile from "./LogoMobile";
import Search from "./Search";
import Icons from "./Icons";
import IconsMobile from "./IconsMobile";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <Logo />
        <LogoMobile />

        <Search />

        <Icons />
        <IconsMobile />
      </div>
    </div>
  );
}
