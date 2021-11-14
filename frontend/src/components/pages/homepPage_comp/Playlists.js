import React from 'react'
import Slider from "react-slick"
import styled from 'styled-components'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { Link } from 'react-router-dom';

function Playlists(props) {
    let settings = {
        dots: false,
        focusOnSelect: true,
        infinite: false,
        speed: 600,
        slidesToShow: 5,
        autoplay: false,
        swipeToSlide: false,
        initialSlide: 0,
        // swipe: true, 
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };
    console.log(props.queu_playlist)
    return (
        <Container>
            <Main>
                <header>This week popular Playlists</header>
                <Carousel {...settings}>
                    { props.data && props.data.map((data, index) => {
                        return (
                            <Wrap key={index} >
                                { props.queu_playlist && props.queu_playlist.id === data.playlist_id? 
                                    <Equalizer className='equalizer'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </Equalizer>
                                :
                                    <PlayArrowIcon className="play-icon" />
                                }
                                    
                                <Link to={`/playlist/${data.playlist_id}`}>
                                    <div className="playlist-data">
                                        <img src={'/media/'+data.playlist_img} alt="playlist" />
                                        <Content>
                                            <span>{data.name}</span>
                                            <small>{
                                                data.inspired.length > 25? data.inspired.slice(0, 22) + "..." : data.inspired
                                            }
                                            </small>
                                        </Content>
                                    </div>
                                </Link>
                            </Wrap>
                        )
                    }) }
                    
                </Carousel>
            </Main>
        </Container>
    )
}

export default Playlists;

const Container = styled.div`
    width: calc(100% - 10px);
    height: auto;
    margin-bottom: 15px;
    ::-webkit-scrollbar {
        display: none;
      }
`

const Main = styled.div`
    margin-bottom: 15px;
    // height: 100%;

    header {
        width: 100%;
        height: 40px;
        // border-bottom: 1px solid #333;
        margin-bottom: 5px;
        padding: 0px 5px;
        color: #eee;
        font-size: 22px;
        font-weight: 600;
    }
`

const Carousel = styled(Slider)`
    // height: 100%;

    .slick-slide {
        width: 10rem;
        // margin: 0 5px;
    }
    li.slick-active button:before {
        color: #fff;
    }

    .slick-prev {
        top: -27px;
        right: 68px;
        left: auto;
    }

    .slick-next {
        top: -27px;
        right: 35px;
    }

    .slick-prev:before {
        font-size: 30px;
    }
    .slick-next:before {
        font-size: 30px;
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    button {
        z-index: 1;
    }
    @media (max-width: 600px) {
        
        button {
            visibility: hidden;
        }
        .slick-list {
        overflow: visible;
        }
    }
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 7px;
    margin-right: 10px;
    height: 20rem;
    position: relative;

    .play-icon {
        position: absolute;
        top: 30%;
        left: 38%;
        font-size: 4rem;
        color: #fff;
        opacity: 1;
        display: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;

        .playlist-data {
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            border-radius: 7px;
            overflow: hidden;
            transition: var(--transition);
            z-index: -1;
    
            img {
                width: 234px;
                height: 234px;
                border-radius: 7px;
            }
    
            &:hover {
                cursor: pointer;

                img {
                    opacity: .8;
                }
            }
        }
    }
    

    &:hover {
        .play-icon {
            display: block;
            opacity: 1;
            z-index: 1;
        }

        .equalizer {
            display: none;
        }

        // .playlist-data {
        //     opacity: .7;
        // }
    }
    
`

const Equalizer = styled.div`
    display: flex;
    width: 52px;
    height: 52px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 30%;
    left: 38%;
    align-items: center;
    justify-content: center;

    span {
        display: inline-block;
        height: 2rem;
        width: 0.2rem;
        margin: 1.2px;
        background: var(--green);
        animation: equalizer 1s linear infinite;
        transform-origin: bottom;
    }

    span:nth-child(2){
        animation-delay: .3s;
    }

    span:nth-child(3){
        animation-delay: .6s;
    }

    // &:hover {
    //     transform: scale3d(1.2,1.2,1.2);
    // }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2px 5px;

    span {
        font-weight: 500;
        color: #dfd2d2;
        font-size: 1rem;
        letter-spacing: 0.2rem;
    }

    small {
        font-size: 1rem;
        color: #555;
        font-weight: 500;
    }
`

