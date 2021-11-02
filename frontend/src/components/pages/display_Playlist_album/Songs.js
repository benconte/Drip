import React from 'react';
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
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

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

function Songs(props){
    
    const playShuffledPlaylist = () => {
        shuffle(props.songs);
        console.log(shuffle(props.songs));
        props.setStore(shuffle(props.songs))
        props.setPlaying_song(0)
        props.setStatus(true)
    }

    const handlePlaying = e => {
        if(e.target.value === "shuffle"){
            playShuffledPlaylist();
        }
    }

    const playSong = (i) => {
        props.setStore(props.songs)
        props.setPlaying_song(i)
        props.setStatus(true)
    }
    return (
        <Container>
            <header>
                <select onChange={handlePlaying}>
                    <option defaultCheck value="listen">Listen</option>
                    <option value="shuffle">shuffle</option>
                </select>
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
                    {props.songs.map((row, index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Cell>
                                    <img src={'/media/'+row.img} className="song-img" alt={row.name} style={{width: "3rem", height: "3rem"}} />
                                    <PlayArrowIcon className="play-icon" onClick={() => playSong(index)} />
                                </Cell>
                            </TableCell>
                            <TableCell align="left" style={{color: "var(--green)", fontSize: "1rem"}}>
                                <Cell>
                                    <span>{row.name}</span>
                                    <small>
                                        {
                                         row.authers !== null? row.authers.length > 3? (row.authers.slice(0, 2).map((art, indx) => {
                                        return (
                                            <>
                                                { indx === 1? (
                                                    <>
                                                        <Link to={`/`} key={indx}>{art}</Link>
                                                        ...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Link to={`/`} key={indx}>{art} </Link> 
                                                        .
                                                    </>
                                                ) }
                                                
                                            </>
                                            )
                                        })): row.authers.map((art, indx) => {
                                            return (
                                                <>
                                                    <Link to={`/`} key={indx}>{art}</Link> 
                                                    <b>. </b> 
                                                </>
                                                )
                                            }) : row.song_auther_written }
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
                                        <MicExternalOnIcon />       
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
                                        <MoreVertIcon />
                                    </Wrap>
                                </Cell>
                            </TableCell>
                        </TableRow>
                    ))}
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

        select {
            padding: 6px 30px;
            border: none;
            outline: none;
            background: var(--green);
            color: #fff;
            border-radius: 3px;
            cursor: pointer;
            font-weight: 600;
            letter-spacing: .2rem;
            margin-right: 10px;

            option {
                background: #222;
                margin: 5px 0;
                color: #eee;

                &:hover {
                    background: #333;
                    cursor: pointer;
                }
            }

            &:hover {
                background: #3aa861;
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

    tr {
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
    tr:hover {
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
    cursor: pointer;
    color: #eee;
    font-size: 1rem;   

    a {
        text-decoration: none;
        color: #eee;
    }
    &:hover {
        color: var(--green);
        a {
            color: var(--green);
        }
    }
`