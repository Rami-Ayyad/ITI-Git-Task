import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import "./movieCard.css"


const MovieCard = (props) => {

    let loader = useSelector((state)=>{
        return state.loader
    })
    
    return (
        <>  
                
                <div className="card">
                    <img src={props.imgPath}/>
                    <div className="container">
                        <h4><b>{props.title}</b></h4>
                        <p>Score : {props.score}</p>
                    </div>
                </div>
           
        </>
    );
}

export default MovieCard;