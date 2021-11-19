import React, {useState} from 'react';
import SearchEnt from './SearchEnt';

const MovieList = (props) => {

    const [data, setData] = props

    return (
        <div className="wrap">
            <div className="row">
                <div className="column">
                {
                data.map(movie => { 
                    return ( 
                <div style={{display:"flex", flexDirection:"row", marginTop:"30px", marginLeft:"400px"}}>
                    <p hidden>{movie.poster_path}</p>
                    {movie.poster_path ? 
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{height:"360px", marginTop:"10px"}}/>
                    :

                    <img src={`https://image.tmdb.org/t/p/w500/${movie.profile_path}`} style={{height:"360px", marginTop:"10px"}}/>
                }
                <p style={{fontSize:"35px", marginLeft:"60px", marginTop:"150px"}}>{movie.original_title}{movie.name}</p>
                </div>)}
                )
                }
                </div>
            </div>
        </div>
    )
}

export default MovieList
