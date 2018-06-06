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
						{postTitle}
						<span>
							{' '}
							{authorTwitter} - {datePosted}
						</span>
					</p>
					<p>{postTitle}</p>
					<p>`author: @${authorTwitter}`</p>
				</div>
			</div>
		);
	}
}

const styles = {
	cardHeader: {
      display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'flex-start',
      maxWidth: '50rem',
      fontFamily: 'monospace',
      // padding: '1rem'
	},
	cardInfo: {
    textAlign: 'left',
	},
	logo: {
		width: '6rem',
	}
};
