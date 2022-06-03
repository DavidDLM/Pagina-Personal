import React from "react";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaSpotify, FaInstagram } from "react-icons/fa";
import logo from "../../../public/image/Header.PNG";
import "./Topbar.css";
const Topbar = () => {
	return (
		<div className="topbar d-lg-block d-none">
			<div className="container py-5">
				<div className="d-flex justify-content-between align-items-center">
					<img src={logo} alt="" className="img-fluid-title" />

					<div className="right-part d-flex align-items-center">
						<div className="icon mx-3">
							<a href="https://www.youtube.com/channel/UCV5XWtitIBCfC1OFhAAUWYw"
								target="_blank">
								<AiFillYoutube />
							</a>
						</div>

						<div className="icon mx-3">
							<a href="https://www.facebook.com/david.dlmc/"
								target="_blank">
								<FaFacebookF />
							</a>
						</div>

						<div className="icon mx-3">
							<AiOutlineTwitter />
						</div>

						<div className="icon mx-3">
							<a href="https://www.spotify.com/gt/"
								target="_blank">
								<FaSpotify />
							</a>
						</div>

						<div className="icon mx-3">
							<a href="https://www.instagram.com/mdavid_dlm/"
								target="_blank">
								<FaInstagram />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
