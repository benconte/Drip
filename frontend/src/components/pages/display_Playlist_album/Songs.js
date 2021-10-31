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
import store from '../../store';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const styles = {
    width: "100%", 
    // paddingLeft: 20, 
    // PaddingRight: 20, 
    background: "transparent",
    color: '#eee'
}

function Songs(props){
    return (
        <Container>
            <header>
                Working <span>hours</span>
            </header>
            <TableContainer component={Paper} style={styles}>
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
                    {store.map((row, index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Cell>
                                    <img src={row.img} className="song-img" alt={row.name} style={{width: "3rem", height: "3rem"}} />
                                    <PlayArrowIcon className="play-icon" />
                                </Cell>
                            </TableCell>
                            <TableCell align="left" style={{color: "var(--green)", fontSize: "1rem"}}>
                                <Cell>
                                    <span>{row.name}</span>
                                    <small>{row.artists.map((art, indx) => {
                                        return (
                                            <>
                                                <Link key={indx}>{art}. </Link> 
                                            </>
                                            )
                                        })}
                                    </small>
                                </Cell>
                                
                            </TableCell>
                            <TableCell align="left">
                                <Cell>
                                    <Wrap>
                                        <span>{row.album === null? '-' : (
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
                                <Cell>301,212</Cell>
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