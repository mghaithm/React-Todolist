import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = { todos: [] }
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
}

remove(id){
    this.setState({todos: this.state.todos.filter(t => (t.id !== id))})
}

create(newTodo) {
this.setState({todos: [...this.state.todos, newTodo]})
}

update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(
        todo => {
            if (todo.id === id){ return{...todo, task: updatedTask} }
            return todo });
            this.setState({ todos: updatedTodos});
}

toggleCompleted(id){
    const updatedTodos = this.state.todos.map(
        todo => {
            if (todo.id === id){ return{...todo, completed: !todo.completed} }
            return todo });
            this.setState({ todos: updatedTodos});
}

renderTodos() {
    return(
    this.state.todos.map(todo => (
        <Todo  
        key={todo.id} 
        id={todo.id} 
        task={todo.task}  
        completed={todo.completed}
        removeTodo={this.remove} 
        updateTodo={this.update}
        toggleTodo={this.toggleCompleted}
        />
    ))
    )
}
    render() {
        return (
            <div className='TodoList'>
                <h1>Todo List<span>A Simple React Todo List App!</span></h1>
                <ul> {this.renderTodos()} </ul>
                <NewTodoForm createTodo={this.create}/>
            </div>
        );
    }
}

export default TodoList;