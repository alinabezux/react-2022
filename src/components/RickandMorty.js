import React from 'react';

function RickandMorty(props) {
    const {id, name, status, species, gender, image} = props;
    return (
        <div>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image} alt = {name}/>
        </div>
    );
}

export default RickandMorty;