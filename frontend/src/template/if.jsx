import React from 'react'

export default props => {
    return props.test !== 'true' ? props.children : false;
}