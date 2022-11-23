
import './App.css';
import Footer from "./components/footer";
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemsDetailContainer';


function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <ItemsListContainer title="Productos Ferreteria"/>
        <ItemDetailContainer/>
        <Footer />
      </main>
    </div>
  );
}

export default App;
