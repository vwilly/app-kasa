import './footer.css'
import Logo from '../../assets/logo_footer.png'


export default function Banner() {
	return (
		<footer  className="footer">
			<img className='logo-footer' src={Logo} alt='logo kasa fin' />
			<small className='info-footer'>© 2020 Kasa. All rights reserved</small>	
		</footer>
	)
}


