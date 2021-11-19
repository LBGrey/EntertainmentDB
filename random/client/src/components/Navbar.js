import React from 'react'
import {Link} from 'react-router-dom'
import '../Nav.css';

const Navbar = () => {



    return (
        <div className="wrap3">
            <nav className= "navbar navbar-expand-md fixed-top navbar-dark bg-dark">
                <div class="container-fixed">
                    <Link to={'/dashboard'} class="navbar-brand" href="#" style={{fontSize:"30px", marginLeft:"50px", color:"linen"}}>Entertainment DB</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            {/* <a class="nav-link active" style={{marginLeft:"20px"}} aria-current="page" href="#">Home</a> */}
                            </li>
                            <li class="nav-item">
                            {/* <a class="nav-link" href="#">Link</a> */}
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" style={{marginLeft:"20px", fontSize:"20px", color:"linen"}} href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menu
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li style={{textAlign:"center"}}><Link class="dropdown-item" to={'/dashboard'} style={{textDecoration:"none", color:"linen"}}>Home</Link></li>
                                <li style={{textAlign:"center"}}><Link class="dropdown-item" to={'/random/searchMusic'} style={{textDecoration:"none", color:"linen"}}>Search Music</Link></li>
                                <li style={{textAlign:"center"}}><Link class="dropdown-item" to={'/random/searchEnt'} style={{textDecoration:"none", color:"linen"}}>Search Entertainment</Link></li>
                                <li style={{textAlign:"center"}}><Link class="dropdown-item" to={'/favorites'} style={{textDecoration:"none", color:"linen"}}>My Favorites</Link></li>
                                {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                            </li>
                                {/* <li class="nav-item"><a class="nav-link">My Favorites</a></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
