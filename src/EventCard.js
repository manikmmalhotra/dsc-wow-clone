import React from 'react'
import "./EventCard.css"

function EventCard({name,time,logo}) {
    return (
        <div className="event__card__wrapper col-lg-4 col-md-9 col-xs-11">
      <img
        className="event__image"
        alt="logo"
        src={logo}
      />

      <div className="event__card__content">
      <div className="event__name">{name}</div>
      <div className="event__timings">{time}</div>

      <div className="watch__btn">
        <i class="fas fa-play-circle    "></i> Watch Now
      </div>
      </div>
    </div>
    )
}

export default EventCard
