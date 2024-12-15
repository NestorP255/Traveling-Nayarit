import React from 'react';
import Navbar from './components/NavBar';
import './CSS/estilo.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Importar Componentes de Paginas Principales
import PaginaInicio from './paginas/PaginaInicio';
import Destinos from './paginas/Destinos';
import Reservaciones from './paginas/Reservaciones';
import Contacto from './paginas/Contacto';
import AcercaDe from './paginas/AcercaDe';

//Importar Componentes de Paginas Secundarias
import Sayulita from './paginas/subPaginas/sayulita';
import Tepic from './paginas/subPaginas/tepic';
import SanBlas from './paginas/subPaginas/sanBlas';
import RinconGuayabitos from './paginas/subPaginas/rinconGuayabitos';
import IslaMexcaltitan from './paginas/subPaginas/islaMexcaltitan';
import PuntaMita from './paginas/subPaginas/puntaMita';

function App() {
  return (
    <Router>
      <div style={{position: 'absolute'}}>  </div>
      <Navbar/>

      <Routes>
        <Route exact path='/' Component={PaginaInicio}/>
        <Route exact path='/destinos' Component={Destinos}/>
        <Route exact path='/reservaciones' Component={Reservaciones}/>
        <Route exact path='/contacto' Component={Contacto}/>
        <Route exact path='/acercaDe' Component={AcercaDe}/>

        {/* Redireccionamiento subPaginas */}
        <Route exact path='/destinos/sayulita' Component={Sayulita}/>
        <Route exact path='/destinos/tepic' Component={Tepic}/>
        <Route exact path='/destinos/san-blas' Component={SanBlas}/>
        <Route exact path='/destinos/rincon-de-guayabitos' Component={RinconGuayabitos}/>
        <Route exact path='/destinos/isla-de-mexcaltitan' Component={IslaMexcaltitan}/>
        <Route exact path='/destinos/punta-de-mita' Component={PuntaMita}/>

        {/* Redireccionamiento a la pagina principal por defecto */}
        <Route path='*' Component={PaginaInicio}/>
      </Routes>
    </Router>
  );
}

export default App;