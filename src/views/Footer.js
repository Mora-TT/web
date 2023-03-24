import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import {
  Button,
  Link
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
export default function Footer() {
  return (
    <div className='footer'>
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>

          <Link href='https://www.facebook.com/moratabletennis' >
            <Button variant="outlined" component="label" >
            <FacebookIcon />
            </Button>
          </Link>

          <Link href='' >
          <Button variant="outlined" component="label" >
          <TwitterIcon  />
         </Button>
         </Link>

         <Link href='mailto:morattsmashes@gmail.com' >
         <Button variant="outlined"  component="label" >
         <EmailIcon  />
         </Button>
         </Link>

        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', paddingBottom: '30px' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mora-smashes.com/' style={{ paddingLeft: '10px' }}>
          www.mora-smashes.com
        </a>
      </div>
    </MDBFooter>
    </div>
  );
}