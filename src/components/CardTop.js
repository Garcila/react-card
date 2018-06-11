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
				<h5 style={styles.cardTopTitle}>{postTitle}</h5>
				<div style={styles.cardTopAuthor}>
					{authorName}
					<img
						src={authorPhoto}
						style={styles.authorImage}
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
    borderRadius: '0.5rem 0.5rem 0 0',
    width: '60%',
		alignItems: 'flex-end',
		flexDirection: 'column',
		backgroundColor: '#FFA003',
		color: '#FFF',
		fontFamily: 'monospace',
		fontSize: '2rem',
    padding: '1rem',
    marginLeft: '4rem'
	},
	logo: {
    width: '3rem',
    alignSelf:'flex-start',
	},
	cardTopTitle: {
		padding: '0.5rem',
		alignSelf: 'center'
  },
  authorImage: {
    height: '2rem',
    border: '1px solid #D3D3D3',
    marginRight: '1rem',
  },
	cardTopAuthor: {
    display: 'flex',
    fontSize: '0.6rem',
    fontWeight: 'bold',
		alignItems: 'center',
		maxWidth: '9rem',
		backgroundColor: '#FFF',
    color: '#FFA003',
    padding: '0.1rem',
	}
};
