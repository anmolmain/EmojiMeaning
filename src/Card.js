import React from 'react'
import './Card.css'
const Card = (props) => {
    console.log(props);
    return (
        <div className="outerBox col-lg-2 col-md-4 col-sm-5 col-8">
            <p id='emoji'>{props.dataEmoji}</p>
            <p>{props.title}</p>
        </div>
    )
}

export default Card