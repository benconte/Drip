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
import DisplayPlaylist from './pages/DisplayPlaylist'

export  const musicData = []

export default function App(){
    // array holding songs
    const [data, setData] = useState();
    // the current playing song
    const [playing_song, setPlaying_song] = useState(0);
    const [song_id, setSong_id] = useState(0);
    // the playing status. true/false
    const [status, setStatus] = useState(false);
    return (
        <div>
            <Router>
                <Leftnav />
                <TopNav />
                <Switch>
                    <Route exact path={`/`}>
                        <Home store={data} updateStore={setData} playing_song={setPlaying_song} setStatus={setStatus} />
                    </Route>
                    <Route path={`/playlist/:id`}>
                        <DisplayPlaylist 
                        store={data} 
                        updateStore={setData} 
                        playing_song={setPlaying_song} 
                        setSong_id={setSong_id}
                        setStatus={setStatus} />
                    </Route>
                </Switch>
                <Player 
                    store={data} 
                    playing_song={playing_song} 
                    song_id={song_id}
                    setSong_id={setSong_id}
                    setPlaying_song={setPlaying_song} 
                    status={status} 
                    setStatus={setStatus}
                />
            </Router>
            
        </div>
    )
}

render(<App />, document.getElementById('app'));