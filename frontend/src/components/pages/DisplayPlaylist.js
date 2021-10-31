import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from './display_Playlist_album/Header'
import Songs from './display_Playlist_album/Songs'

function DisplayPlaylist(){
    const { id } = useParams()
    return (
        <Container>
            <Header id={id} />
            <Songs />
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