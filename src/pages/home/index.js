import './home.css'
import Header from '../../components/navigation/navigation'
import Banner from '../../components/banner/Banner'
import Gallery from '../../components/gallery/Gallery'
import Footer from '../../components/footer/Footer'
import Cover from '../../assets/cover.png'

export default function Home() {
	return (
		<div className='home'>
			<Header />
            <Banner
                className="banner-home"
                image={Cover}
               alt="paysage falaise"	
            >
			<h2 className='titleHome'>Chez vous, partout et ailleurs</h2>
			</Banner>
			<Gallery />
			<Footer />
			
		</div>
	)
}
