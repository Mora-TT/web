import React from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
function HardCopy() {
  const link =<Link href="documents/EF2023.pdf" style={{color: '#dd9c1c', textDecoration: 'underline'}}>Registration Form</Link>
  const email1 = <Link href="mailto:morattsmashes@gmail.com" style={{color: 'blue', textDecoration: 'underline'}}>morattsmashes@gmail.com</Link>
  const email2 = <Link href="mailto:dpe@uom.lk" style={{color: 'blue', textDecoration: 'underline'}}>dpe@uom.lk</Link>
  const address= <>Mr. Supuna Warusawithana , <br /> C/o Department of Physical Education, <br />University of Moratuwa. <br /> </> 
  const contacts = "Mr. Supuna Warusawithana: 076 3241 609 , Ms. Divya Karunasena: 076 6510 422";
  const guidelines = [
    {description: <>Download the registration form in PDF format by clicking on the following link: {link}</>, key: 0},
    {description: <>Print out a hard copy of the form.</>, key: 1},
    {description: <>Fill out the form carefully, making sure to provide all the required information. Make sure to complete all sections of the form, including personal information, contact details, and any other relevant information.
      </>, key: 2},
    {description: <>The closing date for registration is 21/04/2023, so make sure to submit your completed form by mail before this date to:  <br /> <br /> {address} </>, key: 3},
    {description: <>Further instructions are provided in the PDF registration form, which will be available for download once you click on the registration form link. Make sure to carefully review and follow all instructions provided in the form.</>, key: 4},
  ];







  return (

    <div id = "main">
      <Box sx={{background: 'black', opacity: 0.85, marginTop: 10, marginBottom: 50}}>
      <Typography variant="h5" color={'white'} paddingBottom={3} paddingLeft={10} paddingTop={5} alignContent={'center'} gutterBottom>
      Registration: On Paper
      </Typography>

      <Typography variant="h6" color={'white'}  paddingBottom={3} paddingLeft={10} alignContent={'center'} gutterBottom>Instructions</Typography>

      <div className='mainOL'>
      <ol>
        {guidelines.map(guideline => {
          return (
            <div>
            <li key={guideline.key}>{guideline.description}</li>
            <br />
            </div>
          );
        })}
      </ol>
      </div>
      </Box>
    </div>

  );
}

export default HardCopy;
