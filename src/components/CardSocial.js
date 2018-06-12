import React, { Component } from 'react';
var FontAwesome = require('react-fontawesome');

export default class CardSocial extends Component {
	handleClick = e => {
		const posted = this.props.datePosted;
		const action = e.target.getAttribute('data');
		this.props.increase(posted, action);
	};
	render() {
		const {
			postComments,
			postRePosted,
			postLikes,
			postShares,
			red
		} = this.props;

		return (
			<div style={styles.CardSocial}>
				<span>
					<FontAwesome
						style={{ color: `rgba(${red},0,0,255)` }}
						name="comment"
						data="Comments"
						onClick={this.handleClick}
					/>{' '}
					{postComments}
				</span>
				<span>
					<FontAwesome
						name="share"
						data="RePosted"
						onClick={this.handleClick}
					/>{' '}
					{postRePosted}
				</span>
				<span>
					<FontAwesome
						name="heart"
						data="Likes"
						onClick={this.handleClick}
					/>{' '}
					{postLikes}
				</span>
				<span>
					<FontAwesome
						name="envelope"
						data="Shares"
						onClick={this.handleClick}
					/>{' '}
					{postShares}
				</span>
			</div>
		);
	}
}

const styles = {
	CardSocial: {
		display: 'flex',
		justifyContent: 'space-around',
		marginLeft: '4rem',
		width: '60%',
		padding: '1rem'
	},
	paragraph: {
		color: '#939393'
	}
};
