import React, {Component} from 'react';
import Axios from 'axios';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);

        this.state = {description: '', list: []};

        this.refresh();
    }

    refresh() {
        Axios.get(`${URL}?sort=-createdAt`).then(
            resp => this.setState({...this, description: '', list: resp.data})
        );
    }

    handleChange(event) {
        this.setState({...this.state, description: event.target.value});
    }

    handleAdd(event) {
        const description = this.state.description;
        Axios.post(URL, {description}).then(
            resp => this.refresh()
        );
    }

    handleRemove(todo) {
        Axios.delete(`${URL}/${todo._id}`).then(
            resp => this.refresh()
        );
    }

    handleMarkAsDone(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true}).then(
            resp => this.refresh()
        );
    }

    handleMarkAsPending(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false}).then(
            resp => this.refresh()
        );
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastros'/>
                <TodoForm description={this.state.description}
                          handleChange={this.handleChange}
                          handleAdd={this.handleAdd}/>
                <TodoList list={this.state.list}
                          handleRemove={this.handleRemove}
                          handleMarkAsPending={this.handleMarkAsPending}
                          handleMarkAsDone={this.handleMarkAsDone}/>
            </div>
        )
    }
}