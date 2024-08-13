import React from 'react';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined , HomeOutlined, MapOutlined, PeopleOutlineOutlined, PersonOutlined, PieChartOutlineOutlined, ReceiptOutlined, TimerOutlined } from '@mui/icons-material';
import { Avatar, colors, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { grey, orange } from '@mui/material/colors';


const drawerWidth = 239;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hiddn',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const Array1 = [
  {text: "Dashboard", icon: <HomeOutlined />  ,path: "/"},
   {text: "Partners", icon: <PeopleOutlineOutlined />,path: "/partners"},

];

const Array2 = [
  {text: "Cooptation", icon: <  ContactsOutlined  />,path: "/Cooptation"},
  {text: "Profile Form", icon: < PersonOutlined />,path: "/Form"},
  {text: "Calendar", icon: < CalendarTodayOutlined />,path: "/Calendar"},
 
];

const Array3 = [
  {text: "Bar Chart", icon: <  BarChartOutlined />,path: "/bar"},
  {text: "Pie Chart", icon: <PieChartOutlineOutlined />,path: "/pie"},
  {text: "Geography", icon: <MapOutlined />,path: "/geography"},
];







const SideBar = ({ open, handleDrawerClose }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <StyledDrawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          { theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <Divider />
      <Avatar sx={{mx:"auto",mt:1}} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Typography align='center' variant='body1' >Admin</Typography>
      


      <List>
      {Array1.map((item) => (
        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
          on onClick={() => { 
           navigate(item.path)
           }}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              bgcolor: location.pathname === item.path ? (theme.palette.mode === "dark" ? grey[400] : grey[100]) : null,

            }}
          
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />


      <List>
      {Array2.map((item) => (
        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
          on onClick={() => { 
            navigate(item.path)
            }}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              bgcolor: location.pathname === item.path ? (theme.palette.mode === "dark" ? grey[400] : grey[100]) : null,

            }}
          
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
      
      <List>
      {Array3.map((item) => (
        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
          on onClick={() => { 
            navigate(item.path)
            }}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              bgcolor: location.pathname === item.path ? (theme.palette.mode === "dark" ? grey[400] : grey[100]) : null,

            }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </StyledDrawer>
    
  );
};


export default SideBar;
