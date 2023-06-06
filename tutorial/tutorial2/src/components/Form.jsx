import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Form() {
    return (
        <Box sx={{
            width: '300px',
            margin: 'auto',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            textAlign: 'center',
            fontWeight: 'bold'
        }}>
            <h3 style={{ marginBottom: '5px' }}>Registration Form</h3>
            <form>
                <Box sx={{ display: 'flex', gap: '10px', marginBottom: '2px' }}>
                    <TextField label="First Name" variant="outlined" fullWidth margin="normal" />
                    <TextField label="Last Name" variant="outlined" fullWidth margin="normal" />
                    </Box>

                <TextField label="Email" variant="outlined" fullWidth margin="normal" />
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="password"
                />
                <TextField
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="password"
                    style={{ marginBottom: '20px' }}
                />
                <Button variant="contained" color="secondary" type="submit" sx={{ fontWeight: 'bold' }}>
                    Register
                </Button>
            </form>
        </Box>
    );
}

export default Form;


/** reference -
 * https://mui.com/material-ui/react-text-field/
 */