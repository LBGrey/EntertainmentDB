import React, {useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import '../Dashboard.css'


const Dashboard = () => {
    

    return (

        <div className="bkimage">
            <h1 style={{textAlign:"center", paddingTop:"50px", color:"linen"}}>Find your favorites!</h1>
            <div style={{display:"flex", marginTop:"50px", justifyContent:"space-around", color:"#8b3b2e", fontWeight:"bold"}}>
                <h2>Looking for <Link style={{textDecoration:"none", color:"rgb(67 99 163)"}} to={`/random/searchMusic`}>music?</Link></h2>
                <h2>Looking for <Link style={{textDecoration:"none", color:"rgb(67 99 163)"}} to={`/random/searchEnt`}>entertainment?</Link></h2>
            </div>
        </div>

    )
}

export default Dashboard
