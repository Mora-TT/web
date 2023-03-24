import './App.css';
import * as React from 'react';
import {Button, Checkbox} from '@mui/material';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './views/Main';
import WithSubnavigation from './views/ResponsiveAppBar';
import Forms from './views/Form';
import Footer from './views/Footer';
import Guidelines from './views/Guidelines';
import HardCopy from './views/Hardcopy';
function App() {
  return (
  <div>
    <WithSubnavigation />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Forms />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/paper" element={<HardCopy />} />
      </Routes> 
      </BrowserRouter>
    <Footer />
    {/* <StaticRouter >
      
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/form" element={<Forms />} />
          <Route path="/guidelines" element={<Guidelines />} /> 
      </Routes>
    </StaticRouter> */}
  </div>
  );
}

export default App;
