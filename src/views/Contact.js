import React from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import './App.css';
import BasicTable from './BasicTable';

function Contact() {
  const gmail =<a href="mailto:morattsmashes@gmail.com" style={{color: 'blue', textDecoration: 'underline'}}>morattsmashes@gmail.com</a>
  const uomMail = <a href="mailto:dpe@uom.lk" style={{color: 'blue', textDecoration: 'underline'}}>dpe@uom.lk</a>
  const bCapMobile=<a href="tel:+94763241609">+94763241609</a>
  const gCapMobile=<a href="tel:+94766510422">+94766510422</a>

  return (

    <div id = "main">
      <Box sx={{background: 'black', opacity: 0.85, margin: '1rem', marginBottom: 60}}>
      <Typography variant="h5" color={'white'} paddingBottom={3} paddingLeft={10} paddingTop={5} alignContent={'center'} gutterBottom>
      Contact : 
      </Typography>

     
      <div className="contactInfo" style={{color: 'white'}}>

      <Typography variant="h6" color={'white'}  paddingBottom={'1rem'} paddingLeft={'2rem'} alignContent={'center'} gutterBottom>Mr. Supuna Warusawithana: <>{bCapMobile}</></Typography>

      <Typography variant="h6" color={'white'}  paddingBottom={'3rem'} paddingLeft={'2rem'} alignContent={'center'} gutterBottom><b>Ms. Divya Karunasena: </b>  <>{gCapMobile}</></Typography>
      

      </div>
      </Box>
    </div>

  );
}

export default Contact;