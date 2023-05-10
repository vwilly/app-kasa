import './rate.css';
import greystar from '../../assets/grey_star.png';
import redstar from '../../assets/red_star.png';


export default function Rating(props) {

    const value = props.value;
    const range = [1, 2, 3, 4, 5];

    return (
        <div className='Rate'>
            {range.map((rangeElem, index) =>
                value >= rangeElem ? (
                    <span className="star" key={`${rangeElem}-${index}`}>
                        <img src = {redstar} alt = 'star'/>
                    </span>
                ) : (
                    <span className="star--empty" key={`${rangeElem}-${index}`}>
                        <img src = {greystar} alt = 'no-star'/>
                    </span>
                )
            )}
        </div>
    )
  }