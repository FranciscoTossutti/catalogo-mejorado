import './App.css';
import ItemListConteiner from './componentes/ItemListConteiner';
import NavBar from './componentes/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2>Nuestro Catalogo</h2>
      <ItemListConteiner />
    </div>
  );
}

export default App;
