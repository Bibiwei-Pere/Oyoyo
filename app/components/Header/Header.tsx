"use client";
import React, { useEffect, useState } from "react";
import "./Header.scss";
import Link from "next/link";
import { navContent } from "../assets/data/Components";
import Hamburger from "../assets/images/icon-hamburger.svg";
import Close from "../assets/images/icon-close.svg";
import Logo from "../assets/images/Logo.png";
import Image from "next/image";

const Header = () => {
	const [scroll, setScroll] = useState(false);
	const [activeMenu, setActiveMenu] = useState("");
	const handleMenu = () => {
		setActiveMenu("active");
	};
	const handleClose = () => {
		setActiveMenu("");
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	return (
		<div className={`header ${scroll ? "scroll" : ""}`}>
			<div className="container">
				<div className="logo">
					<Image src={Logo} alt="Logo" />
				</div>
				<ul className="navContent">
					{navContent.map((item, index) => (
						<Link key={index} href={item.url}>
							{item.title}
						</Link>
					))}
				</ul>
				<Link href="contact" className="getInTouch">
					Get in touch
				</Link>

				{/* MOBILE MENU */}
				<div className={`mobileMenu ${activeMenu}`}>
					<div className="hamburger" onClick={handleMenu}>
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="18">
							<g fill="#fff" fill-rule="evenodd">
								<path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
							</g>
						</svg>
					</div>
					<Image src={Close} alt="Close" className="close" onClick={handleClose} />
					<div className="navContent">
						{navContent.map((item, index) => {
							return (
								<Link key={index} href={item.url}>
									{item.title}
								</Link>
							);
						})}
						<Link href="/contact" className="getInTouchMobile">
							Get in touch
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
