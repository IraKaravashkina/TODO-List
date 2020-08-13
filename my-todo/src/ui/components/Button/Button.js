import React from 'react';
import Button from '@material-ui/core';
// Style


function Button(props) {
    const { name, backgroundColor, color, fullWidth } = props;
    return (
        <button className={Button} style={{ backgroundColor, color, width: fullWidth ? '100%' : 'auto' }}>
            {name}
        </button>
    );
}

export default Button;