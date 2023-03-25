import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { GrMenu } from 'react-icons/gr';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from '@mui/material';
import { GrClose } from 'react-icons/gr';
import iconImage from '../Assets/out.png';


const pages = ['Home', 'Registration', 'Guidelines'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const DropdownTab = () => {
    return (
        <DropdownButton id="dropdown-basic-button" title="Registration">
          <Dropdown.Item href="#/action-1">Online</Dropdown.Item>
          <Dropdown.Item href="#/action-2">On Paper</Dropdown.Item>
        </DropdownButton>
      );
}
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ResponsiveDialog = () => {
    return(
    <div>
      <Button onClick={handleClickOpen}  style={{color: 'black',fontWeight: 700, marginTop: '16px'}}>
        Registration
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Choose the Registration Mode"}
        </DialogTitle>
        <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <GrClose />
          </IconButton>
        <DialogContent>
          <DialogContentText>
          Please note that filling out the entry form using either one of these methods will be sufficient.
          </DialogContentText>
        </DialogContent>
        <DialogActions>

        <Link href="/paper" underline="none">
          <Button autoFocus onClick={handleClose} style={{color: 'white',background: '#4c351df5', paddingLeft: 20,paddingRight: 20, borderRadius: '10px'}}>
            On Paper
          </Button>
        </Link>
          
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSciPUBemQmSzjwPZE_Kwa_-N1tCwkyuZq8fBkHNyS4CwZiWig/viewform?usp=sf_link" underline="none">
          <Button onClick={handleClose} autoFocus style={{color: 'white',background: '#4c351df5', paddingLeft: 20,paddingRight: 20,borderRadius: '10px'}}>
            Online Mode
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>)
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const isScreenSmall = useMediaQuery('(max-width:600px)');
  return (
    <AppBar position="static" sx={{width:'auto'}} style={{background: "#ededede0", opacity: 0.85}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* <IconButton edge="start" color="white" aria-label="menu" size='small' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src={iconImage} alt="App icon" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </IconButton> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <GrMenu />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                <Link href='/' underline="none">
                  <Typography textAlign="center" color={'#4c4c4c'}>Home</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClickOpen}>
                  <Typography textAlign="center" color={'#4c4c4c'}>Registration</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href='/guidelines' underline="none">
                  <Typography textAlign="center" color={'#4c4c4c'} >Guidelines</Typography>
                  </Link>
                </MenuItem>
              
            </Menu>
          </Box>
          <IconButton edge="start" color="white" aria-label="menu" size='small' >
            <img src={iconImage} alt="App icon"  />
          </IconButton>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' ,fontWeight: 700} }}>
              <Link href='/' underline="none">
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block', paddingLeft: '30px', paddingRight: '30px', fontWeight: 700 }} >
                {"Home"}
              </Button>
              </Link>

              
              <ResponsiveDialog onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block', paddingLeft: '30px', paddingRight: '30px' }} ></ResponsiveDialog>
              <Link href='/guidelines' underline="none">
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block', paddingLeft: '30px', paddingRight: '30px', fontWeight: 700 }} >
                {"Guidelines"}
              </Button>
              </Link>

              <Link href='/contact' underline="none">
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block', paddingLeft: '20px', paddingRight: '30px', fontWeight: 700 }} >
                {"Contact Us"}
              </Button>
              </Link>
            
            {/* <DropdownTab /> */}
          </Box>
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;