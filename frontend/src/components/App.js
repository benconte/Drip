import React, { useState} from 'react'
import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import store from './store'

import ChooseArtists from './HandleArtists/ChooseArtists'
import Leftnav from './Leftnav';
import TopNav from './TopNav';
import Player from './Player';
import Home from './home/Home';

export  const musicData = []

export default function App(){
    const [data, setData] = useState();
    const [playing_song, setPlaying_song] = useState(0);
    const [status, setStatus] = useState(false);
    return (
        <div>
            <Leftnav />
            <TopNav />
            <Home store={data} updateStore={setData} playing_song={setPlaying_song} setStatus={setStatus} />
            <Player 
                store={data} 
                playing_song={playing_song} 
                setPlaying_song={setPlaying_song} 
                status={status} 
                setStatus={setStatus}
            />
        </div>
    )
}

render(<App />, document.getElementById('app'));