import React from 'react'
import { render } from 'react-dom'

export default function App(){
    return (
        <div>
            <h2>Drip app</h2>
        </div>
    )
}

render(<App />, document.getElementById('app'));