import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';

function Rough() {
    return (
        <AppBar position="static" color="default" elevation={1}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                {/* Left side - Menu icon (mobile) + Search */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: '#f1f1f1',
                            borderRadius: '8px',
                            px: 1,
                            width: { xs: '150px', sm: '300px' }
                        }}
                    >
                        <SearchIcon sx={{ color: 'gray', mr: 1 }} />
                        <InputBase placeholder="Search projects/tasks..." fullWidth />
                    </Box>
                </Box>

                {/* Right side - Notifications, Settings, Profile */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton>
                        <Badge badgeContent={3} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    <IconButton>
                        <SettingsIcon />
                    </IconButton>

                    <Avatar sx={{ width: 36, height: 36, ml: 1 }}>R</Avatar>
                </Box>

            </Toolbar>
        </AppBar>
    );
}

export default Rough;