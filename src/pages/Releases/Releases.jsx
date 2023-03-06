import React from 'react'
import releasesData from "./release-database.json";

import './Releases.scss'

const Releases = () => {
    return (
        <div className="releases">
            <h1>Releases Test</h1>
            <div className="releases__grid">
                {releasesData.map(entry => (
                    <div className="releases__item" key={entry.id}>
                        <img src={entry.imgUrls[0]} alt={entry.catNo} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Releases