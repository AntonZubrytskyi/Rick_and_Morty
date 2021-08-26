import React from 'react';
import CharactersItem from "./CharactersItem";

function CharacterMap({characters}){

    return(
        <section className='cards'>
            {
                characters.map(character=>
                    (<CharactersItem key={character.id} character={character} />)
                )
            }
        </section>
    )
}

export default CharacterMap;
