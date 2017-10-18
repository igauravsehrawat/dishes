import React from 'react';
import AddDishForm from './AddDishForm';

class Inventory extends React.Component {
    render() {
        return (
            <div>
                <p>Inventory</p>
                <AddDishForm addDish={this.props.addDish}/>
            </div>
        )
    }
}

export default Inventory;
