import React from 'react'
import styled from 'styled-components'
import AlbumIcon from '@material-ui/icons/Album';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom"

function Queue(props){
    const playSong = (i) => {
        props.setPlaying_song(i)
        if(props.status === false){
            props.setStatus(true)
        }
    }

    const pauseSong = () => {
        props.setStatus(false);
    }
    return (
        <Container>
            <header>
                <img src={`/media/${props.queu_playlist.img}`} alt="playlist-name" />
                <Wrap>
                    <span>{props.queu_playlist.name}</span>
                    <small>
                        { props.queu_playlist.authers.map((art, index) => {
                            return (
                                <label key={index}>
                                    <Link to={`/`}>
                                        {art}
                                    </Link>
                                    . 
                                </label>
                            )
                        })}
                    </small>
                </Wrap>
                <Icons>
                    {/* <MoreVertIcon /> */}
                    <KeyboardArrowDownIcon onClick={() => props.setShowQueue(false)} />
                </Icons>
            </header>
            <Songs>
                { props.store && props.store.map((song, index) => {
                    return (
                        <Song key={index}>
                            {props.store[props.playing_song].song_id === song.song_id? 
                                <SongInfo style={{color: "var(--green)", background: "#000"}}>
                                    <img src={`/media/${song.img}`} alt={song.name} />
                                    <Content>
                                        <b>{song.name}</b>
                                        <small>
                                            {
                                            song.authers !== []? 
                                                song.authers.length > 3? 
                                                    (song.authers.slice(0, 2).map((art, indx) => {
                                                        return (
                                                            <span key={indx}>
                                                                { indx === 1? (
                                                                    <span key={indx}>
                                                                        <Link to={`/`}>{art}</Link>
                                                                        {/* adding ... to the second artist */}
                                                                        ...
                                                                    </span>
                                                                ) : (
                                                                    <span key={indx}>
                                                                        <Link to={`/`}>{art} </Link> 
                                                                        .
                                                                    </span>
                                                                ) }
                                                                
                                                            </span>
                                                            )
                                                        }))
                                                : song.authers.map((art, indx) => {
                                                    return (
                                                        <span key={indx}>
                                                            <Link to={`/`}>{art}</Link> 
                                                            <b>. </b> 
                                                        </span>
                                                        )
                                                    }
                                                ) 
                                            : <span>{song.song_auther_written}</span> }
                                        </small>
                                        {/* <small><AlbumIcon /> The GOAT</small> */}
                                    </Content>
                                    <Icons>
                                        { props.isPlaying? 
                                            <PauseIcon onClick={() => pauseSong()} style={{color: "var(--green)"}} />
                                        : 
                                            <PlayArrowIcon onClick={() => playSong(index)} style={{color: "var(--green)"}} />
                                        }
                                    </Icons>
                                </SongInfo>
                            : 
                                <SongInfo>
                                    <img src={`/media/${song.img}`} alt={song.name} />
                                    <Content>
                                        <b>{song.name}</b>
                                        <small>
                                            {
                                            song.authers !== []? 
                                                song.authers.length > 3? 
                                                    (song.authers.slice(0, 2).map((art, indx) => {
                                                        return (
                                                            <span key={indx}>
                                                                { indx === 1? (
                                                                    <span key={indx}>
                                                                        <Link to={`/`}>{art}</Link>
                                                                        {/* adding ... to the second artist */}
                                                                        ...
                                                                    </span>
                                                                ) : (
                                                                    <span key={indx}>
                                                                        <Link to={`/`}>{art} </Link> 
                                                                        .
                                                                    </span>
                                                                ) }
                                                                
                                                            </span>
                                                            )
                                                        }))
                                                : song.authers.map((art, indx) => {
                                                    return (
                                                        <span key={indx}>
                                                            <Link to={`/`}>{art}</Link> 
                                                            <b>. </b> 
                                                        </span>
                                                        )
                                                    }
                                                ) 
                                            : <span>{song.song_auther_written}</span> }
                                        </small>
                                        {/* <small><AlbumIcon /> The GOAT</small> */}
                                    </Content>
                                    <Icons>
                                        <PlayArrowIcon onClick={() => playSong(index)} />
                                    </Icons>
                                </SongInfo>
                            }
                            
                        </Song>
                    )
                }) }
            </Songs>
        </Container>
    )
}

export default Queue;

const Container = styled.div`
    width: 300px;
    height: 23rem;
    background: #1b1b1b;
    position: absolute;
    top: -22rem;
    right: 10px;
    border: 2px solid rgba(249,249,249,.2);
    padding: 2px 2px;
    border-radius: 7px;

    header {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        background: #222;
        padding: 5px;

        img {
            width: 40px;
            height: 40px;
            margin-right: 5px;
        }

        svg {
            font-size: 2.5rem;
            cursor: pointer;

            &:hover {
                color: var(--green);
            }
        }
    }
`

const Wrap = styled.div`
    flex-grow: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
        font-weight: bold;
        font-size: 1.3rem;
        letter-spacing: .1rem;
        line-height: 1.5rem;
    }

    small {
        font-weight: 500;
        color: rgba(249,249,249,.6);
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        label {
            font-size: 1.1em;
            margin: 0;
            padding: 0;
            line-height: 1rem;
            margin-right: 10px;

            a {
                color: #555;
                font-size: 1.1em;
    
                &:hover {
                    color: var(--green);
                }
            }
            // small {
            //     font-size
            // }
        }
        
    }
`

const Songs = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 50px);
    overflow-x: hidden;
    overflow-y: auto;
`

const Song = styled.div`
    height: 60px;
    width: 100%;
    border-bottom: #333;
    border-bottom: 1px solid #333;
    margin-top: 5px;
    
    img {
        width: 50px;
        height: 50px;
        margin-right: 5px;
    }

    
`

const SongInfo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 5px;

    &:hover {
        background: #111;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;

    b {
        line-height: 0.8rem;
        font-size: 0.99rem;
        letter-spacing: 0.15rem;
    }

    // small {
    //     letter-spacing: 0.1rem;
    //     color: #707072;
    //     font-weight: 500;

    //     svg {
    //         font-size: 1rem;
    //     }
    // }

    small {
        font-size: 0.9rem;
        font-weight: 500;
        color: rgba(249,249,249,.6);

        a {
            color: #555;
            font-size: .9em;

            &:hover {
                color: var(--green);
            }
        }
    }
`


const Icons = styled.div`
    display: flex;
    align-items: center;

    svg {
        font-size: 2.5rem;
        cursor: pointer;

        &:hover {
            color: var(--green);
        }
    }
`