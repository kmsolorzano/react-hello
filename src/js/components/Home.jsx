import Counter from './Counter'

//create your first component
const Home = ({ num }) => {
	return (
		<div className="text-center pt-3">
			<span className="text-center bg-black text-white p-3">
				<i className="fa-regular fa-clock"></i>
			</span>
			<Counter numero={num} digitos={9} />
			<Counter numero={num} digitos={8} />
			<Counter numero={num} digitos={7} />
			<Counter numero={num} digitos={6} />
			<Counter numero={num} digitos={5} />
			<Counter numero={num} digitos={4} />
			<Counter numero={num} digitos={3} />
			<Counter numero={num} digitos={2} />
			<Counter numero={num} digitos={1} />
		</div>
	);



};

export default Home;