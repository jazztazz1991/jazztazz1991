import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

export const Header = () => {
	return (
		<div className='grid grid-cols-2 bg-slate-600 p-3'>
			<div className='text-white grid grid-flow-col auto-cols-max'>
				<Link to='/' className='text-xl font-bold w-fit pr-2'>
					Cody Chase{' '}
				</Link>
				<h3 className='text-lg font-semibold  w-fit'>Full Stack Web Developer</h3>
			</div>
			{/* <nav className='justify-end col-end-4 w-fit'>
				<ul className='grid grid-cols-4 text-slate-800 font-medium'>
					<Link
						to='/'
						className='bg-blue-light rounded px-2 mx-2 w-fit shadow-md shadow-cyan-500/50'
					>
						Home
					</Link>
					<Link
						to='/'
						className='bg-blue-light rounded px-2 mx-2 w-fit shadow-md shadow-cyan-500/50'
					>
						Boards
					</Link>
					<Link
						to='/'
						className='bg-blue-light rounded px-2 mx-2 w-fit shadow-md shadow-cyan-500/50'
					>
						Profile
					</Link>
				</ul>
			</nav> */}
		</div>
	);
};
