import '../index.css';

export const Home = () => {
	return (
		<div className='grid grid-cols-1 bg-slate-800 p-3'>
			<div className='text-white grid grid-flow-col auto-cols-max'>
				<h1 className='text-3xl font-bold w-fit pr-2'>Tame The List </h1>
				<h3 className='text-lg font-semibold  w-fit'>Organize your life</h3>
			</div>
		</div>
	);
};

export default Home;
