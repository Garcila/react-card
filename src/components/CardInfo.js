import React, { Component } from 'react'

export default class CardInfo extends Component {
  render() {
    const {postTitle,postDescription} = this.props;
    return (
      <div style={styles.CardInfo}>
        <h4>{postTitle}</h4>
        <p style={styles.paragraph}>{postDescription}</p>
      </div>
    )
  }
}


const styles = {
  CardInfo: {
    textAlign: 'left',
    border: '1px solid #939393',
    borderTop: 0,
    borderRadius: '0 0 0.5rem 0.5rem',
    marginLeft: '4rem',
    width: '60%',
    padding: '1rem',
  },
  paragraph: {
    color: '#939393'
  }
}