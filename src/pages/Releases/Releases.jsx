import React from 'react'
import mockData from "./mockData.json";

import './Releases.scss'

const Releases = () => {
    return (
        <div className="releases">
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