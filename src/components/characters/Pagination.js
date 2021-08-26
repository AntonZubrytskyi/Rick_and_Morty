import React from 'react';
import './Characters.css';

function Pagination({charactersPerPage, totalCharacters, paginate}){

    const pageNumbers=[];

    for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <div className='paginate'>
            <nav>
                <ul>
                    {pageNumbers.map(number=>(
                        <li key={number}>
                            <a className='paginateItem' onClick={()=> paginate(number)} >{number}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;
