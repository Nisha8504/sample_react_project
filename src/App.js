import logo from './logo.svg';
import './App.css';
import ViewAll from './components/ViewAll';
import DataAll from './components/DataAll';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import LinkProfile from './components/LinkProfile';

function App() {
  return (
    <div >

      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<ViewAll/>}/>
          <Route path='/F' element={<DataAll/>}/>
          <Route path='/S' element={<Profile/>}/>
          <Route path='/M' element={<LinkProfile/>}/>
          
        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
