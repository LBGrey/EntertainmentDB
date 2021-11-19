import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import '../SearchEnt.css';
require('dotenv').config()
const API_KEY = process.env.REACT_APP_API_KEY

const SearchEnt = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    const {id} = useParams()


    const getData = (e) => {
        e.preventDefault()
        setLoading(true)
        let url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
        console.log(url)
        axios.get(url)
        .then(response => {
            console.log(response.data)
            setData(response.data.results);
            setLoading(false);
            setSearch("")
        })
        .catch(error => {
            setLoading(false);
            console.log("error", error);
        })
    }



    return (
        <div className="wrap2">
            <div className="dashboard2" style={{ marginLeft:"0px", marginTop:"50px", color:"white"}}>Search by: <strong>Movie</strong> Title, Actor, Director or <strong>TV Show</strong> Name, Actor, Network</div>
            <form class="d-flex" style={{marginTop:"20px"}} onSubmit={getData}>
                <input class="form-control" style={{width:"500px"}} type="search" placeholder="" aria-label="Search" onChange={ (e) => setSearch(e.target.value) } value={search}/>
                <button class="btn btn-outline-success" style={{marginLeft:"0px", backgroundColor:"white"}} type="submit">Search</button>
            </form>
            {
            data.map(movie => { 
                return ( 
            <div style={{display:"flex",marginTop:"30px", marginLeft:"500px"}}>
                <p hidden>{movie.poster_path}</p>
                {movie.poster_path ? 
                <Link to={`/random/details/${id}`}><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{height:"360px", marginTop:"10px"}}/></Link>
                :
                <img src={`https://image.tmdb.org/t/p/w500/${movie.profile_path}`} style={{height:"360px", marginTop:"10px"}}/>
                }
                <div style={{display:"inline"}}>
                    <p style={{fontSize:"30px", marginLeft:"60px", marginTop:"30px", color:"white"}}><strong>{movie.name}</strong></p>
                    <p style={{fontSize:"30px", marginLeft:"60px", marginTop:"5px", color:"white"}}><strong>{movie.known_for_department}</strong></p>
                        <p style={{fontSize:"35px", marginLeft:"20px", marginTop:"10px", color:"white"}}><strong>{movie.original_title}</strong></p>
                        <p style={{fontSize:"15px", marginLeft:"20px", marginTop:"5px", color:"white"}}><strong>{movie.release_date}</strong></p>
                        <p style={{fontSize:"15px", marginLeft:"20px", marginTop:"5px", width:"550px", color:"white"}}><strong>{movie.overview}</strong></p>
                </div>
            </div>)}
            )
            }
        </div>
    )
}

export default SearchEnt;
