import React from 'react';
import { formatPrice } from '../helpers';

class Dish extends React.Component {
    render() {
        const { details } = this.props;
        return (
            <li>
                <img src={details.image} alt={details.name} />
                <h3 className="fish-name">{details.name}</h3>
                <span className="price">{formatPrice(details.price)}</span>
                <p>{details.desc}</p>
                <button>Add to Order</button>
            </li>
        )
    }
}

export default Dish;
