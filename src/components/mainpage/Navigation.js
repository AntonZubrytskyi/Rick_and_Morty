import React from 'react';
import './Navigation.css'
import {Link} from 'react-router-dom'

function Navigation(){
    return(
        <nav>
            <ul>
                <li>
                    <Link  to='/characters' style={{ textDecoration: 'none', color:'black'}} >Characters</Link>
                </li>
                <li>
                    <Link to='/episodes' style={{ textDecoration: 'none',color:'black' }}> Episodes</Link>
                </li>
                <li>
                    <Link to='/locations' style={{ textDecoration: 'none',color:'black' }}>Locations</Link>
                </li>
                <li>
                    <Link to='/watchlist' style={{ textDecoration: 'none',color:'black' }}>My watch list</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;
