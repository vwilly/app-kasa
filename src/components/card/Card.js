import './card.css'
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {

	return (
		<Link to={`/accomodation/${id}`} className="gallery_card">
			<img className='image-card' src={cover} alt={title} />
			<div  className='degrade'></div>
			<h3 className='title-card'>{title}</h3>	
		</Link>
	)
}
 