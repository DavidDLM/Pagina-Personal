import React from "react";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaSpotify, FaInstagram } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
	return (
		<div className="footer mt-5 pb-5">
			<div className="blue-box flex-column flex-lg-row d-flex container justify-content-between align-items-center p-5">
				<div className="left-box">
					<div className="logo-title pb-2">Mario de León</div>
					<div className="d-flex align-items-center">
						<span className="copy-right">
							Copyright © 2000 - 2022 Mario de León Productions BV - Todos los derechos reservados
						</span>
						<span className="line mx-3">|</span>
						<span className="tos">Términos de uso y Privacidad</span>
					</div>
				</div>
				<div className="right-part py-3 py-lg-0 d-flex align-items-center">
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
	);
};

export default Footer;
