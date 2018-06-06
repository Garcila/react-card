import React, { Component } from 'react';

export default class CardSocial extends Component {
	render() {
		const {
			postComments,
			postRePosted,
			postLikes,
			postShares
		} = this.props;
		return (
    <div>
      <span>{postComments}</span>
      <span>{postRePosted}</span>
      <span>{postLikes}</span>
      <span>{postShares}</span>
    </div>
    );
	}
}
