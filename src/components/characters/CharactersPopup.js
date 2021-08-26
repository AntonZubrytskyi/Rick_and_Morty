import React from 'react';
import './Characters.css';

function CharectersPopup({character, openPopup}) {

    return(
        <>
            <div className='backgroundPopup' onClick={() => openPopup(false)}/>
            <div className='popupContainer'>
                <div className='popupContainerExitButton' onClick={() => openPopup(false)}>x</div>
                Rick and Morty
                <div><img className='img'  src={character.image} alt='' /></div>
                <div>
                    <h1>{character.name}</h1>
                    <ul>
                        <li>
                            <strong>Species:</strong> {character.species}
                        </li>
                        <li>
                            <strong>Status:</strong> {character.status}
                        </li>
                        <li>
                            <strong>Gender:</strong> {character.gender}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CharectersPopup;
