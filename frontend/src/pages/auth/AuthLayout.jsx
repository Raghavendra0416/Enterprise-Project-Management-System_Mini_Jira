import { Box } from '@mui/material';
import background from '../../assets/background.png';

export default function AuthLayout({ children }) {
    return (
        <Box sx={{ position: 'relative', width: '100vw', height: '100dvh', overflow: 'hidden' }}>

            {/* Background Image */}
            <Box
                component="img"
                src={background}
                alt="Background"
                sx={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                }}
            />

            {/* Login Box overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                    zIndex: 1,
                    width: { xs: '90%', sm: '350px' },
                    padding: { xs: '24px', sm: '40px' },

                    // Mobile: centered both axes
                    // Desktop: vertically centered, right-aligned
                    top: '50%',
                    left: { xs: '50%', sm: 'auto' },
                    right: { xs: 'auto', sm: '10%' },
                    transform: {
                        xs: 'translate(-50%, -50%)',
                        sm: 'translateY(-50%)'
                    },
                }}
            >
                {children}
            </Box>

        </Box>
    );
}

