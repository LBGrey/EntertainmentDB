import React from 'react'

const Person = (props) => {
    return (
        <div className="column">
            <div className="card">
                {
                    props.image == null ? <img src={'http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'} alt="default image" style={{ width:"100%", height:"360px"}}/> : <img src={`https://image.tmdb.org/t/p/w185/${props.imageperson}.jpg`} alt="movie poster" style={{width:"100%", height:"360px"}} />
                }
            </div>
        </div>
    )
}

export default Person
