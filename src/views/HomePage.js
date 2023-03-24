import React from "react";
import BannerBackground from "../Assets/home-banner-background2.png";
import BannerImage from "../Assets/tt.png";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import iconImage from '../Assets/out.png';
// import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import CountdownTimer from "./CountdownTimer";
import VerticalDividers from "./VerticalDivider";

const HomePage = () => {

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const targetDate = new Date('2023-05-07T23:59:59');
  return (

    
    <div className="home-container">
      

      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section" sx={{color: 'white'}}>
          <h1 className="primary-heading" >
          MORA SMASHES 
          </h1>
          <h1 className="primary-heading">2023</h1>

          <button className="secondary-button" onClick={handleClickOpen}>
            Register Now <FiArrowRight  style={{background: "#0000"}}/>{" "}
          </button>
          
          <p className="primary-text">
            Registrations are Now Open !!!
          </p>
          <CountdownTimer targetDate={targetDate} />

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
            <CloseIcon />
          </IconButton>
        <DialogContent>
          <DialogContentText>
            Please note that filling out the entry form using either one of these methods will be sufficient.
          </DialogContentText>
        </DialogContent>
        <DialogActions>

        <Link href="/paper" underline="none">
          <Button autoFocus onClick={handleClose}>
            On Paper
          </Button>
        </Link>
          
          <Link href="/form" underline="none">
          <Button onClick={handleClose} autoFocus>
            Online Mode
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
