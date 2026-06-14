// Register.jsx
import AuthLayout from './AuthLayout';
import { Link as RouterLink } from 'react-router';
import { Box, TextField, Button, Typography, Link as MuiLink } from '@mui/material';

function Register() {
    return (
        <AuthLayout>
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
                Register New User
            </Typography>

            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <TextField
                    label="Username"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                />

                <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                />

                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth
                />

                <Button variant="contained" color="primary" fullWidth sx={{ mt: 1, py: 1 }}>
                    Create New Accounxt
                </Button>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, typography: 'body2' }}>
                    <MuiLink component={RouterLink} to="/login" underline="hover">
                        Back to Sign In
                    </MuiLink>
                    <MuiLink href="#" underline="hover">Sign in issues?</MuiLink>
                </Box>
            </Box>
        </AuthLayout>
    );
}

export default Register;