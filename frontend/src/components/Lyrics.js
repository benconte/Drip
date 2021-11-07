import React from 'react'
import styled from 'styled-components'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link} from 'react-router-dom'

function Lyrics(props){
    return (
        <Container style={{display: props.show_lyrics_queu? 'block' : 'none'}}>
            <header>
                <span>lyrics</span>
                <div>
                    <b>{props.song.name}</b>
                    <main>
                        {props.song.authers !== [] ? props.song.authers.map((art, indx) => {
                            return (
                                <>
                                    <Link to={`/`} key={indx}> {art}</Link>.  
                                </>
                                )
                            }
                        ): <small>{props.song.song_auther_written}</small>}
                    </main>
                </div>
                <KeyboardArrowDownIcon className="close-lyrics" onClick={()=> props.setShow_lyrics_queu(!props.show_lyrics_queu)} />
            </header>
            <Content>
                <div>
                    {props.song.lyrics}
                </div>
            </Content>
        </Container>
    )
}

export default Lyrics;

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    right: 0;
    background: #111;
    z-index: 18;
    overflow-x: hidden;
    overflow-y: auto;
    padding-bottom: 100px;

    &::-webkit-scrollbar {
        z-index: 25;
    }

    header {
        width: 100%;
        height: 70px;
        padding: 0 20px;
        background: #222;
        border-bottom: #333;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        color: #eee;

        span {
            font-weight: 500;
            font-size: 1.7rem;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            b {
                font-size: 1.8rem;
                letter-spacing: 0.2rem;
            }

            main {
                a {
                    color: #918b8b;
                    font-size: 1rem;
                    font-weight: bolder;
                    letter-spacing: 0.2rem;
                    text-decoration: none;

                    &:hover {
                        color: var(--green);
                        cursor: pointer;
                    }
                }

                small {
                    color: #918b8b;
                    font-size: 1rem;
                    font-weight: bolder;
                    letter-spacing: 0.2rem;
                }
            }
        }

        .close-lyrics {
            font-size: 2.7rem;
            cursor: pointer;

            &:hover {
                color: var(--green);
            }
        }
    }
`


const Content = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 80px;

    div {
        max-width: 45rem;
        margin: 0 auto;
        line-height: 3rem;
        color: #eee;
        font-weight: 500;
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
    }
`