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

    // NEW: track which menu item is active, so it can be highlighted
    const [activeIndex, setActiveIndex] = useState(0);

    //Condition to check if the currentDrawerWidth is open or close.
    const currentDrawerWidth = open
        ? expandedWidth
        : collapsedWidth;
    return <>
        <Box>
            <AppBar
                position="fixed"
                elevation={0} // CHANGED: removed default MUI shadow, using a subtle border instead for a flatter, more modern look
                sx={{
                    // CHANGED: green -> deep indigo, looks more like a professional SaaS product (Jira/Linear style)
                    backgroundColor: "#1E1B4B",
                    borderBottom: "1px solid rgba(255,255,255,0.08)", // NEW: subtle separation instead of a harsh shadow
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar>
                    <IconButton
                        onClick={() => setOpen(!open)}
                        sx={{
                            color: "rgba(255,255,255,0.85)", // NEW: explicit icon color for contrast on dark bg
                            mr: 1,
                            "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" }, // NEW: visible hover feedback
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            fontWeight: 600, // NEW: slightly bolder brand text
                            letterSpacing: 0.3, // NEW: small letter spacing for a cleaner logotype feel
                            color: "#fff",
                        }}
                    >
                        Mini Jira
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        {/* Search Bar */}
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            // CHANGED: solid white -> translucent white, blends into dark navbar instead of looking like a cutout
                            backgroundColor: "rgba(255,255,255,0.12)",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2, // CHANGED: 4px -> ~16px pill shape, softer and more modern
                            width: 240, // NEW: fixed comfortable width
                            transition: "background-color 0.2s ease", // NEW
                            "&:hover": { backgroundColor: "rgba(255,255,255,0.18)" }, // NEW: hover feedback
                            "&:focus-within": { backgroundColor: "rgba(255,255,255,0.22)" }, // NEW: focus feedback when typing
                        }}>
                            <Search sx={{ color: "rgba(255,255,255,0.7)", fontSize: 20 }} />
                            <InputBase
                                placeholder="Search..."
                                sx={{
                                    ml: 1,
                                    color: "#fff", // NEW: white text since bg is now dark/translucent
                                    fontSize: 14,
                                    "& ::placeholder": { color: "rgba(255,255,255,0.6)" }, // NEW: visible placeholder
                                }}
                            />
                        </Box>

                        {/* Theme */}
                        <Tooltip title="Toggle theme">
                            <IconButton sx={{ color: "rgba(255,255,255,0.85)", "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" } }}>
                                <DarkMode fontSize="small" />
                            </IconButton>
                        </Tooltip>

                        {/* Settings */}
                        <Tooltip title="Settings">
                            <IconButton sx={{ color: "rgba(255,255,255,0.85)", "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" } }}>
                                <SettingsIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>

                        {/* User */}
                        <Avatar sx={{
                            width: 34,
                            height: 34,
                            bgcolor: "#7C3AED", // NEW: violet avatar background, complements navbar color
                            fontSize: 14,
                            fontWeight: 600,
                        }}>R</Avatar>
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
                        whiteSpace: "nowrap", // NEW: prevents text wrapping awkwardly during the width transition
                        "& .MuiDrawer-paper": {
                            width: currentDrawerWidth,
                            boxSizing: "border-box",
                            // CHANGED: flat brownish-gray -> dark slate, matches the navbar's tone instead of clashing
                            backgroundColor: "#1E1E2E",
                            borderRight: "1px solid rgba(255,255,255,0.08)", // NEW: subtle separation from main content
                            overflowX: "hidden", // NEW: hides text overflow while collapsing
                            transition: "width 0.3s ease",
                        }
                    }}>
                    <Toolbar />
                    {/* Dashboard Items */}
                    <List sx={{ px: 1, py: 1.5 }}> {/* NEW: padding so items don't touch the drawer edges */}
                        {menuItems.map((item, index) => {
                            const isActive = index === activeIndex; // NEW
                            return (
                                <Tooltip key={item.label} title={open ? "" : item.label} placement="right">
                                    <ListItemButton
                                        onClick={() => setActiveIndex(index)} // NEW: click to mark active
                                        sx={{
                                            justifyContent: open ? "initial" : "center",
                                            px: 2,
                                            py: 1.1, // NEW: a bit taller for easier clicking, more breathing room
                                            mb: 0.5, // NEW: spacing between items
                                            borderRadius: 2, // NEW: rounded item background instead of full-width flat rows
                                            color: isActive ? "#fff" : "rgba(255,255,255,0.65)", // NEW
                                            backgroundColor: isActive ? "#7C3AED" : "transparent", // NEW: violet highlight for active item
                                            "&:hover": {
                                                backgroundColor: isActive ? "#7C3AED" : "rgba(255,255,255,0.08)", // NEW: subtle hover, keeps active color if already active
                                            },
                                            transition: "background-color 0.15s ease, color 0.15s ease",
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 2 : "auto",
                                                justifyContent: "center",
                                                color: "inherit", // NEW: icon follows the button's active/inactive color
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>

                                        {open && (
                                            <ListItemText
                                                primary={item.label}
                                                primaryTypographyProps={{ fontSize: 14, fontWeight: isActive ? 600 : 400 }} // NEW
                                            />
                                        )}
                                    </ListItemButton>
                                </Tooltip>
                            );
                        })}
                    </List>
                </Drawer>

                {/* Main Content */}
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        backgroundColor: "#F4F5F7", // NEW: light neutral background instead of default white, common in dashboard products
                        minHeight: "calc(100dvh - 64px)", // NEW: ensures bg fills the screen below the navbar
                    }}
                >
                    <Typography>
                        Main content goes here
                    </Typography>
                </Box>
            </Box>

        </Box>
    </>
}

export default Navbar;