import React from 'react'

const Professor = (props) => {
    return (
        <div className='professor'>
            <img src={props.image} alt="Professor Image"/>
            <h2>{props.name}</h2>
            <h1>Rating: {props.rating}</h1>
            <a href={props.link}>
                <button>View Rate My Professor</button>
            </a>
        </div>
    )
}

export default Professor