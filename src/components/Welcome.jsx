import image_1 from "../assets/image_1.png";
import image_2 from "../assets/image_2.png";
import image_3 from "../assets/image_3.png";
import Container from "react-bootstrap/Container";

function Welcome() {
	return (
		<Container>
			<div className="grid grid-cols-2 gap-5 py-20">
				<div className="space-y-10">
					<h1 className="text-6xl text-white">
						Discover, collect, and charity in extraordinary NFT
						marketplace
					</h1>

					<p className="text-xl text-gray-200">
						In aenean posuere lorem risus nec. Tempor tincidunt
						aenean purus purus vestibulum nibh mi venenatis
					</p>

					<div className="flex gap-3">
						<button className="px-12 py-2 font-medium text-white rounded-xl bg-gradient-to-r from-purple-700 to-blue-600 ">
							Explore
						</button>
						<button className="px-12 py-2 font-medium rounded-xl border border-white text-white">
							Create
						</button>
					</div>
				</div>

				<div className="relative">
					<div className="relative">
						<img src={image_1} alt="" className="w-full" />
						<img
							src={image_2}
							alt=""
							className="absolute top-7 left-0 right-0 mx-auto"
						/>

						<div className="absolute bottom-6 flex text-white justify-between left-12 right-12">
							<div className="flex items-center gap-2">
								<img src={image_3} alt="" className="w-9 h-9" />
								<div>
									<p>Laura</p>
									<p>0.21 Weth</p>
								</div>
							</div>

							<div>
								<p className="uppercase">We are here</p>
								<p>25</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default Welcome;
