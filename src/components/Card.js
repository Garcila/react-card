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
					postComments={postComments}
					postRePosted={postRePosted}
					postLikes={postLikes}
					postShares={postShares}
				/>
			</div>
		);
	}
}

const styles = {
  Card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
}

// state = {
//   postTitle: '',
//   postDescription: '',
//   authorName: '',
//   authorTwitter: '',
//   authorPhoto: '',
//   postComments: '',
//   postRePosted: 0,
//   postLikes: 0,
//   postShares: 0,
// }
