import React, { useState} from 'react'
import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import store from './store'

import ChooseArtists from './pages/HandleArtists/ChooseArtists'
import Leftnav from './Leftnav';
import TopNav from './TopNav';
import Player from './Player';
import Home from './pages/Home';

export  const musicData = []

export default function App(){
    const [data, setData] = useState();
    const [playing_song, setPlaying_song] = useState(0);
    const [status, setStatus] = useState(false);
    return (
        <div>
            <Router>
                <Leftnav />
                <TopNav />
                <Switch>
                    <Route exact to={`/`}>
                        <Home store={data} updateStore={setData} playing_song={setPlaying_song} setStatus={setStatus} />
                    </Route>
                </Switch>
                <Player 
                    store={data} 
                    playing_song={playing_song} 
                    setPlaying_song={setPlaying_song} 
                    status={status} 
                    setStatus={setStatus}
                />
            </Router>
            
        </div>
    )
}

render(<App />, document.getElementById('app'));