import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from './display_Playlist_album/Header'
import Songs from './display_Playlist_album/Songs'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function DisplayPlaylist(props){
    const { id } = useParams()
    const [playlist, setPlaylist] = useState()
    const [songs, setSongs] = useState()
    const [song_length, setSong_length] = useState()

    useEffect(() => {
        fetch("/api/getPlaylist_data/"+id)
        .then(res => res.json())
        .then(data => {
            console.log(data)
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
    console.log(songs)
    return (
        <Container>
            { playlist && (
                <Header playlist={playlist} song_length={song_length} />   
            )}

            { songs ? <Songs 
                songs={songs} 
                song_length={song_length} 
                setStore={props.setData}
                setPlaying_song={props.setPlaying_song}
                setStatus={props.setStatus}
            />: (
                <Stack spacing={1}>
                    <Skeleton variant="text" />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={210} height={118} />
                </Stack>
            )}
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