import React, {useContext} from 'react'
import {Context} from '../context'
import Track from '../components/Track'

const Details = () => {

    const [state] = useContext(Context);
    const { track_list, heading } = state;


    if (track_list === undefined || track_list.length === 0) {
        return <h1>Loading...</h1>;
    } else {
    return (
        <div className="wrap4" style={{marginTop:"-25px"}}>
            <div className="container">
                <h3 className="text-center mb-4" style={{color:"brown", textShadow:"black 2px 1px 1px", fontSize:"50px"}}><strong>{heading}</strong></h3>
                <div className="row">
                    {track_list.map(item => (
                        <Track key={item.track.track_id} track={item.track}/>
                ))}
                </div>
            </div>
        </div>
    )
    }
}


export default Details;