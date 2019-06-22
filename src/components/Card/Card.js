import React from 'react'
import './style.css';

function Card(props) {

    return (
        <div className="col-3">
            <div className="card hoverable z-depth-1-half">
                <img className="card-img" src={props.imgUrl} alt={props.name} onClick={() => console.log("this is a nightmare")}/>
            </div>
        </div>

    )
 
}

export default Card;
