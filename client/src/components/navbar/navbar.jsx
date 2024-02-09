import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../constants/'; // Importing navLinks from the data file

const Navbar = () => {
  return (
    <nav>
      <ul className='flex flex-col uppercase font-semibold h-[96.7vh] w-[200px] border-r-4 border-[#030637]'>
        {navLinks.map((link) => (
          <Link key={link.id} className='no-underline w-[100%]' to={link.to}>
            <li className='m-1 w-[175px] darkpurple-bg p-1 rounded-lg text-xl hover:bg-black cursor-pointer'>{link.title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
