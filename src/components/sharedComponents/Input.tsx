import React, { forwardRef } from 'react';
import { TextField } from '@mui/material';

interface InputType{
    name: string;
    placeholder: string;
}

export const Input = forwardRef((props:InputType, ref) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            inputRef={ref}
            fullWidth
            type='text'
            {...props}
        ></TextField>
    );
});

export const Input2 = forwardRef((props: InputType, ref) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            inputRef={ref}
            fullWidth
            type="password"
            {...props}
        ></TextField>
    );
});