import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="flex absolute top-0 left-0 z-0 flex-col items-center px-32 max-w-full bg-amber-600 shadow-[0px_0px_10px_rgba(210,78,2,1)] w-[1440px] max-md:px-5">
      <div className="flex flex-col w-full max-w-[1200px] max-md:max-w-full">
        <div className="flex flex-wrap items-center py-2.5 w-full max-md:max-w-full">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;