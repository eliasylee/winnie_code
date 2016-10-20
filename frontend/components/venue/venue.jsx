import React from 'react';

class Pin extends React.Component {
  constructor(props) {
    super();
    this.waitForPins = this.waitForPins.bind(this);
  }

  displayAddress(loc) {
    if (loc) {
      let location = "";

      if (loc.address) {
        location += loc.address + ", ";
      }
      if (loc.city) {
        location += loc.city;
      }
      if (loc.crossStreet) {
        location += " " + loc.crossStreet;
      }

      return location;
    }
  }

  displayStatus(hours) {
    if (hours) {
      if (hours.isOpen) {
        return "Open now";
      } else {
        return "Closed now";
      }
    } else {
      return "No hours listed";
    }
  }

  displayHours(hours) {
    if (hours && hours.status) {
      return `${hours.status}`;
    } else {
      return null;
    }
  }

  displayRating(rating, count) {
    if (rating && count) {
      return `Rating: ${rating}/10 with ${count} Reviews`;
    }
  }

  displayConsensus(likes) {
    if (likes) {
      return `${likes.summary}`;
    }
  }

  displayPrice(price) {
    if (price) {
      return `Pricing: ${price.currency} (${price.message})`;
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
        <div className="venueInnerContainer">
          <div className="venueName">{venue.name}</div>
          <div className="venueAddress">{this.displayAddress(venue.location)}</div>
          <div className="venueStatus">{this.displayStatus(venue.hours)}</div>
          <div className="venueHours">{this.displayHours(venue.hours)}</div>
          <div className="venueRatings">{this.displayRating(venue.rating, venue.ratingSignals)}</div>
          <div className="venueConsensus">{this.displayConsensus(venue.likes)}</div>
          <div className="venuePrice">{this.displayPrice(venue.price)}</div>
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
      <div className="venueOuterContainer">
        {this.waitForPins()}
      </div>
    );
  }
}

export default Pin;
