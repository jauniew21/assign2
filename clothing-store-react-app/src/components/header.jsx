import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext.jsx';

const Header = (props) => {
  const cart = useContext(CartContext);
  const [logInOut, setLogInOut] = useState('Admin Login');

  const handleLogChange = () => {
    props.handleLogIn()

    if (props.isLoggedIn) {
      setLogInOut('Logout');
    } else {
      setLogInOut('Admin Login');
    }
    console.log(props.isLoggedIn)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800/50 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <div className="text-gray-300 font-semibold">
            Logo
          </div>

          <nav className="hidden sm:flex space-x-6">
            <Link to="/">Home</Link>
            <Link to="/women" gender={true}>Women</Link>
            <Link to="/men" gender={false}>Men</Link>
            <Link to="/browse">Browse</Link>
            <Link to="/about">About</Link>
            <Link to="/dashboard"
            className={`bg-none transition-colors duration-200 
            ${props.isLoggedIn ? 'hidden' : ''}`}>
              Sales Dashboard</Link>
          </nav>

          <div className='flex space-x-3'>
            <button onClick={handleLogChange}
            className={`bg-none transition-colors duration-200 
            ${props.isLoggedIn ? 'text-blue-600' : 'text-red-600'}`}>
              {logInOut}</button>

            <Link to="/cart">
              Cart <span>({cart.cart.length})</span>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;