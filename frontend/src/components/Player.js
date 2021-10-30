import React, {useState, useEffect} from 'react'
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
import store from './store'

let song = '/static/song/Money Man - 24 (Official Video) (feat. Lil Baby).mp3';

// player.src = song;

function Player(props){
    const [song_time, setSong_time] = useState(0);
    const [isPlaying, setIs_playing] = useState(false);
    const [volume, setVolume] = useState(50);
    const [isMuted, setIsMuted] = useState(false);
    const [ct_time, setCt_time] = useState("0:0");
    const [Tt_time, setTT_time] = useState("00:00");
    const [total_progress_value, set_progressValue] = useState(0);
    const [loop, setLoop] = useState(false);

    const [currentSong, setCurentSong] = useState();


    player.onloadeddata = () => {
        set_progressValue(player.duration);
        const ds = parseInt(player.duration % 60)//getting seconds
        const dm = parseInt((player.duration / 60) % 60)
        setTT_time(dm + ':' + ds);
    }

    player.ontimeupdate = () => {
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

    const handleVolume = (e) => {
        player.volume = e.target.value / 100;
        setVolume((e.target.value))
    }

    // handling playing and fetching songs from passed in props or array
    // takes in an index for the song to play
    const handleMusic = async (i) => {
        // if (currentSong.id != i){
            // props.setPlaying_song(i);
            setCurentSong(props.store.find(s => s.id === i))
            player.src = props.store.find(s => s.id === i).src;
            await player.load();
            player.play();
            setIs_playing(true);
        // }
        // else {
        //     play();
        // }
    }


    const play = () => {
        if(isPlaying == false){
            setIs_playing(!isPlaying);
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

    const nextPlay = () => {
        if(props.store){
            if ((props.playing_song + 1) === props.store.length){
                props.setPlaying_song(0);
                return;
            }
            props.setPlaying_song(props.playing_song + 1);
        }
        

    }

    const prevPlay = () => {
        if(props.store){
            if(props.playing_song <= 0){
                props.setPlaying_song(props.store.length - 1);
                return;
            }

            props.setPlaying_song(props.playing_song - 1);
            handleMusic(props.playing_song);
        }
        
    }

    player.addEventListener('ended', () => {
        nextPlay();
    })

    useEffect(() => {
        if (props.store !== undefined){
            if (props.status){
                handleMusic(props.playing_song);
            }else {
                play()
            }
        }
    }, [props.store, props.status, props.playing_song])

    return (
        <Nav>
            <LeftSection>
                { currentSong? (
                    <>
                        <img src={currentSong.img} alt={currentSong.name} />
                        <div className="song-info">
                            <span>{currentSong.name}</span>
                            <small><AlbumIcon /> {currentSong.album}</small>
                            <p>{currentSong.artists.map((art, index) => {
                                return (
                                    <>
                                        <a href="#" key={index}>{art}</a>, 
                                    </>
                                )
                            })}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <NoSong>
                            <AlbumIcon />
                            <div className="song-info">
                                <span>--Song--</span>
                            </div>
                        </NoSong>
                    </>
                )}
                
            </LeftSection>
            <MiddleSection>
                <div className="controls">
                    <LoopIcon onClick={() => repeat()} style={loop === true? {color: "var(--green)"} : {color: "#eee"}} />
                    <SkipPreviousIcon onClick={() => prevPlay()} />
                    
                    { isPlaying? (
                        <PauseIcon className="play-icon" onClick={() => play()} />
                    ) : (
                        <PlayArrowIcon className="play-icon" onClick={() => play()} />
                    )}
                    <SkipNextIcon onClick={() => nextPlay()} />
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

const NoSong = styled.div`
    display: flex;
    align-items: center;

    svg {
        width: 55px;
        height: 55px;
        color: grey;
    }

    span {
        font-weight: 600;
        color: var(--light-color);

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
                // color: var(--green);
                color: #eee;
                background: #9292923d;
                border-radius: 50%;
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
