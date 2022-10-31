import './App.css';
import Pages from "./pages/Pages"
import Catergory from './components/Category';
import Search from './components/Search';



function App() {
 return(
  <div className="Navbar">
  <nav>
    <Catergory/>
    <Search />
    <Pages />
    </nav>
    

  </div>
 );
}


export default App
