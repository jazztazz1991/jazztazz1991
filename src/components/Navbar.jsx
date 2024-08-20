import React from 'react';
import logo from '../assets/kevinRushLogo.png';
import {
	FaLinkedin,
	FaGithub,
	FaTwitterSquare as FaSqaureXTwittter,
	FaInstagram,
} from 'react-icons/fa';

const Navbar = () => {
	return (
		<nav className='mb-20 flex items-center justify-between py-6'>
			<div className='flex flex-shrink-0 items-center'>
				<img className='mx-2 w-10' src={logo} alt='Logo' />
			</div>
			<div className='m-8 flex item-center justify-center gap-4 text-2xl'>
				<FaLinkedin />
				<FaGithub />
				<FaInstagram />
				<FaSqaureXTwittter />
			</div>
		</nav>
	);
};

export default Navbar;
