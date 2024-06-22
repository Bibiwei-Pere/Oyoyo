import React from "react";
import Header from "../components/Header/Header";
import Image from "next/image";
import Bg from "../components/assets/images/Footer2.jpg";

const Pricing = () => {
	return (
		<div className="page">
			<Header />
			<div className="background">
				<Image src={Bg} alt="Bg"></Image>
			</div>
			<h1>PRICING PAGE</h1>
		</div>
	);
};

export default Pricing;
