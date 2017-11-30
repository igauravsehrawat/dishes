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

        this.addDish = this.addDish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);

        this.addToOrder = this.addToOrder.bind(this);
        this.removeFromOrder = this.removeFromOrder.bind(this);

        this.updateDish = this.updateDish.bind(this);
        this.deleteDish = this.deleteDish.bind(this);

        this.state = {
            dishes: {},
            order: {}
        }
    }

    componentWillMount() {
        this.ref = base.syncState(`${this.props.params.storeId}/dishes`, {
            context: this,
            state: 'dishes'
        });
        const localStorageRef = localStorage.getItem(`${this.props.params.storeId}`);
        if (localStorageRef) {
            this.setState({
                order: JSON.parse(localStorageRef)
            });
        }
    }

    componentWillUnmount() {
        this.removeBindings(this.ref);
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem(`${this.props.params.storeId}`, JSON.stringify(nextState.order));
    }

    updateDish(key, updatedDish) {
        var dishes = {...this.state.dishes};
        dishes[key] = updatedDish;
        this.setState({dishes});
    }

    deleteDish(key){
        var dishes = {...this.state.dishes};
        dishes[key] = null;
        this.setState({dishes});
    }

    removeFromOrder(key) {
        var order = {...this.state.order};
        delete order[key];
        this.setState({order});
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
                <Order
                    dishes={this.state.dishes}
                    order={this.state.order}
                    removeFromOrder={this.removeFromOrder}
                    params={this.props.params}
                />
                <Inventory
                    addDish={this.addDish}
                    loadSamples={this.loadSamples}
                    dishes={this.state.dishes}
                    updateDish={this.updateDish}
                    deleteDish={this.deleteDish}
                />
            </div>
        )
    }
}

export default App;
