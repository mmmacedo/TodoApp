import React from 'react'
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => {
    const keyHandler = (event) => {
        if (event.key === 'Enter') {
            event.shiftKey ? props.handleSearch() : props.handleAdd();
        } else if (event.key === 'Escape') {
            props.handleClear();
        }
    }
    return (
        <div role='form' className='todoForm'>

            <Grid cols='9 9 9 9'>
                <input id="description" className="form-control"
                       placeholder="Adcione uma tarefa"
                       onChange={props.handleChange}
                       onKeyUp={keyHandler}
                       value={props.description}/>
            </Grid>

            <Grid cols='1 1 1 1'>
                <IconButton style="primary" icon="plus"
                            onClick={props.handleAdd}/>
            </Grid>

            <Grid cols='1 1 1 1'>
                <IconButton style="info" icon="search"
                            onClick={props.handleSearch}/>
            </Grid>

            <Grid cols='1 1 1 1'>
                <IconButton style="default" icon="close"
                            onClick={props.handleClear}/>
            </Grid>

        </div>
    )
}