import React, { Component } from 'react'

export default class SearchField extends Component {
    handleChange = event => {
        // we need a reference to a method in App.js that sets the state of query
        this.props.setQueryProp(event.target.value)
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    name="query"
                    value={this.props.query}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
