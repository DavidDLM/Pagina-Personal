import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const [click, setClick] = useState(false);

	const [color, setColor] = useState(false);
	const changeColor = () => {
		if (window.scrollY >= 110) {
			setColor(true);
		} else {
			setColor(false);
		}
	};
	window.addEventListener("scroll", changeColor);

	return (
		<>
			<nav
				className={
					color
						? "navbar navbar-expand-lg py-3 py-lg-0 sticky-top scroll box-shadow "
						: "navbar navbar-expand-lg py-3 py-lg-0 sticky-top withoutScroll "
				}
			>
				<div className="container py-3 py-lg-0">
					<button
						className="navbar-toggler collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="toggler-icon top-bar"></span>
						<span className="toggler-icon middle-bar"></span>
						<span className="toggler-icon bottom-bar"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-lg-0 py-3 mb-3">
							<li className="nav-item mx-2 mb-lg-0 mb-3 mt-lg-0 mt-3">
								<NavLink
									className="nav-link"
									activeClassName="nav-link-active"
									href="#story"
									to="/story"
								>
									Sobre mi
								</NavLink>
							</li>
							<li className="nav-item mx-2 mb-lg-0 mb-3">
								<NavLink
									className="nav-link"
									activeClassName="nav-link-active"
									href="#css"
									to="/css">
									CSS
								</NavLink>
							</li>
							<li className="nav-item mx-2 mb-lg-0 mb-3">
								<NavLink
									className="nav-link"
									activeClassName="nav-link-active"
									href="#chat"
									to="/chat">
									Chat
								</NavLink>
							</li>
							<li className="nav-item mx-2 mb-lg-0 mb-3">
								<NavLink
									to="/card"
									activeClassName="nav-link-active"
									className="nav-link"
									href="#memoria"
								>
									Memoria
								</NavLink>
							</li>
							<li className="nav-item mx-2 mb-lg-0 mb-3">
								<NavLink
									to="/calc"
									activeClassName="nav-link-active"
									className="nav-link"
									href="#calculator"
								>
									Calculadora
								</NavLink>
							</li>
							<li className="nav-item mx-2 mb-lg-0 mb-3">
								<a
									to="/web"
									activeClassName="nav-link-active"
									className="nav-link"
									href="http://3.221.77.158:8010/"
									target="_blank"
								>
									Página Web: Travel
								</a>
							</li>
							<li className="nav-item mx-2 mb-lg-0 mb-3">
								<a
									className="nav-link"
									activeClassName="nav-link-active"
									href="https://moviestreambase.xyz/"
									target="_blank"
								>
									Página Web: MADAO
								</a>
							</li>
						</ul>

					</div>
				</div>
			</nav>

			{/* <div className={click ? "left-nav sticky-top p-5" : "d-none"}>
				<div className="d-flex">
					<ul>
						<li className="nav-item mx-2 mb-lg-0 mb-3 mt-lg-0 mt-3">
							<a className="nav-link" href="#home">
								Home
							</a>
						</li>
						<li className="nav-item mx-2 mb-lg-0 mb-3">
							<a className="nav-link" href="#tour">
								TOUR
							</a>
						</li>
						<li className="nav-item mx-2 mb-lg-0 mb-3">
							<a className="nav-link" href="#about">
								ABOUT ANDRÉ
							</a>
						</li>
						<li className="nav-item mx-2 mb-lg-0 mb-3">
							<a className="nav-link" href="#shop">
								WEBSHOP
							</a>
						</li>
						<li className="nav-item mx-2 mb-lg-0 mb-3">
							<a className="nav-link" href="#media">
								MEDIA
							</a>
						</li>
						<li className="nav-item mx-2 mb-lg-0 mb-3">
							<a className="nav-link" href="#cinema">
								CINEMA
							</a>
						</li>
						<li className="nav-item mx-2 mb-lg-0 mb-3">
							<a className="nav-link" href="#news">
								NEWS
							</a>
						</li>
					</ul>
					<ImCross className="icon-cross" onClick={() => setClick(!click)} />
				</div>
			</div> */}
		</>
	);
};

export default Navbar;