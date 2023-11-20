import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useState} from "react";
import './Productinfo.css';
import Reviews from "../Reviews/Reviews";

function Productinfo(){

    let {id} = useParams();
    let[product,setProduct]=useState({});

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response=>response.json())
            .then(json => setProduct(json))
    },[])

    const backtoallpr = useNavigate()
    function backtoallproducts(){
        backtoallpr('/main')
    }

    return(
        <div className="Productinfo">
            {
                product.id  ? <div><h2>{product.title}</h2>
                    <p>{product.price}</p>
                <img src={product.image}/>
                <p>{product.description}</p>
                    <button onClick={backtoallproducts}>back to all products</button></div> : <h3>Wait...</h3>
            }

            <Reviews/>
        </div>
    )
}

export default Productinfo;