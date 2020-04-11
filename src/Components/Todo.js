import React, { Component } from 'react';

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
    }
    delItem = (e) => {
        let id = e.target.id;
        this.state.todoItem.splice(id, 1);
        this.setState({ todoItem: this.state.todoItem })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Todo App</h1>
                <form onSubmit={this.addHandler}>
                    <input type="text" value={this.state.text} onChange={this.handlerChange}></input>
                    <input type="submit"></input>
                </form>
                {this.state.todoItem.map((el, i) => {
                    return (
                        <li key={i}>{el} <span id={i} onClick={this.delItem}><button >Delete</button></span> </li>
                    )
                })

                }
            </div>
        )
    }
}
export default Todo