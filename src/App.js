import React from 'react';

import { Router, Route, Routes, Link, Redirect, BrowserRouter} from "react-router-dom";
import Forms from './views/form';
import Main from './views/Main';
import { ChakraProvider } from '@chakra-ui/react'
import WithSubnavigation from './components/Navbar';
import { Image, Heading } from '@chakra-ui/react'
import Guidelines from './views/Guidelines';

function App() {
  return (
    <div>
      
      <ChakraProvider>
        <WithSubnavigation />
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/form" element={<Forms />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>

    </div>

  );
}

export default App;
