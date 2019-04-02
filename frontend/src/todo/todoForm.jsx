import React from 'react'
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => (
    <div role='form' className='todoForm'>

        <Grid cols='9 9 9 9'>
            <input id="description" className="form-control"
                   placeholder="Adcione uma tarefa"
                   onChange={props.handleChange}
                   value={props.description}/>
        </Grid>

        <Grid cols='3 3 3 3'>
            <IconButton style="primary" icon="plus"
                        onClick={props.handleAdd}/>
        </Grid>

    </div>
)