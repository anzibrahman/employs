import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employform from './components/Employform';
import Employdasboard from './components/Employdasboard';
import Header from './components/Header';


function App() {
  return (
    <div>
<Header/>
 
    <BrowserRouter>
    <Routes>
     
      <Route path='/dash' exact element={<Employdasboard/>}/>
      <Route path='/form' exact element={<Employform/>}/>
      

    </Routes>
    </BrowserRouter>
    </div>
    
  );
  }

export default App;
