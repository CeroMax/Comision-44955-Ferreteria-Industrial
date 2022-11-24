
import './App.css';
import Footer from "./components/footer";
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemsDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { PaginaContacto } from './pages/PaginaContacto/PaginaContacto';
import { HerramientasMano } from './pages/HerramientasMano/HerramientasMano';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <NavBar />
          <Routes>
            <Route path='/inicio' element={<ItemsListContainer title="Productos Ferreteria"/>}/>
            <Route path='/contacto' element={<PaginaContacto/>}/>
            <Route path='/inicio/:tipoProducto' element={<ItemsListContainer title="Herramientas de Mano"/>}/>
            <Route path='/inicio/:tipoProducto' element={<ItemsListContainer title="Herramientas Electricas"/>}/>
            <Route path='/item/:productoid' element={<ItemDetailContainer title="Producto"/>}/>
          </Routes>


          {/*<ItemsListContainer title="Productos Ferreteria"/>
          <ItemDetailContainer/>*/}
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
