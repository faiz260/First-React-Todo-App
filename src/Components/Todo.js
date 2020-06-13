import React, { Component } from 'react';
import {TextField, Button} from '@material-ui/core/';

class Todo extends Component {
    state = {
        text: "",
        todoItem: []
    }
    handlerChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    addHandler = (event) => {
        event.preventDefault();
        const mergedTodos = [...this.state.todoItem, this.state.text]
        this.setState({
            todoItem: mergedTodos,
            text: ""
        })
        // console.log(`Item ${id} added`)
    }
    delItem = (e) => {
        let id = e.target.id;
        this.state.todoItem.splice(id, 1);
        this.setState({ todoItem: this.state.todoItem })
        console.log(e.target.id)
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Todo App</h1>
                <form >
                    {/* <input type="text" value={this.state.text} onChange={this.handlerChange}></input> */}
                    <TextField  width="10" id="filled-basic" label="Enter your todo" variant="filled" value={this.state.text} onChange={this.handlerChange} />
                    <Button variant="contained" onClick={this.addHandler} >Add</Button>
                    {/* <input type="submit"></input> */}
                </form>
                {this.state.todoItem.map((el, i) => {
                    return (
                        <li key={i}>{el} <span id={i} onClick={this.delItem}> <Button variant="contained" color="secondary" >Delete</Button></span> </li>
                    )
                })
                }
            </div>
        )
    }
}
export default Todo