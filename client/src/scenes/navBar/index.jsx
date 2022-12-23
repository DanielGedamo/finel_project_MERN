import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notification,
  Help,
  Menu,
  Close,
  LightMode,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redox";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import flexBetween from "../../components/flexBetween";
import { dark } from "@mui/material/styles/createPalette";

const navBar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width:100px)");

  const theme = useTheme();
  const neutralLight = theme.palette.netural.light;
  const derk = theme.palette.netural.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <flexBetween padding="1rem 6%" backgroundColor={alt}>
      <flexBetween gap="1.75">
        <Typography
          fontWeigth="bold"
          fontSize="clamp(1erm,2rem,2.25rem)"
          color="primary"
          onClick={() => Navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          Sociopedia
        </Typography>
        {isNonMobileScreens && (
          <flexBetween
            backgroundColor={neutralLight}
            borderRadius="9xp"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </flexBetween>
        )}
      </flexBetween>
      {/* desktop nav  */}
      {isNonMobileScreens ? (
      <flexBetween gap= "2rem">
        <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "derk"?(
                <DarkMode sx={{ fontSize: "25px"}}/>
            ):(<LightMode sx={{ color: dark,fontSize: "25"}}/>
            )}
        </IconButton>
        <Message sx={{ fontSize: "25px"}}/>
        <Notification sx={{ fontSize: "25px"}}/>
        <Help sx={{ fontSize: "25px"}}/>
        <FormControl variant = "standard" value= {fullName}>
        <Select
         value={fullName}
         sx={{
           backgroundColor: neutralLight,
           width: "150px",
           borderRadius: "0.25rem",
           p: "0.25rem 1rem",
           "& .MuiSvgIcon-root": {
             pr: "0.25rem",
             width: "3rem",
           },
           "& .MuiSelect-select:focus": {
             backgroundColor: neutralLight,
           },
         }}
         input={<InputBase />}
       >
        
        <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem> 
             </Select>
     </FormControl>
      </flexBetween>
     ):(
        <IconButton
             onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
             <Menu/>
        </IconButton>
      )}
      {/* MOBILE NAV  */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
        position= "fixed"
        right = "0"
        bottom="0"
        height="100%"
        zIndex="10"
        maxWidth="500px"
        minWidth="300px"
        backgroundColor={background}>
         /* CLOSE ICON */
         <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>
          {/* MENU ITEMS */}
          <flexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <formControl variant="standard" value={fullName}>
             <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </formControl>
          </flexBetween>
        </Box>
      )}
    </flexBetween>
  );
};

export default  navBar