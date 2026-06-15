// Register.jsx
import AuthLayout from './AuthLayout';
import { Link as RouterLink } from 'react-router';
import { Box, TextField, Button, Typography, Link as MuiLink, Snackbar, Alert } from '@mui/material';
import { validateUsername, validatePassword, validateEmail } from '../../utils/validators';
import { useState } from 'react';

function Register() {
    // State to manage the Snackbar
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        // Extract the data using FormData
        const data = new FormData(form);

        const username = data.get('username')
        const email = data.get('email');
        const password = data.get('password');
        console.log(username, email, password);

        const usernameError = validateUsername(username);
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        console.log(usernameError, emailError, passwordError);

        if (usernameError || emailError || passwordError) {
            if (usernameError && emailError && passwordError) {
                setSnackbarMessage(('Enter valid Username, Email ID & Password'));
            } else {
                setSnackbarMessage((usernameError || emailError || passwordError));
            }
            setOpenSnackbar(true);
            form.reset();
            return;
        }
        form.reset();
    }
    // Function to handle closing the Snackbar
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };
    return (
        <>
            <AuthLayout>
                <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
                    Register New User
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                    <TextField
                        label="Username"
                        name="username"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                    />

                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                    />

                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />

                    <Button type='submit' variant="contained" color="primary" fullWidth sx={{ mt: 1, py: 1 }}>
                        Create New Account
                    </Button>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, typography: 'body2' }}>
                        <MuiLink component={RouterLink} to="/login" underline="hover">
                            Back to Sign In
                        </MuiLink>
                        <MuiLink href="#" underline="hover">Sign in issues?</MuiLink>
                    </Box>
                </Box>
            </AuthLayout>

            {/* Error Snackbar */}
            {/* Snackbar moved entirely outside of AuthLayout so it is not affected by CSS transforms */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} // Changed to bottom-left
            >
                <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
}

export default Register;