import React from "react";

import Navigation from "./Navigation";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Episodes from "../../components/episodes/Episodes";
import Locations from "../../components/locations/Locations";
import Characters from "../../components/characters/Characters";
import WatchList from "../../components/watchlist/WatchList";

function RouterPage() {
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route path='/characters' render={()=>{return <Characters/>}}/>
                <Route path='/episodes' render={()=>{return <Episodes/>}}/>
                <Route path='/locations' render={()=>{return <Locations/>}}/>
                <Route path='/watchlist' render={()=>{return <WatchList/>}}/>
            </Switch>
        </Router>
    );
}

export default RouterPage;
