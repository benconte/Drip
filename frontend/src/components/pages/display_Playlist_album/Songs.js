import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import store from '../../store';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const styles = {
    table: {
        width: "100%", 
        background: "transparent",
        color: '#eee'
    },
    row: {
        color: "var(--green)"
    }
    
}

const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

const playNext = (arr, pos, index) => {
    arr.splice(pos, 0, arr[index])
    return arr
}

function Songs(props){
    const [dropdown, setDropdown] = useState(false);
    const [dropdownId, setDropdownId] = useState(false);
    const [playingMode, setPlayingMode] = useState('listen');
    const [playingMode_dropdown, setPlayingMode_dropdown] = useState(false);

    const playShuffledPlaylist = () => {
        props.setStore(shuffle(props.songs))
        props.setPlaying_song(0)
        props.setStatus(true)
    }

    const handle_PlayNext = (pos, index) => {
        playNext(props.songs, pos + 1, index)
        props.songs.splice(index + 1, 1);
        setDropdown(false);
        // props.setStore(shuffle(props.songs))
    }   

    const handlePlaying = mode => {
        if(mode === "shuffle"){
            setPlayingMode(mode);
            playShuffledPlaylist();
        }
    }

    const playSong = (i) => {
        props.setQueu_playlist(props.playlist);
        props.setStore(props.songs)
        props.setPlaying_song(i)
        props.setStatus(true)
        // props.setIs_playing(true)
    }

    const pauseSong = () => {
        props.setStatus(false);
    }

    const showLyrics = (i) => {
        if(props.queu_playlist){
            if(props.queu_playlist.id === props.playlist.id){
                if(props.data[props.playing_song].song_id === props.songs[i].song_id){
                    props.setShow_lyrics_queu(true);
                }else {
                    props.setShow_lyrics_queu(true);
                    playSong(i);
                }
            }else {
                props.setQueu_playlist(props.playlist);
                props.setShow_lyrics_queu(true);
                playSong(i);
            }
        }else {
            props.setQueu_playlist(props.playlist);
            props.setShow_lyrics_queu(true);
            playSong(i);
        } 
    }
    return (
        <Container>
            <header>
                {/* this is the playing mode */}
                <div>
                    <span>{playingMode}</span>
                    <button style={{background: playingMode_dropdown&&'rgba(14, 64, 32, 0.82)'}}><KeyboardArrowDownIcon onClick={() => setPlayingMode_dropdown(!playingMode_dropdown)} /></button>
                    {playingMode_dropdown&& 
                        <ul>
                            <li>Listen</li>
                            <li onClick={() => handlePlaying('shuffle')}>shuffle</li>
                            <li>pause</li>
                        </ul>
                    }
                </div> 
                {/* <FontAwesomeIcon icon={faRandom} className="shuffle" onClick={() => playShuffledPlaylist()} /> */}
                <MoreHorizIcon className="more" />
            </header>
            <TableContainer component={Paper} style={styles.table}>
                <Table sx={{ minWidth: 450 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>
                            <Header>#</Header>
                        </TableCell>
                        <TableCell>
                            <Header>Name</Header>
                        </TableCell>
                        <TableCell>
                            <Header>ALbum</Header>
                        </TableCell>
                        <TableCell>
                            <Header>Lyrics</Header>
                        </TableCell>
                        <TableCell>
                            <Header>Like</Header>
                        </TableCell>
                        <TableCell>
                            <Header>Total Likes</Header>
                        </TableCell>
                        <TableCell>
                            <Header>Length</Header>
                        </TableCell>
                        <TableCell>
                            <Header>more</Header>
                        </TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.songs.map((row, index) => {
                        return(
                            <React.Fragment key={index}>
                                { 
                                props.data && props.queu_playlist === props.playlist && row.song_id === props.data[props.playing_song].song_id ? 
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className="playing">
                                    <TableCell component="th" scope="row">
                                        <Cell>
                                            <img src={'/media/'+row.img} className="song-img" alt={row.name} style={{width: "3rem", height: "3rem"}} />
                                            <GraphicEqIcon className="equalizer" />
                                            {props.isPlaying? 
                                                <PauseIcon className="play-status" onClick={() => pauseSong()} />
                                            : 
                                                <PlayArrowIcon className="play-status" onClick={() => playSong(index)} />
                                            }
                                        </Cell>
                                    </TableCell>
                                    <TableCell align="left" style={{color: "var(--green)", fontSize: "1rem"}}>
                                        <Cell>
                                            <span style={{color: 'var(--green)'}}>{row.name}</span>
                                            <small>
                                                {
                                                row.authers !== []? 
                                                    row.authers.length > 3? 
                                                        (row.authers.slice(0, 2).map((art, indx) => {
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
                                                    : row.authers.map((art, indx) => {
                                                        return (
                                                            <span key={indx}>
                                                                <Link to={`/`}>{art}</Link> 
                                                                <b>. </b> 
                                                            </span>
                                                            )
                                                        }
                                                    ) 
                                                : <span>{row.song_auther_written}</span> }
                                            </small>
                                        </Cell>
                                        
                                    </TableCell>
                                    <TableCell align="left">
                                        <Cell>
                                            <Wrap>
                                                <span>{row.album === '-'? '-' : (
                                                    <Link to={`/album`} style={{color: 'var(--green)'}}>{row.album}</Link>
                                                )}</span>
                                            </Wrap>
                                        </Cell>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Cell>
                                            <Wrap>
                                                <MicExternalOnIcon style={{color: 'var(--green)'}} onClick={() => showLyrics(index)} />       
                                            </Wrap>
                                        </Cell>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Cell>
                                            <Wrap>
                                                <FavoriteBorderIcon style={{color: 'var(--green)'}} />
                                            </Wrap>
                                        </Cell>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Cell style={{color: 'var(--green)'}}>{row.total_likes}</Cell>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Cell style={{color: 'var(--green)'}}>3.12</Cell> 
                                    </TableCell>
                                    <TableCell align="left">
                                        <Cell>
                                            <Wrap>
                                                <MoreVertIcon onClick={() => {
                                                    setDropdown(!dropdown)
                                                    setDropdownId(row.song_id)
                                                }} />
                                            </Wrap> 
                                            {dropdownId === row.song_id && dropdown && 
                                                <Dropdown dropdown={dropdown}>
                                                    <Link to={`/`}>add to favorites</Link>
                                                    <Link to={`/`}>add to playlist</Link>
                                                    <hr />
                                                    <Link to={`/`}>share</Link>
                                                </Dropdown>
                                            }
                                        </Cell>
                                    </TableCell>
                                </TableRow>
                                :
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className="not-playing">
                                    <TableCell component="th" scope="row">
                                        <Cell>
                                            <img src={'/media/'+row.img} className="song-img" alt={row.name} style={{width: "3rem", height: "3rem"}} />
                                            <PlayArrowIcon className="play-icon" onClick={() => playSong(index)} />
                                        </Cell>
                                    </TableCell>
                                    <TableCell align="left"style={{color: "var(--green)", fontSize: "1rem"}}>
                                        <Cell>
                                            <span>{row.name}</span>
                                            <small>
                                                {
                                                row.authers !== null? 
                                                    row.authers.length > 3? 
                                                        (row.authers.slice(0, 2).map((art, indx) => {
                                                            return (
                                                                <span key={indx}>
                                                                    { indx === 1? (
                                                                        <span key={indx}>
                                                                            <Link to={`/`}>{art}</Link>
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
                                                    : row.authers.map((art, indx) => {
                                                        return (
                                                            <span key={indx}>
                                                                <Link to={`/`}>{art}</Link> 
                                                                <b>. </b> 
                                                            </span>
                                                            )
                                                        }
                                                    ) 
                                                : row.song_auther_written }
                                            </small>
                                        </Cell>
                                        
                                    </TableCell>
                                    <TableCell align="left">
                                        <Cell>
                                            <Wrap>
                                                <span>{row.album === '-'? '-' : (
                                                    <Link to={`/album`}>{row.album}</Link>
                                                )}</span>
                                            </Wrap>
                                        </Cell>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Cell>
                                            <Wrap>
                                                <MicExternalOnIcon onClick={() => showLyrics(index)} />       
                                            </Wrap>
                                        </Cell>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Cell>
                                            <Wrap>
                                                <FavoriteBorderIcon />
                                            </Wrap>
                                        </Cell>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Cell>{row.total_likes}</Cell>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Cell>3.12</Cell>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Cell>
                                            <Wrap>
                                                <MoreVertIcon onClick={() => {
                                                    setDropdown(!dropdown)
                                                    setDropdownId(row.song_id)
                                                }} />
                                            </Wrap> 
                                            {dropdownId === row.song_id && dropdown && 
                                                <Dropdown dropdown={dropdown}>
                                                    <span onClick={() => handle_PlayNext(props.playing_song, index)}>Play next</span>
                                                    <Link to={`/`}>add to favorites</Link>
                                                    <Link to={`/`}>add to playlist</Link>
                                                    <hr />
                                                    <Link to={`/`}>share</Link>
                                                </Dropdown>
                                            }
                                            
                                        </Cell>
                                    </TableCell>
                                </TableRow>
                                }
                            
                            </React.Fragment>
                        )}
                        )
                    }
                    </TableBody> 
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Songs

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;

    header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        position: relative;

        div {
            width: 9rem;
            height: 2.5rem;
            padding: 6px 5px 6px 5px;
            border: none;
            background: var(--green);
            border-radius: 3px;
            cursor: pointer;
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                color: #fff;
                font-weight: 600;
                letter-spacing: .2rem;
                flex-grow: 1;
            }

            button {
                background: transparent;
                border: none;
                color: #eee;
                margin-left: 15px;
                outline: none;

                svg {
                    font-size: 2rem;
                }
            }
            ul {
                position: absolute;
                top: 2.6rem;
                left: 0;
                background: #222;
                width: 9rem;
                height: auto;
                margin: 0;
                list-style: none;
                z-index: 5;

                li {
                    height: 2rem;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    padding: 0 10px;
                    color: #eee;
                    border-bottom: 1px solid #444;
                    font-weight: 700;

                    &:hover {
                        background: #333;
                        cursor: pointer;
                    }
                }
                
            }

            &:hover {
                background: #3aa861;

                button {
                    background: rgba(14, 64, 32, 0.82);
                }
            }
        }

        .shuffle {
            font-size: 2.3rem;
            border: 1px solid #464646c4;
            color: #eee;
            cursor: pointer;
            padding: 5px;
            margin-right: 10px;

            &:hover {
                border: 1px solid #eee;
            }
        }

        .more {
            font-size: 2.3rem;
            border: 1px solid #464646c4;
            color: #eee;
            cursor: pointer;

            &:hover {
                border: 1px solid #eee;
            }
        }
    }

    .playing {
        background: #060606;

        .song-img {
            display: none;
        }

        .play-status {
            display: none;
        }

        .equalizer {
            width: 3rem;
            height: 3rem;
            cursor: pointer;
            color: var(--green);
        }
    }

    table {
        height: 100%;
        width: 100%;
    }

    th {
        border-color: #56565670;
    }

    td {
        border-color: #56565670;
    }

    .playing:hover {
        .song-img {
            display: none;
        }

        .equalizer {
            display: none;
        }

        .play-status {
            display: block;
            width: 3rem;
            height: 3rem;
            cursor: pointer;
            color: var(--green);
        }
    }

    .not-playing {
        .song-img {
            display: block;
        }
        .play-icon {
            display: none;
            width: 3rem;
            height: 3rem;
            cursor: pointer;
        }
    }

    .not-playing:hover {
        background: rgba(51,51,51,0.45);

        .song-img {
            display: none;
        }

        .play-icon {
            display: block;
        }

    }
`

const Header = styled.div`
    color: #eee;
`

const Cell = styled.div`
    color: #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
 
    small {
        a {
            color: var(--dark-grey);
            font-size: 0.9rem;

            &:hover {
                color: var(--green);
            }
        }
    }
`

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
    color: #eee;
    font-size: 1rem;   

    a {
        color: #eee;
    }
    &:hover {
        color: var(--green);
        a {
            color: var(--green);
        }
    }
`

const Dropdown = styled.div`
    position: absolute;
    top: 2rem;
    right: 1rem;
    width: 150px;
    height: auto;
    padding: 5px;
    background: rgb(51, 51, 51);
    display: ${dropdown => dropdown? 'flex': 'none'};
    flex-direction: column;
    justify-content: center;
    z-index: 1;

    span {
        color: #bbb;
        font-weight: 500;
        height: 30px;
        font-size: 1rem;
        margin: 3px 0;
        display: flex;
        padding: 0 5px;
        align-items: center;

        &:hover {
            color: #eee;
            background: rgb(45,45,45);
            cursor: pointer;
        }
    }

    a {
        color: #bbb;
        font-weight: 500;
        height: 30px;
        font-size: 1rem;
        margin: 3px 0;
        display: flex;
        padding: 0 5px;
        align-items: center;

        &:hover {
            color: #eee;
            background: rgb(45,45,45);
            cursor: pointer;
            text-decoration: none;
        }
    }

    hr {
        margin: 0;
        border: 0;
        border-top: 1px solid rgb(204 202 202 / 10%);
    }
`