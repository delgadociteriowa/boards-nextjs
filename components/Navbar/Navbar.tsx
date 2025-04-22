import Link from 'next/link';
import './Navbar.css';

const Navbar = () => (
  <nav className='nav'>
    <div className='nav__container'>
      <h2 className='nav__title brand__title'>
        <Link className='brand__title__link' href='/'>
          ♞BOARDS
        </Link>
      </h2>
      <Link href='/games' className='nav__link'>
        games
      </Link>
      <Link href='/about' className='nav__link'>
        about
      </Link>
    </div>
  </nav>
);

export default Navbar;