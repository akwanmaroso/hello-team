import React, { Component } from "react";

export default class Unmount extends Component {
    componentWillUnmount() {
        console.log(`Unmount terjadi... `);
    }
    render() {
        return (
            <h1>WillUnmount</h1>
        )
    }
}