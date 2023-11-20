import './Card.css';
import {useNavigate} from "react-router-dom";

function Card(props){
    const moreinforoute = useNavigate();

    function showMore(){
        moreinforoute(`/moreinfo/${props.itemsarroneel.id}`)
    }
    return(
        <div className="Card">
            <h2>{props.itemsarroneel.title}</h2>
            <p>{props.itemsarroneel.price}</p>
            <img src={props.itemsarroneel.image}/>
            <button onClick={showMore}>show more</button>
        </div>
)
}

export default Card;