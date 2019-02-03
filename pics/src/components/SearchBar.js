import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
            <div className="field">
            <label>Image Search</label>
                <form className="ui form">
                    <input type="text" onChange= {this.onInputChange}></input>
                </form>
                </div>
            </div>
        )
    }
}
export default SearchBar