import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from './display_Playlist_album/Header'
import Songs from './display_Playlist_album/Songs'

// props received
// props.updateStore(store);
// props.playing_song(0);
// props.setStatus(true);

function DisplayPlaylist(props){
    const { id } = useParams()
    const [playlist, setPlaylist] = useState()
    const [songs, setSongs] = useState()
    const [song_length, setSong_length] = useState()

    useEffect(() => {
        fetch("/api/getPlaylist_data/"+id)
        .then(res => res.json())
        .then(data => {
            console.log(data.playlist_id)
            setSong_length(data.songs.length);
            setPlaylist({
                id: data.playlist_id,
                name: data.playlist_name,
                img: data.playlist_img,
                authers: data.playlist_authers,
                playlist_likes: data.playlist_likes,
            });
            setSongs(data.songs);
        })
    }, [id])
    console.log(playlist)
    return (
        <Container>
            { playlist && (
                <Header playlist={playlist} song_length={song_length} />   
            )}

            { songs && <Songs 
                playlist={playlist} 
                songs={songs} 
                song_length={song_length}
                updateStore={props.updateStore}
                playingSong={props.playing_song}
                setSong_id={props.setSong_id}
                playingStatus={props.setStatus}
            /> }
        </Container>
    )
}

export default DisplayPlaylist;

const Container = styled.div`
    width: calc(100% - 240px);
    height: 100%;
    padding: 5rem 10px;
    margin-left: 240px;
    margin-bottom: 100px;
    z-index: -1;
    display: block;
`