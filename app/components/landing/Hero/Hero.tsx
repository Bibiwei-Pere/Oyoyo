import Image from "next/image";
import "./Hero.scss";
import React from "react";
import BackgroundImg from "../../assets/images/Background.png";

const Hero = () => {
	return (
		<section className="heroContainer">
			<div className="img">
				<Image src={BackgroundImg} alt="BackgroundImg" className="backgroundImg" />
			</div>
			<div className="hero">
				<span>Welcome to the</span>
				<h1>OYOYO UNIVERSE</h1>
			</div>
		</section>
	);
};

export default Hero;
