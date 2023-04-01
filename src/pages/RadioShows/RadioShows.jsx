import React from 'react'
import radioShowsData from "./radio-show-database.json";

import './RadioShows.scss'

const RadioShows = () => {
    return (
        <div className="radio">
            <h1>Releases Test</h1>
            <div className="radio__grid">
                {radioShowsData.map(entry => (
                    <div className="radio__item" key={entry.id}>
                        <img src={entry.imgUrl} alt="radio-show" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RadioShows