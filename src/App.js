import './App.css';
import * as React from 'react';
import { Route, Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './views/Main';
import WithSubnavigation from './views/ResponsiveAppBar';
import Footer from './views/Footer';
import Guidelines from './views/Guidelines';
import HardCopy from './views/Hardcopy';
function App() {
  return (
  <div>
    <WithSubnavigation />
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/paper" element={<HardCopy />} />
      </Routes> 
      </BrowserRouter>
    <Footer />
  </div>
  );
}

export default App;
