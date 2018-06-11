import React, { Component } from 'react';
import CardHeader from './CardHeader';
import CardTop from './CardTop';
import CardInfo from './CardInfo';
import CardSocial from './CardSocial';

export default class Card extends Component {
	render(props) {
		const {
			datePosted,
			postTitle,
			postDescription,
			authorName,
			authorTwitter,
			authorPhoto,
			postComments,
			postRePosted,
			postLikes,
			postShares
		} = this.props.state;
		return (
			<div style={styles.Card}>
				<CardHeader
					datePosted={datePosted}
					postTitle={postTitle}
					authorTwitter={authorTwitter}
				/>
				<CardTop
					postTitle={postTitle}
					authorName={authorName}
					authorPhoto={authorPhoto}
				/>
				<CardInfo
					postTitle={postTitle}
					postDescription={postDescription}
				/>
				<CardSocial
					datePosted={datePosted}
					postComments={postComments}
					postRePosted={postRePosted}
					postLikes={postLikes}
					postShares={postShares}
					increase={this.props.increase}
				/>
			</div>
		);
	}
}

const styles = {
	Card: {
		marginTop: '1rem',
		display: 'flex',
		flexWrap: 'wrap',
		width: '20rem',
		flexDirection: 'column',
		alignItems: 'flex-start',
		border: '1px solid #939393',
		borderLeft: 0,
		borderRight: 0,
		padding: '1rem 0',
		backgroundColor: 'white',
		marginRight: '0.6rem',
	}
};
