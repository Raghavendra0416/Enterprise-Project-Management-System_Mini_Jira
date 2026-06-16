import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

// Appbar icons
import { Avatar, InputBase, Tooltip } from "@mui/material";
import { DarkMode, Search } from "@mui/icons-material";
//Dashboard Icons
import { Dashboard, Folder, Task, Group, Assessment, CalendarMonth, Settings as SettingsIcon } from "@mui/icons-material";

import { useState } from "react"


function Navbar() {
    const menuItems = [
        { label: "Dashboard", icon: <Dashboard /> },
        { label: "Projects", icon: <Folder /> },
        { label: "Tasks", icon: <Task /> },
        { label: "Team", icon: <Group /> },
        { label: "Reports", icon: <Assessment /> },
        { label: "Calendar", icon: <CalendarMonth /> },
        { label: "Settings", icon: <SettingsIcon /> },
    ];

    //Variables to control how much drawer can expand and close.
    const expandedWidth = 240;
    const collapsedWidth = 64;

    //State to control the opening of drawer
    const [open, setOpen] = useState(false);

    //Condition to check if the currentDrawerWidth is open or close.
    const currentDrawerWidth = open
        ? expandedWidth
        : collapsedWidth;
    return <>
        <Box>
            <AppBar position="fixed" sx={{ backgroundColor: "green", zIndex: (theme) => theme.zIndex.drawer + 1, }}>
                <Toolbar>
                    <IconButton onClick={() => setOpen(!open)}>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap>
                        Mini Jira
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                        {/* Search Icon */}
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "white",
                            px: 1,
                            borderRadius: 1,
                        }}>
                            <Search />
                            <InputBase placeholder="Search..." sx={{ ml: 1 }} />
                        </Box>

                        {/* Theme */}
                        <IconButton>
                            <DarkMode />
                        </IconButton>

                        {/* Settings */}
                        <IconButton>
                            <SettingsIcon />
                        </IconButton>

                        {/* User */}
                        <Avatar>R</Avatar>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Using empty Toolbar to provide the spacing */}
            <Toolbar />

            {/* Drawer */}
            <Box sx={{ display: "flex" }}>
                <Drawer variant="permanent" anchor="left"
                    sx={{

                        width: currentDrawerWidth,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: currentDrawerWidth,
                            boxSizing: "border-box",
                            backgroundColor: "#7d7070",
                            transition: "width 0.3s ease",
                        }
                    }}>
                    <Toolbar />
                    {/* <Toolbar /> Not needed for now -> provides Space */}
                    {/* Dashboard Items */}
                    <List>
                        {menuItems.map((item) => (
                            <Tooltip key={item.label} title={item.label} placement="right">
                                <ListItemButton
                                    sx={{
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 2 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>

                                    {open && <ListItemText primary={item.label} />}
                                </ListItemButton>
                            </Tooltip>
                        ))}
                    </List>
                </Drawer>

                {/* Main Content */}
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Typography>
                        Main content goes here
                    </Typography>
                </Box>
            </Box>

        </Box>
    </>
}

export default Navbar;