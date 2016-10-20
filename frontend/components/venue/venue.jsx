import React from 'react';

class Pin extends React.Component {
  constructor(props) {
    super();
    this.waitForPins = this.waitForPins.bind(this);
  }

  displayStatus(hours) {
    if (hours) {
      if (hours.status) {
        return "Open now";
      } else {
        return "Closed now";
      }
    } else {
      return "No hours listed";
    }
  }

  displayRating(rating, count) {
    if (rating && count) {
      return `Rating: ${rating}/10 with ${count} Reviews`;
    }
  }

  displayPrice(price) {
    if (price) {
      return `${price.currency} (${price.message})`;
    }
  }

  displayAddress(loc) {
    if (loc) {
      return `${loc.address}, ${loc.city} ${loc.crossStreet}`;
    }
  }

  displayConsensus(likes) {
    if (likes) {
      return `${likes.summary}`;
    }
  }

  displayDescription(phrases) {
    if (phrases) {
      return (
        <div className="venueDescriptions">
          {phrases.map(phrase => {
            let key = phrases.indexOf(phrase);
            return <div className="description" key={key}>{phrase.sample.text}</div>;
          })}
        </div>
      );
    }
  }

  waitForPins() {
    const venue = this.props.pin;
    if (venue.name) {
      return (
        <div className="pinInnerContainer">
          <div className="venueName">{venue.name}</div>
          <div className="venueStatus">{this.displayStatus(venue.hours)}</div>
          <div className="venueHours">{venue.hours.status}</div>
          <div className="venueRatings">{this.displayRating(venue.rating, venue.ratingSignals)}</div>
          <div className="venuePrice">{this.displayPrice(venue.price)}</div>
          <div className="venueAddress">{this.displayAddress(venue.location)}</div>
          <div className="venueConsensus">{this.displayConsensus(venue.likes)}</div>
          <div className="venueDescriptionBox">
            <div className="venueDescriptionHeader">What some people are saying:</div>
            {this.displayDescription(venue.phrases)}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="pinOuterContainer">
        {this.waitForPins()}
      </div>
    );
  }
}

export default Pin;
