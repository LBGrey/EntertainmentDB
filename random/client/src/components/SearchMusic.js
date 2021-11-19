import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {Context} from '../context'
import '../SearchMusic.css'

const SearchMusic = () => {
    const [state, setState] = useContext(Context);
    const [userInput, setUserInput] = useState("");
    const [track, setTrack] = useState('');

    useEffect(() => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${userInput}&page_size=20&page=1&s_track_rating=desc&apikey=${api_key}`)
            .then(res => {
                let track_list = res.data.message.body.track_list;
                setState({ track_list: track_list, heading: "Search Results" });
                
            })
            .catch(err => console.log(err));
        }, [track]);

        const findTrack = e => {
        e.preventDefault();
        setTrack(userInput);
        };


    return (
        <div className="wrap4">
            <div className="container">
                <div className="card card-body mb-4 p-4" style={{marginTop:"100px", backgroundColor: "rgb(94, 110, 161, .7"}} >
                    <h1 className="display-4 text-center" style={{fontSize:"65px"}}>
                    <i className="fas fa-music" /><strong> Search Music </strong></h1>
                    <p className="black text-center" style={{backgroundColor: "rgb(94, 110, 161, .1", fontSize:"25px"}}><strong>Search Artist, Song, Album, Lyrics</strong></p>
                    <form onSubmit={findTrack}>
                        <div className="form-group" style={{display:"flex"}}>
                        <input
                            type="text"
                            style={{width:"1050px"}}
                            className="form-control form-control-lg"
                            placeholder="Search..."
                            name="userInput"
                            value={userInput}
                            onChange={ (e) => setUserInput(e.target.value)}
                        />
                        </div>
                        <button className="btn btn-light btn-lg btn-block mb-6" type="submit">
                        Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
    };

export default SearchMusic