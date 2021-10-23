import React from 'react'
import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import ChooseArtists from './HandleArtists/ChooseArtists'
import Leftnav from './Leftnav';
import TopNav from './TopNav';
import Player from './Player';


export default function App(){
    return (
        <div>
            <Leftnav />
            <TopNav />
            {/* <h2>everytrhing</h2> */}
            <Player />
        </div>
    )
}

render(<App />, document.getElementById('app'));