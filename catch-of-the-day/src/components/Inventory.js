import React from 'react';
import AddDishForm from './AddDishForm';

class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    handleChange(event, key) {
        const dish = this.props.dishes[key];
        const updatedDish = {
            ...dish,
            [event.target.name]: event.target.value
        };
        this.props.updateDish(key, updatedDish);
    }

    onClick(event, key) {
        event.preventDefault();
        this.props.deleteDish(key);
    }

    renderInventory(key) {
        return(
            <form key={key} className="fish-edit">
                <input name="name" value={this.props.dishes[key].name} type="text" placeholder="Enter name" onChange={(e) => this.handleChange(e, key)} />
                <input name="price" value={this.props.dishes[key].price} type="text" placeholder="Enter price" onChange={(e) => this.handleChange(e, key)} />
                <select name="status" value={this.props.dishes[key.status]} type="text" placeholder="Enter status" onChange={(e) => this.handleChange(e, key)}>
                    <option value="available">Available</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" value={this.props.dishes[key].desc} type="text" placeholder="Enter desc" onChange={(e) => this.handleChange(e, key)} />
                <input name="image" value={this.props.dishes[key].image} type="text" placeholder="Enter image" onChange={(e) => this.handleChange(e, key)} />
                <button name="delete" onClick={(e) => this.onClick(e, key)}>Delete</button>
            </form>
        );
    }

    render() {
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
