// Login.jsx
import AuthLayout from './AuthLayout';
import { validateEmail, validatePassword } from '../../utils/validators';
import { Link as RouterLink } from 'react-router';
import { Box, TextField, Button, Typography, Link as MuiLink, Snackbar, Alert, Fade } from '@mui/material';
import { useState } from 'react';

function Login() {
    // State to manage the Snackbar
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        // Extract the data using FormData
        const data = new FormData(form);
        const email = data.get('email');
        const password = data.get('password');
        console.log(email, password);

        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        console.log(emailError, passwordError);

        if (emailError || passwordError) {
            setSnackbarMessage(emailError || passwordError);
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
        <AuthLayout>
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
                Login
            </Typography>

            {/* Form */}
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <TextField
                    label="Email ID"
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
                    required
                />

                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 1, py: 1 }}>
                    Submit
                </Button>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, typography: 'body2' }}>
                    <MuiLink href="#" underline="hover">Forgot Password</MuiLink>
                    <MuiLink component={RouterLink} to="/register" underline="hover">
                        Register New User
                    </MuiLink>
                </Box>
            </Box>

            {/* Error Snackbar */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} // Changed to bottom-left
                TransitionComponent={Fade} // Added the Fade transition
            >
                <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </AuthLayout>
    );
}

export default Login;