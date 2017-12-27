import React from 'react';
import AddDishForm from './AddDishForm';
import base from '../base';

class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.renderLogin = this.renderLogin.bind(this);

        // authentication
        this.authenticate = this.authenticate.bind(this);
        this.authHandler = this.authHandler.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            uid: null,
            owner: null
        }
    }

    componentDidMount() {
        base.onAuth((user) => {
            if(user) {
                this.authHandler(null, { user });
            }
        });
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

    authHandler(err, authData) {
        console.log("AuthData", authData);
        if (err) {
            console.error(err);
            return;
        }

        const storeRef = base.database().ref(this.props.storeId);

        storeRef.once('value', (snapshot) => {
            const data = snapshot.val() || {};
            if (!data.owner) {
                storeRef.set({
                    owner: authData.user.uid
                });
            }

            this.setState({
                uid: authData.user.uid,
                owner: data.owner || authData.user.uid
            });
        });

    }

    authenticate(platform) {
        console.log(`Trying to log in with ${platform}`);
        base.authWithOAuthPopup(platform, this.authHandler);
    }

    logout() {
        console.log("logging out");
        base.unauth();
        this.setState({
            uid: null
        });
    }

    renderLogin() {
        return(
            <nav className="login">
                <h2>Sign in to manage your inventory</h2>
                <button className="github" onClick={() => this.authenticate("github")}>Login in with Github</button>
                <button className="facebook" onClick={() => this.authenticate("facebook")}>Login in with Facebook</button>
                <button className="twitter" onClick={() => this.authenticate("twitter")}>Login in with Twitter</button>
            </nav>
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
        const logout = <button onClick={this.logout}>Logout</button>
        // Check if anyone logged in
        if(!this.state.uid) {
            return <div>{this.renderLogin()}</div>
        }

        if (this.state.uid !== this.state.owner) {
            return(
                <div>
                    <p> Sorry you aren't the owner of this store</p>
                    {logout}
                </div>
            )
        }

        return(
            <div>
                <h2>Inventory</h2>
                    {logout}
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
};

export default Inventory;
