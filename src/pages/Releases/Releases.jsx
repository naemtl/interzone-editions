import React from 'react'
import mockData from "./release-database.json";

import './Releases.scss'

const Releases = () => {
    return (
        <div className="releases">
            <h1>TEST</h1>
            <div className="releases__grid">
                {mockData.map(entry => (
                    <div className="releases__item" key={entry.id}>
                        <img src={entry.imgUrl} alt="cat" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Releases