import React, {useState} from 'react';
import './WatchList.css'
import WatchListItems from "./WatchListItems";
import WatchListForm from "./WatchListForm";

function WatchList() {

    const [list, setList] = useState([])

    const addList = (userInput) => {
        if(userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2,9),
                task: userInput,
                complete: false
            }
            setList([...list, newItem])
        }
    }

    const removeList = (id) => {
        setList([...list.filter((list) => list.id !== id)])
    }

    const ToggleList = (id) => {
        setList([
            ...list.map((list) =>
                list.id === id ? { ...list, complete: !list.complete } : {...list }
            )
        ])
    }

    return (
        <div className="List">
            <header>
                <h1>My watch list: {list.length}</h1>
            </header>
            <WatchListForm addList={addList} />
            {list.map((list) => {
                return (
                    <WatchListItems
                        list={list}
                        key={list.id}
                        toggleList={ToggleList}
                        removeList={removeList}
                    />
                )
            })}
        </div>
    );
}

export default WatchList;
