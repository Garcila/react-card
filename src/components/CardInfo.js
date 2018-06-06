import React, { Component } from 'react'

export default class CardInfo extends Component {
  render() {
    const {postTitle,authorPhoto} = this.props;
    return (
      <div>
        <div>{postTitle}</div>
        <div>{authorPhoto}</div>
      </div>
    )
  }
}
