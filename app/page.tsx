import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/landing/About/About";
import Apps from "./components/landing/Apps/Apps";
import Hero from "./components/landing/Hero/Hero";
import Question from "./components/landing/Question/Question";

export default function Home() {
	return (
		<main>
			<Header />
			<Hero />
			<Apps />
			<About />
			<Question />
			<Footer />
		</main>
	);
}
