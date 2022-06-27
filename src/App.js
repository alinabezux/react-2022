import React from 'react';
import RickandMorty from "./components/RickandMorty";

function App() {
    return (
        <div>
            <RickandMorty
                id={270}
                name={'Prince Nebulon'}
                status={'Dead'}
                species={'Alien'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/270.jpeg'}
                />
            <RickandMorty
                id={322}
                name={'Simple Rick'}
                status={'Dead'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/322.jpeg'}
            />
            <RickandMorty
                id={500}
                name={'Fascist Mr. President'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/500.jpeg'}
            />
            <RickandMorty
                id={628}
                name={'Beth Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/628.jpeg'}
            />
            <RickandMorty
                id={631}
                name={'Rick Sanchez'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/631.jpeg'}
            />
            <RickandMorty
                id={779}
                name={'Young Memory Rick'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/779.jpeg'}
            />

        </div>
    );
}

export default App;