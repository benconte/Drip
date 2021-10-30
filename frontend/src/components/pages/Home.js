import React from 'react'
import styled from 'styled-components'
import store from '../store'
import Playlists from './homepPage_comp/Playlists';


function Home(props){
    const handleStore = () => {
        props.updateStore(store);
        props.playing_song(0);
        props.setStatus(true);
    }
    return (
        <Container>
            <Playlists />
            <Playlists />
            <Playlists />
            <Playlists />
        </Container>
    )
}

export default Home;

const Container = styled.div`
    width: calc(100% - 240px);
    height: 100%;
    padding-top: 5rem;
    margin-left: 240px;
    margin-bottom: 50px;
    z-index: -1;
    
    p {
        color: #717171;
    }
`