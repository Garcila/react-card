import React, { Component } from 'react';
import './App.css';
import data from './fakeData/fakeData';
import Card from './components/Card';

class App extends Component {
	state = {
		cards: []
	};

	componentDidMount() {
		this.setState({ cards: data });
	}

	increase = (posted, action) => {
		const cards = [...this.state.cards];

		// find the index of the selected card in the array
		const index = this.state.cards.findIndex(
			card => card.datePosted === posted
		);

		// create string post + action to increase count of
		const dataAction = `post${action}`;
		cards[index][dataAction] += 1;

		// increase the value of color red in clicked icon
		cards[index].red += 10;
		this.setState({ cards: cards });
	};

	render() {
		const cards =
			this.state.cards &&
			this.state.cards.map(card => (
				<Card
					key={card.datePosted}
					state={card}
					increase={this.increase}
				/>
			));
		return (
			<div className="App" style={styles.App}>
				{cards}
			</div>
		);
	}
}

const styles = {
	App: {
		marginLeft: '1rem',
		display: 'flex',
		flexWrap: 'wrap'
	}
};

export default App;
