import React, {useState} from 'react'
import styled from 'styled-components'
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import AlbumIcon from '@material-ui/icons/Album';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
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
import player from './PlayerConfig'

let song = '/static/song/Money Man - 24 (Official Video) (feat. Lil Baby).mp3';

player.src = song;

function Player(){
    const [song_time, setSong_time] = useState(0);
    const [isPlaying, setIs_playing] = useState(false);
    const [volume, setVolume] = useState(100);
    const [isMuted, setIsMuted] = useState(false);
    const [ct_time, setCt_time] = useState("0:0");
    const [Tt_time, setTT_time] = useState("00:00");
    const [total_progress_value, set_progressValue] = useState(0);
    const progress = document.getElementById("progress");
    const [loop, setLoop] = useState(false);


    player.onloadeddata = () => {
        set_progressValue(player.duration);
        const ds = parseInt(player.duration % 60)//getting seconds
        const dm = parseInt((player.duration / 60) % 60)
        setTT_time(dm + ':' + ds);
    }

    player.ontimeupdate = () => {
        // setSong_time(parseFloat(player.currentTime / player.duration) * 100)
        setSong_time(parseFloat(player.currentTime))
    }

    player.addEventListener('timeupdate', () => {
        const cs = parseInt(player.currentTime % 60);
        const cm = parseInt((player.currentTime / 60) % 60);
        setCt_time(cm + ':' + cs);
    })

    const handleSlider = (e) => {
        player.currentTime = parseFloat(e.target.value);
    }

    // player.addEventListener('ended', () => {
    //     player.currentTime = 0;
    //     player.play()
    // })

    const handleVolume = (e) => {
        console.log((e.target.value / 100))
        player.volume = e.target.value / 100;
        setVolume((e.target.value))
    }

    const play = () => {
        if(isPlaying == false){
            setIs_playing(!isPlaying);
            // player.load()
            player.play();
        }else{
            setIs_playing(!isPlaying);
            player.pause();
        }
        
    }
    
    const repeat = () => {
        setLoop(!loop);
        player.loop = !loop;
    }

    const handleMute = () => {
        setIsMuted(!isMuted);
        player.muted = !isMuted;
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
                    <LoopIcon onClick={() => repeat()} style={loop === true? {color: "var(--green)"} : {color: "#eee"}} />
                    <SkipPreviousIcon />
                    
                    { isPlaying? (
                        <PauseIcon className="play-icon" onClick={() => play()} />
                    ) : (
                        <PlayArrowIcon className="play-icon" onClick={() => play()} />
                    )}
                    <SkipNextIcon />
                    <ShuffleIcon />
                </div>
                <div className="slider">
                    <CtView>{ct_time}</CtView>
                    <input type="range" id="progress" min='0' max={total_progress_value} value={song_time} onInput={(e) => handleSlider(e)} />
                    <TtView>{Tt_time}</TtView>
                </div>
                
            </MiddleSection>
            <RightSection>
                <div className="volume">
                    <input type="range" min='0' max="100" value={volume} onInput={(e) => handleVolume(e)} />
                    { isMuted? (
                        <VolumeMuteIcon style={{color: "var(--green)"}} onClick={() => handleMute()} />
                    ) : (
                        <VolumeUpIcon style={{color: "#eee"}} onClick={() => handleMute()} />
                    )}
                    
                </div>
                <FavoriteBorderIcon className="favorite" />
                <MicIcon className="lyrics" />
                <QueueMusicIcon className="queue" />
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
    display: flex;
    flex-direction: column;
    justify-content: center;

    .controls {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3px;

        svg {
            font-size: 1.5rem;
            margin: 0 10px;
            cursor: pointer;

            &:hover {
                color: var(--green);
            }
        }

        .play-icon {
            font-size: 2.5rem;
        }
    }

    .slider {
        display: flex;
        align-items: center;

        input {
            width: 35rem;
            height: 4px;
            cursor: pointer;

            &::-webkit-slider {
                height: 5px;
            }

            &::-webkit-slider-thumb {
                width: 15px;
                height: 15px;
                -webkit-appearance: none;
                appearance: none;
            }
        }

    }
`

const CtView = styled.div`
    margin: 0 10px;
`

const TtView = styled.div`
    margin: 0 10px;

`


const RightSection = styled.div`
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .lyrics {
        margin: 0 10px;
        font-size: 1.5rem;
        cursor: pointer;

        &:hover {
            color: var(--green);
        }
    }

    .favorite {
        margin: 0 10px;
        font-size: 1.5rem;
        cursor: pointer;

        &:hover {
            color: var(--green);
        }
    }

    .queue {
        margin: 0 10px;
        font-size: 1.5rem;
        cursor: pointer;

        &:hover {
            color: var(--green);
        }
    }

    .volume {
        position: relative;
        display: flex;
        align-items: center;

        input {
            width: 10rem;
            height: 4px;
            margin: 0 5px;
            cursor: pointer;

            &::-webkit-slider {
                height: 5px;
            }

            &::-webkit-slider-thumb {
                width: 15px;
                height: 15px;
            }
        }

        svg {
            margin: 0 10px;
            font-size: 1.5rem;
            cursor: pointer;

            &:hover {
                color: var(--green);
            }
        }

    }
`