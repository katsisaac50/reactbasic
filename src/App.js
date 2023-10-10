
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

     {/*  <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}
      <Routes>
      <Route path='/' Component={Home} exact  />
      <Route path='/contacts' Component={Contacts} exact  />
      <Route path='/' Component={About} exact  />
      </Routes>
      
      
        
      
    </BrowserRouter>

  );
}

export default App;
