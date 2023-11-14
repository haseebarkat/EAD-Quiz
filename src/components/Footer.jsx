import { Container } from "react-bootstrap";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import twitter from "../assets/Twitter Squared.png";

const Footer = () => {
	return (
		<Container>
			<div className="pb-10 pt-4">
				<div className="text-white flex justify-between pb-8">
					<p className="max-w-[400px] text-3xl">
						Etiam et id tincidunt faucibus mollis a sociis pretium
						fermentum quis magna faucibus lacus.
					</p>

					<div>
						<h3 className="text-3xl font-medium text-white">
							Market Place
						</h3>
						<p className="mt-4 text-lg">Home</p>
						<p className="mt-4 text-lg">Activity</p>
						<p className="mt-4 text-lg">Discover</p>
						<p className="mt-4 text-lg">Learn More</p>
					</div>
					<div>
						<h3 className="text-3xl font-medium text-white">
							Company
						</h3>
						<p className="mt-4 text-lg">About Us</p>
						<p className="mt-4 text-lg">Services</p>
						<p className="mt-4 text-lg">Portfolio</p>
					</div>
					<div>
						<h3 className="text-3xl font-medium text-white">
							Contact{" "}
						</h3>
						<p className="mt-4 text-lg">Facebook</p>
						<p className="mt-4 text-lg">Twitter</p>
						<p className="mt-4 text-lg">Instagram</p>
						<p className="mt-4 text-lg">Email</p>
					</div>
				</div>
				<div className="flex items-center justify-between pt-4 border-t border-t-white">
					<div className=" flex gap-3 items-center">
						<img src={twitter} alt="" className="w-7 h-7" />
						<img src={facebook} alt="" className="w-7 h-7" />
						<img src={instagram} alt="" className="w-7 h-7" />
					</div>
					<p className="text-gray-500 font-medium">
						Copyright 2021 Gaslur
					</p>
				</div>
			</div>
		</Container>
	);
};

export default Footer;
