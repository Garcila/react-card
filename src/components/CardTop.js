import React, { Component } from 'react';

export default class CardTop extends Component {
	render() {
		const { postTitle, authorName, authorPhoto } = this.props;
		return (
			<div style={styles.cardTop}>
				<img
					src="https://i.imgur.com/ndkJAXX.png"
					alt="logo"
					style={styles.logo}
				/>
				<h2 style={styles.cardTopTitle}>{postTitle}</h2>
				<div style={styles.cardTopAuthor}>
					{authorName}
					<img
						src={authorPhoto}
						style={{ height: '2rem' }}
						alt="author"
					/>
				</div>
			</div>
		);
	}
}

const styles = {
	cardTop: {
		display: 'flex',
		maxWidth: '50rem',
		alignItems: 'flex-end',
		flexDirection: 'column',
		backgroundColor: '#FFA003',
		color: '#FFF',
		fontFamily: 'monospace',
		fontSize: '2rem',
		padding: '1rem'
	},
	logo: {
    width: '3rem',
    alignSelf:'flex-start',
	},
	cardTopTitle: {
		alignSelf: 'center'
	},
	cardTopAuthor: {
		display: 'flex',
		fontSize: '1rem',
		alignItems: 'center',
		maxWidth: '9rem',
		backgroundColor: '#FFF',
		color: '#FFA003'
	}
};
