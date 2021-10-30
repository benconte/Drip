import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import RadioIcon from '@material-ui/icons/Radio';

function Leftnav(){
    return (
        <Nav>
            <header>
                <span>Drip</span>
            </header>
            <NavItems>
                <ul>
                    <li>
                        <HomeIcon />
                        <span>home</span>
                    </li>
                    <li>
                        {/* <HomeMaxIcon /> */}
                        <span>Discover</span>
                    </li>
                    <li>
                        <RadioIcon />
                        <span>radio</span>
                    </li>
                </ul>
            </NavItems>
            <Playlists>
                <legend>Your library</legend>
                <ul className="info">
                    <li><FavoriteIcon /><span>Favorites</span></li>
                    <li><QueueMusicIcon /><span>playlists</span></li>
                </ul>
                <legend>My Playlists</legend>
                <ul className="user-playlists">
                    <li>
                        <span>Flexin</span>
                    </li>
                    <li><span>Chill and relax</span></li>
                    <li><span>The Goat</span></li>
                    <li><span>Rollin</span></li>
                    <li><span>pain</span></li>
                    <li><span>Chill and relax</span></li>
                    <li><span>The Goat</span></li>
                    <li><span>Rollin</span></li>
                    <li><span>pain</span></li>
                    <li><span>Chill and relax</span></li>
                    <li><span>The Goat</span></li>
                    <li><span>Rollin</span></li>
                    <li><span>pain</span></li>
                </ul>
            </Playlists>
        </Nav>
    )
}

export default Leftnav;

const Nav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 230px;
    height: calc(100vh - 80px);
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 16;


    header {
        width: 100%;
        height: 7rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #444;

        svg {
            margin-right: 7px;
        }

        span {
            font-weight: bold;
            font-size: 2rem;
            // margin: 0 auto;
            color: #fff;
            font-famility: 'Pattaya', sans-serif;
        }
    }
`

const NavItems = styled.div`
    width: 100%;
    height: auto;

    ul {
        margin: 0;
        padding: 0;
        color: #fff;

        li {
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #222;
            display: flex;
            align-items: center;
            padding: 0 10px;
            font-weight: 400;
            color: #bdb8d7;
            transition: .2s;

            span {
                width: 100%;
                height: 100%;
                font-size: 20px;
                padding-top: 8px;
            }

            &:hover {
                font-weight: bold;
                cursor: pointer;
                border-left: 4px solid var(--green);
                color: #eee;
            }

        }
    }


`

const Playlists = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 5px 0 3px 0;

    legend {
        font-weight: 500;
        color: #fee;
        font-size: 1rem;
        padding: 5px;
    }

    ul {
        margin: 0;
        padding: 0;
        color: #fff;

        li {
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #222;
            display: flex;
            align-items: center;
            padding: 0 10px;
            font-weight: 400;
            color: #bdb8d7;
            transition: .2s;

            svg {
                margin-right: 5px;
            }

            span {
                width: 100%;
                height: 100%;
                font-size: 20px;
                padding-top: 6px;
            }

            &:hover {
                font-weight: bold;
                cursor: pointer;
                border-left: 4px solid var(--green);
                color: #eee;
            }

        }
    }

    .user-playlist {
        li {
            span {
                font-family: 'Pattaya', sans-serif;
            }
        }
    }
`