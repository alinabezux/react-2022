import React from 'react';

function Simpsons(props) {
    const {name, surname, age, info, photo} = props;
    return (
        <div>
            <h2>{name}</h2>
            <h2>{surname}</h2>
            <p>{age}</p>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>

    );
}

export default Simpsons;