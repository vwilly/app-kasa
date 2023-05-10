import './accomodation.css'
import Header from '../../components/navigation/navigation'
import Footer from '../../components/footer/Footer'
import Tags from '../../components/tag/tags'
import Rate from '../../../rate/rate'
import Carrousel from '../../components/carrousel/Carrousel'
import Dropdown from '../../components/dropdown/Dropdown';
import { useParams } from "react-router-dom";
import Error from "../notFound/index";

  

export default function Accomodation(props) {
	let { id } = useParams();
    let data = props.datas.find((data) => data.id === id);
    if (!data) {
        return <Error />;
    }
	return (
        <div className='accomodation'>
			<Header />
			<Carrousel pictures={data.pictures}/>
			<div className="accomodation_header">
                    <div className="title-wrap">
                        <h2 className="title">{data.title}</h2>
                        <p className="location">
                            {data.location}
                        </p>
                        <Tags data={data.tags}/>
                    </div>
                    <div className="host-wrap">
                        <div className="host">
                            <p className="host-name">
                                {data.host.name}
                            </p>
                            <img
                                className="host-picture"
                                src={data.host.picture}
                                alt="avatar"
                            ></img>
                        </div>
                            <Rate value={data.rating} />
                    </div>
            </div>
			<div className="accomodation_collapse">
                <div className='dropdownAccomodation'>
			        <Dropdown  title={'Description'} content={data.description}/>	
                </div>
                <div className='dropdownAccomodation'>
			        <Dropdown  title={'Équipements'} content={data.equipments}/>
                </div>
			</div>
			<Footer />
		</div>
		
    )
}