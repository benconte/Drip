import React, {useState} from 'react'
import styled from 'styled-components'
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import AlbumIcon from '@material-ui/icons/Album';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ReplayIcon from '@material-ui/icons/Replay';
import LoopIcon from '@material-ui/icons/Loop';
import ShuffleIcon from '@material-ui/icons/Shuffle';
// import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import MicIcon from '@material-ui/icons/Mic';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Player(){
    const [player, setPlayer] = useState()
    const handleChange = (e) => {
        setPlayer(e.target.value)
    }
    return (
        <Nav>
            <LeftSection>
                <img src="/static/images/the_boondocks.jpg" alt="image" />
                <div className="song-info">
                    <span>24 ft. lil Baby</span>
                    <small><AlbumIcon /> Juice by Hikaru</small>
                    <p><a href="#">Money Man</a> ft. <a href="#">lil-Baby</a></p>
                </div>
            </LeftSection>
            <MiddleSection>
                <div className="controls">
                    <LoopIcon />
                    <SkipPreviousIcon />
                    <PlayArrowIcon />
                    <SkipNextIcon />
                    <ShuffleIcon />
                </div>
                <div className="slider">
                    <CtView>00:00</CtView>
                    <input type="range" min='0' max="100" value={player} onInput={(e) => handleChange(e)} />
                    <TtView>00:00</TtView>
                </div>
                
            </MiddleSection>
            <RightSection>
                <VolumeUpIcon />
                <MicIcon />
                <QueueMusicIcon />
            </RightSection>
        </Nav>
    )
}

export default Player;

const Nav = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
    border-top: #333;
    background: #222;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #eee;
    padding: 0 20px;
`

const LeftSection = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 55px;
        height: 55px;
    }

    .song-info {
        margin: 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        span {
            font-weight: 600;
            color: #eee;
        }

        small {
            margin: 0;
            padding: 0;

            svg {
                font-size: 1.2rem;
            }

            color: var(--light-color);
            font-weight: 450;
        }

        p {
            margin: 0;
            padding: 0;
            font-weight: 500;
            font-size: 1rem;
            color: #d2d2d2;

            a {
                color: #d2d2d2;

                &:hover {
                    color: var(--green);
                    
                }
            }
        }
    }
`
const MiddleSection = styled.div`
    display: block;
`

const CtView = styled.div`

`

const TtView = styled.div``


const RightSection = styled.div`

`