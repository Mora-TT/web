import React from 'react';
import "./App.css";
import { Box } from '@mui/system';
import { Image, Heading } from '@chakra-ui/react';
import WithSubnavigation from '../components/Navbar';
import HomePage from './HomePage';

function Main() {
  return (

      <div className="App"><HomePage /></div>

      // <div style={{position: 'relative'}}>
      //   {/* <Image src='https://img3.goodfon.com/original/1920x1080/e/83/nastolnyy-tennis-ping-pong.jpg' alt='Dan Abramov'></Image> */}
      //   <div style={{position: 'absolute', top: 0, left: 0, width: '100%', textAlign: 'center'}}>
      //     <Heading as='h1' size='4xl' padding = '370px' noOfLines={1} color='white'>
      //       MORA SMASHES - 2023
      //     </Heading>
      //   </div>
      // </div>


  );
}

export default Main;
