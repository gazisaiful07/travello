import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navItems = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/destinations">Destinations</NavLink></li>
      <li><NavLink to="/booking">Booking</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-md px-4 lg:px-16 sticky top-0 z-50">
      <div className="navbar-start">
        <NavLink to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          <FontAwesomeIcon icon={faPlaneDeparture} />
          Travello
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">{navItems}</ul>
      </div>

      <div className="navbar-end">
        <NavLink to="/booking" className="btn btn-primary hidden md:flex">
          Book Now
        </NavLink>

        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;