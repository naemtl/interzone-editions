import React from 'react'
import eventsData from "./event-database.json";

import "./Events.scss";

const Events = () => {
    return (
        <div className="events">
            <h1>EVENTS TEST</h1>
            <div className="events__grid">
                {eventsData.map(entry => (
                    <div className="events__item" key={entry.id}>
                        <img src={entry.posterUrl} alt="event" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Events