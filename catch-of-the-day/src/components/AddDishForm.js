import React from 'react';

class AddDishForm extends React.Component {
    createDish(event) {
        event.preventDefault();
        //
        const dish = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value
        }
        console.log(dish);
        this.props.addDish(dish);
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={(e) => this.createDish(e)}>
                <input ref={(input) => this.name = input} type="text" placeholder="Enter name" />
                <input ref={(input) => this.price = input} type="text" placeholder="Enter price" />
                <select ref={(input) => this.status = input} placeholder="Enter Status">
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
                <textarea ref={(input) => this.desc = input} placeholder="Enter desc" />
                <input ref={(input) => this.image = input} type="text" placeholder="Enter image" />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

AddDishForm.propTypes = {
    addDish: React.PropTypes.func
}

export default AddDishForm;
