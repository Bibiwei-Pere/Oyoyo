import React from "react";
import "./Apps.scss";
import Image from "next/image";
import Phone1 from "../../assets/images/Phone1.png";
import Phone2 from "../../assets/images/Phone2.jpg";
import GooglePlay from "../../assets/images/GooglePlay.png";
import Appstore from "../../assets/images/Appstore.png";
import Link from "next/link";

const Apps = () => {
	return (
		<section className="wrapper">
			<div className="apps">
				<div className="title">
					<h3>Our Apps</h3>
					<div className="yellow"></div>
				</div>
				<div className="container">
					<div className="wrapper1">
						<Image src={Phone1} alt="Phone" className="phone" />
						<h4>Oyoyo Event</h4>
						<p>Unleash the Future of Event Planning! Oyoyo Events, your ultimate event planning companion powered by cutting-edge AI technology. Oyoyo Events is an exclusive all-in-one event management platform designed to transform the way you plan and experience events. Say goodbye to the stress of event coordination and hello to seamless, unforgettable experiences!</p>
						<div>
							<Link href="#" className="btn">
								<Image src={GooglePlay} alt="GooglePlay" className="GooglePlay" />
							</Link>
						</div>
					</div>
					<div className="wrapper1">
						<Image src={Phone2} alt="Phone" className="phone" />
						<h4>Oyoyo Fashion</h4>
						<p>The African fashion has gone more expansive and much more appreciated, the fashion statement created by African designers. The beauty comes in natural prints and the exclusive graceful, appealing fashion styles that look impressive and also modern for all gender. Oyoyo app offers its users one-click access to professionals in tailoring in the industry. Another benefit you stand to gain is having your measurements digitally recorded and which helps tailors view your record on the go.</p>
						<div>
							<Link href="#" className="btn">
								<Image src={GooglePlay} alt="GooglePlay" className="GooglePlay" />
							</Link>
							<Link href="#" className="btn">
								<Image src={Appstore} alt="Appstore" className="Appstore" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Apps;
