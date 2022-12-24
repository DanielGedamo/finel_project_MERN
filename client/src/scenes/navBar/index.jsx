// import { useState } from "react";
// import {
//   Box,
//   IconButton,
//   InputBase,
//   Typography,
//   Select,
//   MenuItem,
//   FormControl,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import {
//   Search,
//   Message,
//   DarkMode,
//   LightMode,
//   Notifications,
//   Help,
//   Menu,
//   Close,
// } from "@mui/icons-material";
// import { useDispatch, useSelector } from "react-redux";
// import { setMode, setLogout } from "../../state/index";
// import { useNavigate } from "react-router-dom";
// import FlexBetween from "../../components/FlexBetween"

// const Navbar = () => {
//   const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user);
//   const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

//   const theme = useTheme();
//   const neutralLight = theme.palette.neutral.light;
//   const dark = theme.palette.neutral.dark;
//   const background = theme.palette.background.default;
//   const primaryLight = theme.palette.primary.light;
//   const alt = theme.palette.background.alt;

//   const fullName = `${user.firstName} ${user.lastName}`;

//   return (
//     <FlexBetween padding="1rem 6%" backgroundColor={alt}>
//       <FlexBetween gap="1.75rem">
//         <Typography
//           fontWeight="bold"
//           fontSize="clamp(1rem, 2rem, 2.25rem)"
//           color="primary"
//           onClick={() => navigate("/home")}
//           sx={{
//             "&:hover": {
//               color: primaryLight,
//               cursor: "pointer",
//             },
//           }}
//         >
//           Sociopedia
//         </Typography>
//         {isNonMobileScreens && (
//           <FlexBetween
//             backgroundColor={neutralLight}
//             borderRadius="9px"
//             gap="3rem"
//             padding="0.1rem 1.5rem"
//           >
//             <InputBase placeholder="Search..." />
//             <IconButton>
//               <Search />
//             </IconButton>
//           </FlexBetween>
//         )}
//       </FlexBetween>

//       {/* DESKTOP NAV */}
//       {isNonMobileScreens ? (
//         <FlexBetween gap="2rem">
//           <IconButton onClick={() => dispatch(setMode())}>
//             {theme.palette.mode === "dark" ? (
//               <DarkMode sx={{ fontSize: "25px" }} />
//             ) : (
//               <LightMode sx={{ color: dark, fontSize: "25px" }} />
//             )}
//           </IconButton>
//           <Message sx={{ fontSize: "25px" }} />
//           <Notifications sx={{ fontSize: "25px" }} />
//           <Help sx={{ fontSize: "25px" }} />
//           <FormControl variant="standard" value={fullName}>
//             <Select
//               value={fullName}
//               sx={{
//                 backgroundColor: neutralLight,
//                 width: "150px",
//                 borderRadius: "0.25rem",
//                 p: "0.25rem 1rem",
//                 "& .MuiSvgIcon-root": {
//                   pr: "0.25rem",
//                   width: "3rem",
//                 },
//                 "& .MuiSelect-select:focus": {
//                   backgroundColor: neutralLight,
//                 },
//               }}
//               input={<InputBase />}
//             >
//               <MenuItem value={fullName}>
//                 <Typography>{fullName}</Typography>
//               </MenuItem>
//               <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
//             </Select>
//           </FormControl>
//         </FlexBetween>
//       ) : (
//         <IconButton
//           onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
//         >
//           <Menu />
//         </IconButton>
//       )}

//       {/* MOBILE NAV */}
//       {!isNonMobileScreens && isMobileMenuToggled && (
//         <Box
//           position="fixed"
//           right="0"
//           bottom="0"
//           height="100%"
//           zIndex="10"
//           maxWidth="500px"
//           minWidth="300px"
//           backgroundColor={background}
//         >
//           {/* CLOSE ICON */}
//           <Box display="flex" justifyContent="flex-end" p="1rem">
//             <IconButton
//               onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
//             >
//               <Close />
//             </IconButton>
//           </Box>

//           {/* MENU ITEMS */}
//           <FlexBetween
//             display="flex"
//             flexDirection="column"
//             justifyContent="center"
//             alignItems="center"
//             gap="3rem"
//           >
//             <IconButton
//               onClick={() => dispatch(setMode())}
//               sx={{ fontSize: "25px" }}
//             >
//               {theme.palette.mode === "dark" ? (
//                 <DarkMode sx={{ fontSize: "25px" }} />
//               ) : (
//                 <LightMode sx={{ color: dark, fontSize: "25px" }} />
//               )}
//             </IconButton>
//             <Message sx={{ fontSize: "25px" }} />
//             <Notifications sx={{ fontSize: "25px" }} />
//             <Help sx={{ fontSize: "25px" }} />
//             <FormControl variant="standard" value={fullName}>
//               <Select
//                 value={fullName}
//                 sx={{
//                   backgroundColor: neutralLight,
//                   width: "150px",
//                   borderRadius: "0.25rem",
//                   p: "0.25rem 1rem",
//                   "& .MuiSvgIcon-root": {
//                     pr: "0.25rem",
//                     width: "3rem",
//                   },
//                   "& .MuiSelect-select:focus": {
//                     backgroundColor: neutralLight,
//                   },
//                 }}
//                 input={<InputBase />}
//               >
//                 <MenuItem value={fullName}>
//                   <Typography>{fullName}</Typography>
//                 </MenuItem>
//                 <MenuItem onClick={() => dispatch(setLogout())}>
//                   Log Out
//                 </MenuItem>
//               </Select>
//             </FormControl>
//           </FlexBetween>
//         </Box>
//       )}
//     </FlexBetween>
//   );
// };

//  export default Navbar;
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
