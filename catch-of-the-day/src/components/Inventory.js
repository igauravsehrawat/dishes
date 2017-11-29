import React from 'react';
import AddDishForm from './AddDishForm';

class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event);
    }

    renderInventory(id) {
        return(
            <div key={id}>
                <input value={this.props.dishes[id].name} type="text" placeholder="Enter name" onchange={this.handleChange} />
                <input value={this.props.dishes[id].price} type="text" placeholder="Enter price" onchange={this.handleChange} />
                <select value={this.props.dishes[id.status]} type="text" placeholder="Enter status" onchange={this.handleChange}>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
                <textarea value={this.props.dishes[id].desc} type="text" placeholder="Enter desc" onchange={this.handleChange} />
                <input value={this.props.dishes[id].image} type="text" placeholder="Enter image" onchange={this.handleChange} />
            </div>
        );
    }

    render() {
        console.log(this.props.dishes);
        const allDishesKey = Object.keys(this.props.dishes);
        return (

            <div>
                <p>Inventory</p>
                    {allDishesKey.map((key) => this.renderInventory(key))}
                <AddDishForm addDish={this.props.addDish}/>
                <button onClick={this.props.loadSamples}>Load Samples</button>
            </div>
        )
    }
}

export default Inventory;
