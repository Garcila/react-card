import React, { Component } from 'react';

export default class CardHeader extends Component {
	render() {
		const { datePosted, postTitle, authorTwitter } = this.props;
		return (
			<div style={styles.cardHeader}>
				<img
					src="https://i.imgur.com/ndkJAXX.png"
					alt="logo"
					style={styles.logo}
				/>
				<div style={styles.cardInfo}>
					<p>
						<span style={{fontWeight: 'bold'}}>{postTitle} </span>
						<span style={{color: 'grey'}}>
							{' '}
							{authorTwitter} - {datePosted}
						</span>
					</p>
					<p>{postTitle}</p>
					<p>author: <a style={styles.linkTwitter} href={`https://twitter.com/${authorTwitter}`}>{authorTwitter}</a></p>
				</div>
			</div>
		);
	}
}

const styles = {
	cardHeader: {
      display: 'flex',
      maxWidth: '50rem',
      fontFamily: 'monospace',
	},
	cardInfo: {
    textAlign: 'left',
  },
  linkTwitter: {
    textDecoration: 'none',
  },
	logo: {
    alignSelf: 'center',
    width: '4rem',
    height:'3rem',
    padding:'0.5rem'
	}
};
