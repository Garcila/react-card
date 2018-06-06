import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';

class App extends Component {
  state = {
    datePosted: 'Jun 28 - 2018',
    postTitle: 'Ipsam molestiae, nobis soluta.',
    postDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    authorName: 'Adipisicing Elit',
    authorTwitter: '@aelit',
    authorPhoto: 'https://i.imgur.com/pxsIVjo.png',
    postComments: 0,
    postRePosted: 0,
    postLikes: 0,
    postShares: 0,
  }
  render() {
    return (
      <div className="App">
        <Card state={this.state}/>
      </div>
    );
  }
}

export default App;
