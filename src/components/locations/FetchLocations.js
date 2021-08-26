import React,{useEffect,useState} from 'react';
import MapLocations from "./MapLocations";

function FetchLocation(){
    const[locations, setLocations] = useState([])

    useEffect(() => {

        fetch('https://rickandmortyapi.com/api/location')
            .then(res => res.json())
            .then((data) => setLocations(data.results))
            .catch(error => { console.log(error) })
    }, [])

    return (
        <MapLocations locations={locations}/>
    )
}

export default FetchLocation;
