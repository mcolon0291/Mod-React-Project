import './App.css';
import Pages from "./pages/Pages"
import Catergory from './components/Category';
import Search from './components/Search';



function App() {
 return(
  <nav>
    <Catergory/>
    <Search />
    <Pages />
    </nav>
    

 );
}


export default App
