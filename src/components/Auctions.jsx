import { Container } from "react-bootstrap";
import image_4 from "../assets/image_4.png";
import image_5 from "../assets/image_5.png";
import image_6 from "../assets/image_6.png";
import image_7 from "../assets/image_7.png";

const Auctions = () => {
	return (
		<Container>
			<h2 className="text-2xl text-white mb-16">Hot Auctions</h2>
			<div className="grid grid-cols-4 gap-4 pb-20">
				<div className="max-w-[298px]">
					<img src={image_4} alt="" className="w-full" />
					<div className="flex text-white py-2.5 border-b border-b-white  justify-between">
						<p className="font-medium">Lorem Ipsum</p>

						<p>1.20 Weth</p>
					</div>

					<div className="py-2 flex justify-between items-center">
						<div>
							<span className="text-gray-400">Ends in</span>{" "}
							<p className="text-white inline-block">01.34.45</p>
						</div>
						<button className="py-1 px-3 border border-white rounded-lg text-white">
							Bid
						</button>
					</div>
				</div>
				<div className="max-w-[298px]">
					<img src={image_5} alt="" className="w-full" />
					<div className="flex text-white py-2.5 border-b border-b-white  justify-between">
						<p className="font-medium">Lorem Ipsum</p>

						<p>1.20 Weth</p>
					</div>

					<div className="py-2 flex justify-between items-center">
						<div>
							<span className="text-gray-400">Ends in</span>{" "}
							<p className="text-white inline-block">01.34.45</p>
						</div>
						<button className="py-1 px-3 border border-white rounded-lg text-white">
							Bid
						</button>
					</div>
				</div>
				<div className="max-w-[298px]">
					<img src={image_6} alt="" className="w-full" />
					<div className="flex text-white py-2.5 border-b border-b-white  justify-between">
						<p className="font-medium">Lorem Ipsum</p>

						<p>1.20 Weth</p>
					</div>

					<div className="py-2 flex justify-between items-center">
						<div>
							<span className="text-gray-400">Ends in</span>{" "}
							<p className="text-white inline-block">01.34.45</p>
						</div>
						<button className="py-1 px-3 border border-white rounded-lg text-white">
							Bid
						</button>
					</div>
				</div>
				<div className="max-w-[298px]">
					<img src={image_7} alt="" className="w-full" />
					<div className="flex text-white py-2.5 border-b border-b-white  justify-between">
						<p className="font-medium">Lorem Ipsum</p>

						<p>1.20 Weth</p>
					</div>

					<div className="py-2 flex justify-between items-center">
						<div>
							<span className="text-gray-400">Ends in</span>{" "}
							<p className="text-white inline-block">01.34.45</p>
						</div>
						<button className="py-1 px-3 border border-white rounded-lg text-white">
							Bid
						</button>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Auctions;
