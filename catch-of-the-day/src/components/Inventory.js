import React from 'react';
import AddDishForm from './AddDishForm';

class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target);
        const key = event.target.name;
        const value = event.target.value;
        var dishes = {...this.props.dishes};
        dishes[key] = value;
        console.log(key, "::", dishes[key]);
        this.setState({
            dishes
        });
    }

    renderInventory(id) {
        return(
            <form key={id} className="fish-edit">
                <input name="name" value={this.props.dishes[id].name} type="text" placeholder="Enter name" onChange={this.handleChange} />
                <input name="price" value={this.props.dishes[id].price} type="text" placeholder="Enter price" onChange={this.handleChange} />
                <select name="status" value={this.props.dishes[id.status]} type="text" placeholder="Enter status" onChange={this.handleChange}>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
                <textarea name="desc" value={this.props.dishes[id].desc} type="text" placeholder="Enter desc" onChange={this.handleChange} />
                <input name="image" value={this.props.dishes[id].image} type="text" placeholder="Enter image" onChange={this.handleChange} />
            </form>
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
