import React from 'react';

export default props => {
    if (props.hide) {
        return null;
    } else {
        return (
            <button className={"btn btn-" + props.style}
                    on-click={props.onclick}>
                <i className={"fa fa-" + props.icon}></i>
            </button>
        )
    }
}