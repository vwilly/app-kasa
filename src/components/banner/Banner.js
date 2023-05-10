
import './banner.css'

function Banner(props) {
    return (

    <div className='banner'>
         <img src={props.image} alt={props.alt} className={props.className}/>
         {props.children}
     </div>   
    )
}

export default Banner
