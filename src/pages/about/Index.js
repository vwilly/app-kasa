import './about.css';
import Cover from '../../assets/about_cover.png'
import Header from "../../components/navigation/navigation";
import Content from "./Content";
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';

export default function Index() {



	return (
		<>
			<Header />
			<Banner 
			 className="banner-home"
			 image={Cover}
			alt="paysage montagne"
			/>
			<section className="about">
            <Content />
            </section>
			<Footer />
		</>
	)
}
