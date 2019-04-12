import axios from 'axios'

//const URL = 'http://localhost:3003/api/todos'
const URL = 'http://localhost:3000/items';

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description;
        const search = `q=${description}`;
        const request = axios.get(`${URL}?${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

export const add = (description) => {
    return dispatch => {
        let dataAtual = new Date().toLocaleDateString("pt-BR");
        axios.post(URL, {"description": description ,"createdAt": dataAtual})
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        console.log('Done: ' + `${URL}/${todo.id}`);
        axios.put(`${URL}/${todo.id}`, {...todo, done: true})
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        console.log('Pending: ' + `${URL}/${todo.id}`);
        axios.put(`${URL}/${todo.id}`, {...todo, done: false})
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo.id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{type: 'TODO_CLEAR'}, search()]
}