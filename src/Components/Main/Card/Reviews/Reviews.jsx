import {useState} from "react";
import './Reviews.css';
import Onereview from "./Onereview/Onereview";
function Reviews(){

    let[textarea, setText]=useState('')
    function textareaValuefunc(e){
        let textareaValue = e.currentTarget.value;
        setText(textareaValue);
    }

    let[name,setName]=useState('')
    function inputnameValuefunc(e){
        let inputname = e.currentTarget.value;
        setName(inputname);
    }


    let [title,setTitle]=useState('')

    function inputtitleValuefunc(e){
        let titlevalue = e.currentTarget.value;
        setTitle(titlevalue);
    }



    let[reviews, setReviews]=useState([

    ])

    function addnewreviewfunc(){
        let newreviewobj={
            title:title,
            username:name,
            body:textarea,
            date:new Date().toLocaleDateString()
        }
        setReviews([newreviewobj, ...reviews])

    }


    let[like,setLike]=useState(0)
    function likebuttonfunc(){
         setLike(like+1)
    }



    return(
        <div>
            <p>----------------------------</p>
            <button onClick={likebuttonfunc}>likes: {like}</button>
            {/*<p>{like}</p>*/}
            <h2><b>Your review</b></h2>
            <textarea onChange={textareaValuefunc}></textarea>
            <input type="text" onChange={inputnameValuefunc} placeholder="your name"></input>
            <input type="text" onChange={inputtitleValuefunc} placeholder="title"></input>
            <button onClick={addnewreviewfunc}>Add your review</button>
            <h3>Other reviews:</h3>
            <p>----------------------------</p>


            {
                reviews.map(el=><Onereview reviewsdata={el}/>)
            }
        </div>
    )
}

export default Reviews;