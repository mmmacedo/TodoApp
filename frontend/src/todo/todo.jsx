import React, {Component} from 'react';
import Axios from 'axios';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos/';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {description: '', list: []};
    }

    handleChange(event) {
        this.setState({...this.state, description: event.target.value});
    }

    handleAdd(event) {
        const description = this.state.description;
        Axios.post(URL, {description }).then(
            resp => console.log('Funciona')
        );
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastros'/>
                <TodoForm description={this.state.description}
                          handleChange={this.handleChange}
                          handleAdd={this.handleAdd}/>
                <TodoList/>
            </div>
        )
    }
}