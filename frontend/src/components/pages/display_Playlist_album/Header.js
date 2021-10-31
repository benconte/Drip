import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

function Header(props){
    return (
        <Container>
            {/* <h2 style={{color: "#fff"}}>your playlist id is {props.id} </h2> */}
            <img src="/static/images/the_boondocks.jpg" alt="image" />
            <Content>
                <h3>playlist name</h3>
                <span>inspired by: <Link>playlist</Link> . <Link>authers</Link> </span>
                <p>Discover new, popular music similar to the artists you've been listening to lately</p>
                <small>12 - tracks - 2hrs 35min</small>
                <small>12,897,234 likes</small> 

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