import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import dishes from '../sample-dishes'
import Dish from './Dish';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            dishes: {},
            order: {}
        }
        this.addDish = this.addDish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
    }

    addDish(dish) {
        // react suggest to maintain a different state
        const dishes = {...this.state.dishes};
        const timestamp = Date.now();
        dishes[`dish-${timestamp}`] = dish;
        // this.setState({dishes: dishes})
        this.setState({dishes});
    }

    loadSamples() {
        this.setState({dishes});
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh SeaFood Market"/>
                    <ul className="list-of-fishes">
                        {
                            Object.keys(this.state.dishes)
                                .map(key => <Dish key={key} details={this.state.dishes[key]}/>)
                        }
                    </ul>
                </div>
                <Order />
                <Inventory addDish={this.addDish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App;
