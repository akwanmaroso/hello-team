import React, { Component } from "react";
import Books from "./books";

export default class ListBooks extends Component {
    constructor() {
        super();
        // this.state = {
        //     books: [
        //         {
        //             "id": 1,
        //             "name": "Joker Witch"
        //         },
        //         {
        //             "id": 2,
        //             "name": "Docker Witch"
        //         },
        //     ]
        // }
        console.log("Constructor");
    }

    getSnapshotBeforeUpdate() {
        console.log("Should compenent Update ?");
    }

    componentDidMount() {
        console.log("Component Did Mount");
    }
    
    componentDidUpdate() {
        console.log("Component Did Update");
    }
    
    componentWillUnmount() {
        console.log("Component Will Unmount");
    }
    // handleAddBook = (e) => {
    //     e.preventDefault()
    //     this.setState({
    //         books: [...this.state.books, {
    //             "name": e.target[0].value
    //         }]
    //     })
    // }


    render() {
        console.log("this render");
        return (
            <div>
                <h1>Class Component: List</h1>
                {/* <form onSubmit={this.handleAddBook}>
                    <input type="text" />
                    <button type="submit">Add</button>
                </form> */}
                {/* <Books data={this.state.books}/> */}
            </div>
        )
    }
}