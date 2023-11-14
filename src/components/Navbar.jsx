import Container from "react-bootstrap/Container";

const Navbar = () => {
	return (
		<Container>
			<nav className="flex justify-between items-center py-4">
				<p className="font-bold text-2xl text-white">FasTech</p>

				<div className="flex gap-3 text-white justify-center items-center">
					<p className="uppercase font-medium underline">Home</p>
					<p className="uppercase">My Profile</p>
					<p className="uppercase">Activity</p>
					<p className="uppercase">How it works</p>
				</div>

				<div className="text-white flex gap-2">
					<button className="px-4 py-2 rounded-xl border border-white">
						Create
					</button>
					<button className="px-2 py-1">Sign In</button>
				</div>
			</nav>
		</Container>
	);
};

export default Navbar;
