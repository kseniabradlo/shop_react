import './Main.css';
import {useEffect} from "react";
import {useState} from "react";
import Card from "./Card/Card";

function Main(){

    let [items,setItem]=useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/jewelery")
            .then(response=>response.json())
            .then(json=>setItem(json))
    },[])

    return(
        <div className="Main">
            {items.length > 0 ? items.map((el,key)=><Card key={el.id} itemsarroneel = {el}/>) : <h2>Loading...</h2>}
        </div>
    )
}

export default Main;