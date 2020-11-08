import React, { Component } from "react";

export default class ViewCounter extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}