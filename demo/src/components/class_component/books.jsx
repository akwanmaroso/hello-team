import React, { Component } from "react";

export default class Books extends Component {
    render() {
        console.log(this.props);        
        return (
            <div>
                <h1>Class Component: Books</h1>
                {
                    this.props.data.map(book => {
                        return (
                        <li key={book.id}>{book.name}</li>
                        )
                    })
                }
            </div>
        )
    }
}