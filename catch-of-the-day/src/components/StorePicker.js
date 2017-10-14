import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                { /* this is a comment */}
                <h1>Enter a Store</h1>
                <input type="text" placeholder="Store name" required/>
                <button type="submit">Click here -></button>
            </form>
        )
    }
}

export default StorePicker;
