import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Form({ isLogin }) {
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');

    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const validateFirstName = (name) => {
        const regex = /^[A-Za-z]+$/;
        return regex.test(name);
    };

    useEffect(() => {
        if (firstName.trim() !== '' && !validateFirstName(firstName)) {
            setFirstNameError('First name can only contain alphabets')
        } else {
            setFirstNameError('');
        }
    }, [firstName]);

    useEffect(() => {
        if (lastName.trim() !=='' && !validateFirstName(lastName)){
            setLastNameError('Last name can only contain alphabets')
        } else {
            setLastNameError('');
        }
    }, [lastName])



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
            <h3 style={{ marginBottom: '5px', marginTop: '5px' }}>{isLogin ? 'Login Form' : 'Registration Form'}</h3>
            <form>
                {!isLogin && (
                    <Box sx={{ display: 'flex', gap: '10px', marginBottom: '2px' }}>
                        <TextField label="First Name" variant="outlined" fullWidth margin="normal" error={Boolean(firstNameError)} value={firstName}
                        onChange={(e) => {setFirstName(e.target.value)}}
                        helperText={firstNameError}
                        onBlur={() => {if (firstName.trim() === '') {setFirstNameError('First name cannot be empty');}}}
                        />
                        <TextField label="Last Name" variant="outlined" fullWidth margin="normal" 
                        value={lastName} 
                        helperText={lastNameError} error={Boolean(lastNameError)}
                        onBlur={() => {
                            if (lastName.trim() === '') {
                              setLastNameError('Last name cannot be empty');
                            }
                          }}
                          onChange={(e) => setLastName(e.target.value)}/>
                    </Box>
                )}

                <TextField label="Email" variant="outlined" fullWidth margin="normal" />
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="password"
                />
                {!isLogin && (
                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                    />
                )}
                <Button style={{ marginTop: '17px', marginBottom: '7px' }} variant="contained" color="secondary" type="submit" sx={{ fontWeight: 'bold' }}>
                    {isLogin ? 'Login' : 'Register'}
                </Button>
            </form>
        </Box>
    );
}

export default Form;

/** reference for regex - https://regexr.com/ */
/** refernce for form validation https://stackoverflow.com/questions/41296668/how-do-i-add-validation-to-the-form-in-my-react-component */