import React,{useState,useEffect} from 'react';
import MapEpisodes from "./MapEpisodes";

function FetchEpisodes() {
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {

        fetch('https://rickandmortyapi.com/api/episode')
            .then(res => res.json())
            .then((data) => setEpisodes(data.results))
            .catch(error => { console.log(error) })
    }, [])

    return (
        <div>
            <MapEpisodes episodes={episodes}/>
        </div>
    )
}

export default FetchEpisodes;
