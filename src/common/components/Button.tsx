import * as React from 'react';
import Button from '@mui/material/Button';

type ButtonType = {
    children: JSX.Element,
}

const ButtonUik = ({ children, ...props } : ButtonType) => {
    return (
        <Button {...props}>{children}</Button>
    )
}


export default ButtonUik;