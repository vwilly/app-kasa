import './carrousel.css'
import ArrowRight from '../../assets/chevron_carousel_right.png'
import ArrowLeft from '../../assets/chevron_carousel_left.png'
import { useState } from 'react'

export default function Carrousel({pictures}) {
	const [index, setCurrentIndex] = useState(0)
	const nextPicture = () => {
		setCurrentIndex(index === pictures.length - 1 ? 0 : index + 1);
	}

	const lastPicture = () => {
		setCurrentIndex(index - 1)
        if(index === 0)
            setCurrentIndex(pictures.length - 1)
	}

	return (
        <section style={{backgroundImage : `url(${pictures[index]})`}} className="carrousel">
			{pictures.length > 1 && 
                <>
					<img onClick={lastPicture} className='arrow_carousel arrow_left'  src={ArrowLeft}  alt="flèche gauche" />
					<img onClick={nextPicture} className='arrow_carousel arrow_right' src={ArrowRight}  alt="flèche droite"/>
					<p className='counter'>{index + 1} / {pictures.length}</p>
				</>
			}
        </section>
	)
}


