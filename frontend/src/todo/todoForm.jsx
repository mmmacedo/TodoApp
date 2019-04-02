import React from 'react'
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => (
    <div role='form' className='todoForm'>

        <Grid cols='10 10 10 10'>
            <input id="description" className="form-control"
                   placeholder="Adcione uma tarefa"
                   onChange={props.handleChange}
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

    </div>
)