import './App.css';
import * as React from 'react';
import { Route, Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './views/Main';
import WithSubnavigation from './views/ResponsiveAppBar';
import Footer from './views/Footer';
import Guidelines from './views/Guidelines';
import HardCopy from './views/Hardcopy';
import Contact from './views/Contact';
function App() {
  return (
  <div>
    <WithSubnavigation />
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/paper" element={<HardCopy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 
      </BrowserRouter>
    <Footer />
  </div>
  );
}

export default App;
