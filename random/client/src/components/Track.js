import React from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../context'

const Track = props => {

    const {track} = props;


    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm" style={{backgroundColor: "rgb(255, 255, 255, .7)"}}>
                <div className="card-body">
                    <h5><strong>{track.artist_name}</strong></h5>
                    <p className="card-text" style={{backgroundColor: "rgb(255, 255, 255, .4)", fontSize:"20px"}}>
                        <strong><i className="fas fa-play"></i>Track</strong> {track.track_name}
                        <br/>
                        <strong><i className="fas fa-compact-disc"></i>Album</strong> {track.album_name}
                    </p>
                    <Link to={`/lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right">View lyrics</i>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Track