import React, {useState, useEffect} from 'react';
import axios from "axios";

const Search = () => {

    const [search, setSearch] = useState("pune")
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    {
        data.map(movie => {return <p>{movie.original_title}</p>})

        }

        {
            <MovieList movies={data.results} />

            }


    // const options = {
    //     method: 'GET',
    //     url: 'https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/',
    //     headers: {
    //         'content-type': 'application/json',
    //         'x-rapidapi-host': 'ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com',
    //         'x-rapidapi-key': '41a3f9c7a0msh0d159e2ac7cdb26p14e602jsna0325e11b02b'
    //     }
    //     };
    //     axios.request(options).then(function (response) {
    //         console.log(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });



    //     axios.get("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/")
    //     .then(response => {
    //         setData(response.data);
    //         setLoading(false);
    //     })
    //     .catch(error => {
    //         setLoading(false);
    //         console.log("error", error);
    //     })



    return (
        <div>
            
        </div>
    )
}

                    {/* <div className="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Search by...
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Movie | TV Show | Quote | Actor</a></li>
                            <li><a class="dropdown-item" href="#">Artist | Song | Lyrics</a></li>
                        </ul>
                    </div> */}

export default Search



            {/* <div>

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
            </div> */}



            <div className="dashboard" style={{marginTop:"60px"}}>
            {currentMovie == null ? 
            <div>
                <p style={{marginLeft:"5px"}}>Search by: <strong>Movie</strong> Title, Actor, Director or <strong>TV Show</strong> Name, Actor, Network</p>
                <form class="d-flex" style={{marginTop:"20px", marginLeft:"370px"}} onSubmit={getData}>
                    <input class="form-control" style={{width:"500px"}} type="search" placeholder="" aria-label="Search" onChange={ (e) => setSearch(e.target.value) } value={search}/>
                    <button class="btn btn-outline-success" style={{marginLeft:"0px"}} type="submit">Search</button>
                </form>
                <MovieList viewMovieInfo={viewMovieInfo}/>
            </div>
            :
                <MovieInfo currentMovie={currentMovie} closeMovieInfo={closeMovieInfo}/> 
            }   
        </div>


let url = `https://api.themoviedb.org/3/search/multi?api_key=c26fd95764257ec41d7cbe3379f7b145&language=en-US&query=${search}&page=1&include_adult=false`
        // `https://api.themoviedb.org/3/search/movie?api_key=c26fd95764257ec41d7cbe3379f7b145&language=en-US&query=${search}&page=1&include_adult=false`


        axios.get(`http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=e8d1c3a03db010a0f394a19effb5ddab`)

        `http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=e8d1c3a03db010a0f394a19effb5ddab`


        .get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${userInput}&page_size=20&page=1&s_track_rating=desc&apikey=e8d1c3a03db010a0f394a19effb5ddab`)
