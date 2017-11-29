import React from 'react';
import AddDishForm from './AddDishForm';

class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, key) {
        const dish = this.props.dishes[key];
        const updatedDish = {
            ...dish,
            [event.target.name]: event.target.value
        };
        this.props.updateDish(key, updatedDish);
    }

    renderInventory(id) {
        return(
            <form key={id} className="fish-edit">
                <input name="name" value={this.props.dishes[id].name} type="text" placeholder="Enter name" onChange={(e) => this.handleChange(e, id)} />
                <input name="price" value={this.props.dishes[id].price} type="text" placeholder="Enter price" onChange={(e) => this.handleChange(e, id)} />
                <select name="status" value={this.props.dishes[id.status]} type="text" placeholder="Enter status" onChange={(e) => this.handleChange(e, id)}>
                    <option value="available">Available</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" value={this.props.dishes[id].desc} type="text" placeholder="Enter desc" onChange={(e) => this.handleChange(e, id)} />
                <input name="image" value={this.props.dishes[id].image} type="text" placeholder="Enter image" onChange={(e) => this.handleChange(e, id)} />
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
