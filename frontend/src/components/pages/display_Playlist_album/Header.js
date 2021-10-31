import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

function Header(props){
    console.log(props.playlist)
    return (
        <Container>
            <img src={`/media/`+props.playlist.img} alt={props.playlist.name} />
            <Content>
                <h3>{props.playlist.name}</h3>
                <span>inspired by: {props.playlist.authers.map((auther, index) => {
                    return (
                        <>
                            <Link to={`/`}> {auther}</Link>
                            <b> . </b>
                        </>
                    )
                })} </span>
                <p>Discover new, popular music similar to the artists you've been listening to lately</p>
                <small>{props.song_length} - tracks - 2hrs 35min</small>
                <small>{props.playlist.playlist_likes} likes</small> 

            </Content>
            
        </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 10px;

    img {
        width: 14rem;
        height: 14rem;
        border-radius: 8px;
        margin-right: 10px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;

    h3 {
        color: #fff;
        font-weight: 600;
        letter-spacing: .2rem;
    }

    span {
        color: rgba(239,239,239, .7);
        font-size: 1.4rem;
        font-weight: 500;

        a {
            text-decoration: none;
            color: rgba(250,250,250, .8);
            font-weight: bold;
            
            &:hover {
                color: var(--green);
            }
        }
    }

    p {
        color: rgba(249,249,249,.7);
        font-size: 1.2rem;
    }

    small {
        color: #555;
        font-weight: bolder;
        font-size: 1rem;
    }
`