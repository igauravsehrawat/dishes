import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            dishes: {},
            order: {}
        }
        this.addDish = this.addDish.bind(this);
    }

    addDish(dish) {
        const dishes = {...this.state.dishes};
        const timestamp = Date.now();
        dishes[`dish-${timestamp}`] = dish;
        // this.setState({dishes: dishes})
        this.setState({dishes});
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh SeaFood Market"/>
                </div>
                <Order />
                <Inventory addDish={this.addDish}/>
            </div>
        )
    }
}

export default App;
