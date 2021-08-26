import React, {useState} from 'react';
import './Characters.css';
import CharectersPopup from "./CharactersPopup";

function CharactersItem({character}){
    const [open, setOpen] = useState(false);

    const openPopup = (value) => {
        setOpen(value)
    };

    return(
        <>
            {open === true ? <CharectersPopup character={character} openPopup={openPopup}/> : null}
            <div className='card'  onClick={() => openPopup(true)}>
                <div><img className='characters-item-img'  src={character.image} alt='' /></div>
            </div>
        </>
    )
}

export default CharactersItem;
