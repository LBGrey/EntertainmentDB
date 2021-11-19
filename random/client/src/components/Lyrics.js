import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';
import '../Lyrics.css'

const Lyrics = (props) => {

    const {id} = useParams()

    const [track, setTrack] = useState({});
    const [lyrics, setLyrics] = useState({});


    useEffect(() => {
        axios.get(`http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${api_key}`)
            .then(res => {
                let lyrics = res.data.message.body.lyrics;
                setLyrics({ lyrics });
                return axios.get(
                    `http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${api_key}`
                    )
                })
            .then(res => {
                let track = res.data.message.body.track;
                console.log(res.data)
                setTrack({ track });
            })
            .catch(err => console.log(err))
    }, [props.track_id]);

    if (track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
        return <h1>Loading...</h1>;
    } else {
        return (
            <div className="wrap5">
                <div className="container">
                <Link to="/random/searchMusic" className="btn btn-dark btn-sm mb-4" style={{marginTop:"80px"}}>Go Back </Link>
                <div className="card">
                    <h5 className="card-header">
                        {track.track.track_name} by{" "}
                        <span className="text-secondary">{track.track.artist_name}</span>
                    </h5>
                    <div className="card-body">
                        <p className="card-text" style={{backgroundColor:"white"}}>{lyrics.lyrics.lyrics_body}</p>
                    </div>
                </div>
                    <ul className="list-group mt-3">
                    <li className="list-group-item">
                        <strong>Song Genre</strong>:{" "}
                        {track.track.primary_genres.music_genre_list.length === 0
                        ? "NO GENRE AVAILABLE"
                        : track.track.primary_genres.music_genre_list[0].music_genre
                            .music_genre_name}
                    </li>
                    <li className="list-group-item">
                        <strong>Explicit Words</strong>:{" "}
                        {track.track.explicit === 0 ? "No" : "Yes"}
                    </li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default Lyrics;