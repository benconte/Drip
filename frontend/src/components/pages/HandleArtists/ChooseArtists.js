import React, {useState, useEffect, useRef} from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import store from '../../store';
import CheckIcon from '@material-ui/icons/Check';


function ChooseArtists(){
    const [artists, setArtists] = useState(store);
    const [user_artists, setUserArtists] = useState();
    const artistRef = useRef(null);

    // useEffect(()=>{
    //     fetch("/api/artists_api")
    //     .then(res => res.json())
    //     .then(data => {
    //         setArtists(data);
    //     })
    // }, [setArtists])
    // console.log(artists)

    const handleAritsts = (name) => {
        if(store.includes(name)){
            console.log("selected")
        }else{
            setUserArtists(name)
            console.log("added")
        }
    }

    const handleClick = (name) => {
        console.log(name)
    }

    return (
        <Container>
            <Header>
                <header>Drip</header>
                <div className="searchBar">
                    <input type="search" placeholder="search for an artists..." />
                    <button>search</button>
                </div>
                <span>Later</span>
            </Header>
            <Content>
                {/* display artists */}
                { store.map((artist, index) => {
                    return(
                        <Artists key={index}>
                            <div className="artistData">
                                <img src={artist.img} alt={artist.name} onClick={() => handleAritsts(artist.name)} />
                                <span>{artist.name}</span>
                                <input type="checkbox" value={artist.name} onChange={(e) => handleAritsts(e.target.value)} ref={artistRef} />
                            </div>
                            <div className="check-icon">
                                <CheckIcon className="checkbox" />
                            </div>
                        </Artists>
                    )
                }) }

                
            </Content>
            <SaveSection>
                <span>Save Artists</span>
            </SaveSection>
        </Container>
    )
}

export default ChooseArtists;

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    width: 100%;
    background: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #444;
    padding: 0 3rem;
    z-index: 5;

    header {
        font-weight: 500;
        letter-spacing: .2rem;
        font-family: 'Pattaya', sans-serif;
        font-size: 2.5rem;
        color: var(--green);
    }

    .searchBar {
        display: flex;
        align-items: center; 
        
        input {
            border: 2px solid #333;
            background: #222;
            padding: 0 10px;
            color: #eee;
            font-weight: 400;
            height: 45px;
            width: 25rem;
            border-radius: 7px;
            margin-right: 5px;

            &:focus {
                border-color: var(--green);
                box-shadow: var(--box-shadow);
            }
        }

        button {
            padding: 7px 15px;
            border: 2px solid #333;
            background: #535453d4;
            color: #eee;
            font-weight: 500;
            border-radius: 7px;
            letter-spacing: .1rem;
            outline: none;

            &:hover{
                background: var(--green);
                cursor: pointer;
                box-shadow: var(--box-shadow);
            }
        }
    }

    span {
        color: #eee;
        font-weight: 500;
        font-size: 2rem;
        font-family: 'Pattaya', sans-serif;

        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`


const Content = styled.div`
    margin-top: 75px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 10px 20px;
    margin-bottom: 80px;
    z-index: -1;
`

const Artists = styled.div`
    width: 10rem;
    height: 10rem;
    padding: 10px;
    display: block;
    cursor: pointer;
    position: relative;

    .artistData {
        width: 100%;
        height: 100%;
        // opacity: .5;

        img {
            border-radius: 50%;
            width: 100%;
            height: 90%;
        }
    
        span {
            width: 100%;
            font-weight: bold;
            color: #eee;
            font-size: 17px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    
        input {
            display: none;
        }
    }

    .check-icon {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.6);
        display: flex;
        align-items: center;
        justify-content: center;
        display: none;

        svg {
            color: var(--green);
            width: 4rem;
            height: 8rem;
        }

        // checkbox:checked{

        // }
    }



    
`


const SaveSection = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    background: #333;
    border-top: 1px solid #444;
    display: flex;
    aling-items: center;
    justify-content: center;
    z-index: 5;


    span {
        width: 20rem;
        height: 50px;
        background: #222;
        color: #eee;
        font-weight: bold;
        font-size: 1.5rem;
        display: flex;
        aling-items: center;
        justify-content: center;
        border-radius: 20px;
        cursor: pointer;
        margin-top: 10px;
        padding-top: 5px;
        
        &:hover {
            background: var(--green);
            letter-spacing: .2rem;
        }
    }
`
