import React from 'react'
import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import ChooseArtists from './HandleArtists/ChooseArtists'
import Leftnav from './Leftnav';

export default function App(){
    return (
        <div>
            <Leftnav />
            {/* <h2>top-nav</h2>
            <h2>everytrhing</h2>
            <h2>player</h2> */}
        </div>
    )
}

render(<App />, document.getElementById('app'));