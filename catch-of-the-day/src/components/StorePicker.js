import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                { /* this is a comment */}
                <input type="text" placeholder="Enter the store name" required/>
                <button type="submit">Click here -></button>
            </form>
        )
    }
}

export default StorePicker;
