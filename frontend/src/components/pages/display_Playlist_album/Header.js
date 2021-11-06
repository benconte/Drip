import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

function Header(props){
    return (
        <Container>
            {/* <Stack spacing={1}>
                <Skeleton variant="text" />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={118} />
            </Stack> */}
            {props.playlist.img? 
                <img src={`/media/`+props.playlist.img} alt={props.playlist.name} />
            :
                <Stack spacing={1}>
                    <Skeleton animation="wave" variant="rectangular" width={210} height={118} />
                </Stack>
            }
            <Content>
                {props.playlist ? 
                    <>
                        <h3>{props.playlist.name}</h3>
                        <span>inspired by: {props.playlist.authers.map((auther, index) => {
                            return (
                                <span key={index}>
                                    <Link to={`/`}> {auther}</Link>
                                    <b> . </b>
                                </span>
                            )
                            })} 
                        </span>
                        <p>Discover new, popular music similar to the artists you've been listening to lately</p>
                        <small>{props.song_length} - tracks - 2hrs 35min</small>
                        <small>{props.playlist.playlist_likes} likes</small> 
                    </>
                :
                <Box spacing={1}>
                    <Skeleton animation="wave" variant="text" width="50%" height={118} />
                    <Skeleton animation="wave" variant="text"  width="40%" />
                    <Skeleton animation="wave" variant="text"/>
                    <Skeleton animation="wave" variant="text"  />
                    <Skeleton animation="wave" variant="text"  width="30%" />
                    <Skeleton animation="wave" variant="text"  width="30%" />
                </Box>
                }
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