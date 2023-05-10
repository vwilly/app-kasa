import './navigation.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function navigation() {
    return <header className="Header">
        <Link to='/'> <h1 className='logo'><img src={Logo} alt="kasa location d'appartements"></img></h1> </Link>
        <nav className='navigation'>
            <Link to='/' className="accueil">Accueil</Link>
            <Link to='/About' className="a-propos">A Propos</Link>
        </nav>
        </header>
}

export default navigation