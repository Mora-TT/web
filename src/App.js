import React from 'react';
import "./App.css";
import { Router, Route, Routes, Link, Redirect, BrowserRouter} from "react-router-dom";
import Forms from './views/form';
import Main from './views/Main';
import { ChakraProvider } from '@chakra-ui/react'
import WithSubnavigation from './components/Navbar';
import { Image, Heading } from '@chakra-ui/react'
import Guidelines from './views/Guidelines';
import { Banner } from './views/Banner';


function App() {
  return (
    <div>
      {/* <Banner /> */}
      
      <ChakraProvider>
        <WithSubnavigation />
        
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/form" element={<Forms />} />
            <Route path="/guidelines" element={<Guidelines />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>

  );
}

export default App;
