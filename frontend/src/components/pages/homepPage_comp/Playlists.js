import React from 'react'
import Slider from "react-slick"

function Playlists() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false
    }
    return (
        <div>
            <h2>These are the Playlists</h2>
        </div>
    )
}

export default Playlists;