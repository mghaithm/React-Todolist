import React, { Component } from 'react';
import './Todo.css';


class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }

        this.handleRemove = this.handleRemove.bind(this);
        this.editToggle = this.editToggle.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }

    handleRemove(){
        this.props.removeTodo(this.props.id)
       
    }

    editToggle() {
        this.setState({isEditing: !this.state.isEditing});
    }

    handleUpdate(evt){
        evt.preventDefault();
        // take new task data and pass it up to parent
        this.props.updateTodo(this.props.id,this.state.task);
        this.setState({isEditing: false});


    }
    
    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }
    
    toggleCompleted(){
        this.props.toggleTodo(this.props.id)
    }

  
    render() {
        let result;
        
        if(this.state.isEditing){
        result = (
            <div className="Todo">
                <form onSubmit={this.handleUpdate} className="Todo-edit-form">
                    <input type="text" value={this.state.task} name="task" onChange={this.handleChange}/>
                    <button>Save</button>
                </form>
            </div>
        )
        } else {
            result =(
            <div className="Todo">
                <li onClick={this.toggleCompleted} className={this.props.completed? 'Todo-task completed' : 'Todo-task'}>{this.props.task}</li>
                <div className="Todo-buttons">
                <button onClick={this.editToggle}><i className='fas fa-pen' /></button>
                <button onClick={this.handleRemove}>X</button>
                </div>
            </div>)
        }
        return result;
    }
}

export default Todo;