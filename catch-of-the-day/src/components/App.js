import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import dishes from '../sample-dishes';
import Dish from './Dish';
import base from '../base';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            dishes: {},
            order: {}
        }
        this.addDish = this.addDish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
    }

    addDish(dish) {
        // react [suggest] to maintain a different state
        const dishes = {...this.state.dishes};
        const timestamp = Date.now();
        dishes[`dish-${timestamp}`] = dish;
        // this.setState({dishes: dishes})
        this.setState({dishes});
    }

    loadSamples() {
        this.setState({dishes});
    }

    addToOrder(key) {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({order});
    }

    componentWillMount(nextProps, nextState) {
        this.ref = base.syncState('handsome-sparkling-nuclei', {
            context: this,
            state: 'dishes'
        });
    }

    componentWillUnmount() {
        this.removeBindings(this.ref);
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Food Market"/>
                    <ul className="list-of-fishes">
                        {
                            Object.keys(this.state.dishes)
                                .map(key => <Dish key={key} index={key} details={this.state.dishes[key]} addToOrder={this.addToOrder}/>)
                        }
                    </ul>
                </div>
                <Order dishes={this.state.dishes} order={this.state.order}/>
                <Inventory addDish={this.addDish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App;
