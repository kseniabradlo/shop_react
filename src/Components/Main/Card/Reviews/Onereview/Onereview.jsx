import './Onereview.css'
function Onereview(props){
    return(
        <div className="onereview">
            <p>{props.reviewsdata.title}</p>
            <p>{props.reviewsdata.body}</p>
            <p>{props.reviewsdata.username}</p>
            <p>{props.reviewsdata.date}</p>
        </div>
    )
}

export default Onereview;