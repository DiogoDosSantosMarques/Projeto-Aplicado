
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Componentes
import NavBar from './components/NavBar/NavBar';


// Pages
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login';
import Anuncio from './pages/Anuncio/Anuncio';
import EditarAnuncio from './pages/EditarAnuncio/EditarAnuncio';
import Cuidadores from './pages/AgendarConsulta/Cuidadores';

function App() {
  

  return (
    <>
    <BrowserRouter>

    <NavBar />
    
    <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/cuidadores' element={<Cuidadores/>} />
    <Route path='/anuncio' element={<Anuncio/>} />
    <Route path='/editAnuncio' element={<EditarAnuncio/>} />
    <Route path='/cadastro' element={<Cadastro />} />
    <Route path='/login' element={<Login />} />

    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
