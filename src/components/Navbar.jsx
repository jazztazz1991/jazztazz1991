import logo from '../assets/cc.png';
import {
	FaLinkedin,
	FaGithub,
	// FaTwitterSquare as FaSqaureXTwittter,
	// FaInstagram,
} from 'react-icons/fa';

const Navbar = () => {
	return (
		<nav className='mb-20 flex items-center justify-between py-6'>
			<div className='flex flex-shrink-0 items-center'>
				<img className='mx-2 w-14' src={logo} alt='CC logo' />
			</div>
			<div className='m-8 flex item-center justify-center gap-4 text-2xl'>
				<a href='https://www.linkedin.com/in/jazztazz/' target='_blank'>
					<FaLinkedin />
				</a>
				<a href='https://github.com/jazztazz1991' target='_blank'>
					<FaGithub />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
