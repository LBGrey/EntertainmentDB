import React from 'react'
import SearchEnt from './SearchEnt'

const MovieInfo = (props) => {


    return (
        <div className="container">
            <div className="row" onClick={props.closeMovieInfo} style={{cursor: "pointer", paddingTop: "50px"}}>
                <i className="fas fa-arrow-left"></i>
                <span style={{marginLeft:"10px"}}>Go Back</span>
            </div>
            <div className="row">
                { props.currentMovie.poster_path == null ? <img src={"http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt="default image" style={{width:"100%", height:"360px"}}/> 
                :  
                <img src={`https://image.tmdb.org/t/p/w500/${props.currentMovie.poster_path}`} alt="default image" style={{width:"100%", height:"360px"}}/>
                }
            </div>
            <div className="col s12 m8">
                <div className="info-container">
                    <p>{props.currentMovie.title}</p>
                    <p>{props.currentMovie.release_date}</p>
                    <p>{props.currentMovie.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;
