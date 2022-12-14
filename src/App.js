
import './App.css';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import { ItemsListContainer } from './components/ItemsListContainer/ItemsListContainer';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import{Nosotros} from './components/pages/nosotros';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {Contacto} from './components/pages/contacto';
import CartContent from './components/CartContent/CartContent';
import DataProvider from './components/Context/DataContext';
import { PaginaFirebase } from './components/PaginaFirebase/PaginaFirebase';





export function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App-header">
            <NavBar/>

            <Routes>
              <Route path='/' element={<ItemsListContainer/>}/>
              <Route path="/herramientas/:tipoHerramientas" element={<ItemsListContainer/>}/>
              <Route path="/item/:productid" element={<ItemDetailContainer/>} />
              <Route path="/contacto" element={<Contacto/>} />
              <Route path="/nosotros" element={<Nosotros/>}/>
              <Route path='/cart' element={<CartContent/>}/>
              <Route path="/firebase" element={<PaginaFirebase/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

//export default App;
