import React from 'react';
import AddDishForm from './AddDishForm';

class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.renderLogin = this.renderLogin.bind(this);
        this.state ={
            uid: null,
            owner: null
        }
    }

    handleChange(event, key) {
        const dish = this.props.dishes[key];
        const updatedDish = {
            ...dish,
            [event.target.name]: event.target.value
        };
        this.props.updateDish(key, updatedDish);
    }

    deleteItem(event, key) {
        event.preventDefault();
        this.props.deleteDish(key);
    }

    renderLogin() {
        return(
            <div>
                <h2>Sign in to manage your inventory</h2>
                <button className="github" onClick={this.authenticate}>Github</button>
                <button className="facebook" onClick={this.authenticate}>Facebook</button>
                <button className="twitter" onClick={this.authenticate}>Twitter</button>
            </div>
        )
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
                <button name="delete" onClick={(e) => this.deleteItem(e, key)}>Delete</button>
            </form>
        );
    }

    render() {
        const allDishesKey = Object.keys(this.props.dishes);
/*
        if(this.state.uid === this.state.owner) {
            return(
                <div>
                    {this.renderLogin()}
                <div>
            );
        }
*/
        return(

            <div>
                <p>Inventory</p>
                    {allDishesKey.map((key) => this.renderInventory(key))}
                <AddDishForm addDish={this.props.addDish}/>
                <button onClick={this.props.loadSamples}>Load Samples</button>
            </div>
        )
    }
}

Inventory.propTypes = {
    dishes: React.PropTypes.object.isRequired,
    addDish: React.PropTypes.func.isRequired,
    updateDish: React.PropTypes.func.isRequired,
    deleteDish: React.PropTypes.func.isRequired,
    loadSamples: React.PropTypes.func.isRequired
}

export default Inventory;
