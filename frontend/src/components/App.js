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
import styled from 'styled-components'
import Lyrics from './Lyrics';

export  const musicData = []

export default function App(){
    const [data, setData] = useState();
    const [queu_playlist, setQueu_playlist] = useState();
    const [playing_song, setPlaying_song] = useState(0);
    const [isPlaying, setIs_playing] = useState(false);
    const [status, setStatus] = useState(false);
    const [show_lyrics_queu, setShow_lyrics_queu] = useState(false);
    const [type, setType] = useState("lyrics");

    return (
        <div stype={{overflowX: "hidden", overflowY: "auto"}}>
            <Router>
                <Leftnav />
                <TopNav />
                {show_lyrics_queu === false && 
                <Switch>
                    <Route exact path={`/`}>
                        <Home 
                            store={data} 
                            updateStore={setData} 
                            playing_song={playing_song} 
                            setPlaying_song={setPlaying_song} 
                            status={status} 
                            setStatus={setStatus} 
                            queu_playlist={queu_playlist}
                            setQueu_playlist={setQueu_playlist}
                            isPlaying={isPlaying}
                            setIs_playing={setIs_playing}
                        />
                    </Route>
                    <Route path={`/playlist/:id`}>
                        <DisplayPlaylist 
                            data={data}
                            setData={setData} 
                            playing_song={playing_song} 
                            setPlaying_song={setPlaying_song} 
                            status={status} 
                            setStatus={setStatus} 
                            setType={setType}
                            setShow_lyrics_queu={setShow_lyrics_queu}
                            queu_playlist={queu_playlist}
                            setQueu_playlist={setQueu_playlist}
                            isPlaying={isPlaying}
                            setIs_playing={setIs_playing}
                        />
                    </Route>
                </Switch>
                }
                { data && 
                    (<Lyrics
                        type={type} 
                        show_lyrics_queu={show_lyrics_queu}
                        setShow_lyrics_queu={setShow_lyrics_queu}
                        song={data[playing_song]}
                    />)
                }
                <Player 
                    store={data} 
                    setStore={setData}
                    queu_playlist={queu_playlist}
                    playing_song={playing_song} 
                    setPlaying_song={setPlaying_song} 
                    status={status} 
                    setStatus={setStatus}
                    isPlaying={isPlaying}
                    setIs_playing={setIs_playing}
                    show_lyrics_queu={show_lyrics_queu}
                    setShow_lyrics_queu={setShow_lyrics_queu}
                    />
            </Router>
            
        </div>
    )
}

render(<App />, document.getElementById('app'));