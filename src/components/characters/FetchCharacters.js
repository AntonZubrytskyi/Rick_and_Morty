import React,{useEffect,useState}from 'react';
import CharacterMap from "./CharacterMap";
import Pagination from "./Pagination";
import CharactersFilter from "./CharactersFilter";

function FetchCharacters(){

    const [characters, setCharacter] = useState([]);
    const [allCharacters, setAllCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage]=useState(8);

    useEffect(  ()=>{

        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then((data) => setCharacter(data.results))
            .catch(error => { console.log(error) });
    },[])

    const indexofLastPost= currentPage * charactersPerPage;
    const indexofFirstPost= indexofLastPost - charactersPerPage;
    const currentPosts = allCharacters.length === 0 ? characters.slice(indexofFirstPost,indexofLastPost) : allCharacters.slice(indexofFirstPost,indexofLastPost);
    const paginate= (pageNumber)=> setCurrentPage(pageNumber);

    return(
        <div>
            <CharactersFilter characters={characters} setAllCharacters={setAllCharacters} setCurrentPage={setCurrentPage}/>
            <CharacterMap characters={currentPosts}/>
            <Pagination
                charactersPerPage={charactersPerPage}
                totalCharacters={allCharacters.length === 0 ? characters.length : allCharacters.length}
                paginate={paginate}/>
        </div>
    )
}

export default FetchCharacters;
