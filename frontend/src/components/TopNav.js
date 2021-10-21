import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ClearIcon from '@material-ui/icons/Clear';

function TopNav(){
    const [toggleDropdown, setToogleDropdown] = useState(false)

    return (
        <Nav>
            {/* <Container> */}
                <LeftSection>
                    <form>
                        <div className="input-section">
                            <input type="search" placeholder="Search song, playlist, albums, artists and more..." />
                            <button><SearchIcon /></button>
                        </div>
                    </form>
                </LeftSection>
                <RightSection>  
                    <NotificationsNoneIcon />
                    <div className="profile">
                        <span>Admin</span>
                        <img src="/static/images/the_boondocks.jpg" alt="profile" onClick={() => setToogleDropdown(!toggleDropdown)} />

                        { toggleDropdown && <DropDown>
                            <header>
                                {/* <span className="menu">menu</span> */}
                                <span><ClearIcon  onClick={() => setToogleDropdown(!toggleDropdown)} /></span>
                            </header>
                            <Content>
                                <ul>
                                    <li>
                                        Profile
                                    </li>
                                    <li>
                                        favorites
                                    </li>
                                    <li>
                                        news
                                    </li>
                                    <li>
                                        settings
                                    </li>
                                    <li>
                                        about us
                                    </li>
                                    <li>
                                        help
                                    </li>
                                    <li>
                                        <a href="/logout">logout</a>
                                    </li>
                                </ul>
                            </Content>
                        </DropDown>}
                    </div>
                </RightSection>
            {/* </Container> */}
        </Nav>
    )
}

export default TopNav;

const Nav = styled.div`
    position: fixed;
    left: 230px;
    width: calc(100% - 230px);
    height: 4.2rem;
    background: #333;
    border-bottom: 1px solid #444;
    display: flex;
    align-items: center;
    jusitfy-content: space-between;
    padding: 0 20px;
`

const LeftSection = styled.div`
    flex-grow: 1;
    
    form {
        .input-section {
            display: flex;
            align-items: center;

            input {
                background: #222;
                border: 2px solid #333;
                height: 50px;
                border-top-left-radius: 7px;
                border-bottom-left-radius: 7px;
                width: 35rem;
                padding: 0 10px;
                color: #eee;
                z-index: 1;

                &:focus {
                    border-color: var(--green);
                    box-shadow: var(--box-shadow);
                    border-radius: 7px;
                }
            }

            button {
                width: 5rem;
                height: 47px;
                border: 2px solid #444;
                background: #333;
                margin: 0;
                color: #eee;
                border-top-right-radius: 7px;
                border-bottom-right-radius: 7px;
                
                svg {
                    font-size: 2rem;
                }

                &:hover {
                    background: #444;;
                    
                }
            }
        }
    }
`

const RightSection = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    position: relative;

    svg {
        font-size: 2rem;
        color: rgba(249,249,249,.4);
        margin-right: 15px;

        &:hover {
            color: var(--green);
            cursor: pointer;
        }
    }

    .profile {
        span {
            font-weight: 500;
            color: #eee;
            margin-right: 10px;
        }
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid transparent;

            &:hover {
                border-color: var(--green);
            }
        }
    }
`

const DropDown = styled.div`
    position: absolute;
    top: 4rem;
    right: 9px;
    width: 220px;
    min-height: 10rem;
    border-radius: 7px;
    background: #222;
    padding: 6px;

    header {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: end;

        svg {
            background: #333;
            margin: 0;
            cursor: pointer;

            &:hover {
                color: #eee;
            }
        }
    }
`
const Content = styled.div`
    width: 100%;
    height: 100%;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            width: 100%;
            height: 40px;
            cursor: pointer;
            border-top: 1px solid #333;
            padding: 0 10px;
            color: #bdb8d7;
            padding-top: 6px;
            font-weight: 500;

            a {
                width: 100%;
                height: 100%;
                color: var(--light-color);
            }

            &:hover {
                background: #333;
                color: #eee;

                a {
                    text-decoration: none;
                    color: #eee;
                }
            }

            
        }
    }
`
