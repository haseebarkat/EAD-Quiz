import Auctions from "./components/Auctions";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
function App() {
	return (
		<div className="bg-[#1F1D2B]">
			<Navbar />
			<Welcome />
			<Auctions />
			<Discover />
			<Footer />
		</div>
	);
}

export default App;
