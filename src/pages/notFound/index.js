import './notFound.css'
import Header from '../../components/navigation/navigation'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'



export default function notFound() {
	return (
        <div >
			<Header />
			<main className='notFound'>
                <p className='error'>404</p>
                <p className='annonce'>Oups! La page que vous demandez n'existe pas.</p>
                <Link to='/' className="link">Retourner sur la page d’accueil </Link>
            </main>
			<Footer />
		</div>
    )
}