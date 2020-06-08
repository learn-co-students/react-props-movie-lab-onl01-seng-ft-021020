import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    const {poster} = this.props
    return (
      <div className="card-front" style={{backgroundImage: `url(${poster})`}}>
      </div>
    )
  }
}
