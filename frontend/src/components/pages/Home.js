import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import store from '../store'
import Playlists from './homepPage_comp/Playlists';


function Home(props){
    const handleStore = () => {
        props.updateStore(store);
        props.playing_song(0);
        props.setStatus(true);
    }
    const [row1_data, setRow1_data] = useState()
    const [row2_data, setRow2_data] = useState()
    const [row3_data, setRow3_data] = useState()
    const [row4_data, setRow4_data] = useState()

    useEffect(()=> {
        fetch('api/playlists_api')
        .then(res => res.json())
        .then(data => {
            setRow1_data(data);
        })
    }, [])

    return (
        <Container>
            <Playlists 
                data={row1_data} 
                type="playlist" 
                queu_playlist={props.queu_playlist} 
            />
            <Playlists data={row1_data} type="playlist" />
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
    margin-bottom: 100px;
    z-index: -1;
    display: block;
    padding-left: 10px;
    padding-right: 10px;
    p {
        color: #717171;
    }
`