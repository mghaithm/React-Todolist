import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value})
    }
    handleSubmit(evt){
         evt.preventDefault();
         this.props.createTodo({...this.state, id: uuidv4(), completed: false});
         this.setState({task: ""})
     }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="NewTodoForm">
                <label htmlFor='task'>New Todo</label>
                <input type="text" placeholder="new Todo" id="task" value={this.state.task} name="task" onChange={this.handleChange}/>
                <button>Add Todo!</button>
            </form>
        );
    }
}

export default NewTodoForm;