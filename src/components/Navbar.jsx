import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const {user} = use(AuthContext);
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
        <NavLink className={({isActive})=> isActive? 'text-blue-500 font ' : ''} to='/'>Home</NavLink>
        </li>
        <li>
        <NavLink  className={({isActive})=> isActive? 'text-blue-500 font ' : ''} to='/profile'>My-profile</NavLink>
        </li>
      </ul>
    </div>
    <NavLink to="/">App Store</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1 font-bold hidden lg:flex">
      <li>
        <NavLink className={({isActive})=> isActive? 'text-blue-500 font ' : ''} to='/'>Home</NavLink>
        </li>
        <li>
        <NavLink  className={({isActive})=> isActive? 'text-blue-500 font ' : ''} to='/profile'>My-profile</NavLink>
        </li>
       </ul>
  </div>
  <div className="navbar-end mr-2 ">
    <div className='text-purple-500 mx-2'>{user &&(
  <div className="text-purple-600 font-semibold mx-2 animate-slideIn">
    👋 Welcome, {user.name || "User"} 
  </div>
)}</div>
<Link to="/auth/login"><a href="#_" class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
    <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
    <span className="relative group-hover:text-white">Login</span>
</a> </Link>
  </div>
</div>
    );
};

export default Navbar;


