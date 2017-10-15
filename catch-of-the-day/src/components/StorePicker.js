import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);

    // }

    goToStore(event) {
        event.preventDefault();
        const storeValue = this.storeInput.value;
        this.context.router.transitionTo(`/store/${storeValue}`);
    }
    render() {
        return (
            <form className="store-selector" onSubmit={ (e) => {this.goToStore(e)}}>
                { /* this is a comment */}
                <h1>Enter a Store</h1>
                <input type="text" placeholder="Store name" required defaultValue={getFunName()}
                    ref={(input) => {this.storeInput = input}}/>
                <button type="submit">Click here -></button>
            </form>
        )
    }
}

export default StorePicker;

// Using context, see note in documentation
StorePicker.contextTypes = {
    router: React.PropTypes.object
}
