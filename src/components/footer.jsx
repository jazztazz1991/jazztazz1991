import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

export const Footer = () => {
	return (
		<div className='grid grid-cols-2 bg-slate-600 p-3 absolute bottom-0 left-0 w-full'>
			<div className='text-white grid grid-flow-col auto-cols-max'>
				<Link to='/' className='text-xl font-bold w-fit pr-2'>
					Cody Chase{' '}
				</Link>
			</div>
			<nav className='justify-end col-end-4 w-fit'>
				<ul className='grid grid-cols-2 text-slate-800 font-medium'>
					<Link
						to='https://github.com/jazztazz1991'
						className='bg-blue-light rounded px-2 mx-2 w-fit shadow-md shadow-cyan-500/50'
					>
						GitHub
					</Link>
					<Link
						to='https://www.linkedin.com/in/jazztazz/'
						className='bg-blue-light rounded px-2 mx-2 w-fit shadow-md shadow-cyan-500/50'
					>
						LinkedIn
					</Link>
				</ul>
			</nav>
		</div>
	);
};
