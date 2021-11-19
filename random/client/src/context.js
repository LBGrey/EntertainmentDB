import React, {useState, useEffect} from "react";
import axios from 'axios';


export const Context = React.createContext() 

export function ContextController({children}) {
    let initialState = { 
        track_list: [],
        heading: "Top 10 Tracks"
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        axios
        .get(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=e8d1c3a03db010a0f394a19effb5ddab`
        )
        .then(res => {
            console.log(res.data);
            setState({track_list: res.data.message.body.track_list})
        })
        .catch(err => console.log(err));
    }, []);


    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
        );
    }