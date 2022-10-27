// import React, {useEffect, useState} from 'react';
// import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Pages from "./pages/Pages"



function App() {
 return(
  <div className="App">
    <h1>Hello</h1>
    <Pages />

  </div>
 );
}







// const apiId ='0fc0c166'
// const apiKey = '05930f40a546304384c452fec255539b'

// const [recipes, setRecipes] = useState([])
// const [search, setSearch] = useState('')
// const [query, setQuery] = useState('chicken')
 
// useEffect(() => {
// getRecipes();
// }, [query]);

// const getRecipes = async () => {
//   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`);
//   const data = await response.json();
//   setRecipes(data.hits);
//   console.log(data.hits);
// };

// const updateSearch = e => {
//   setSearch(e.target.value);
// }


// const getSearch = e => {
//   e.preventDefault();
//   setQuery(search);
//   setSearch('');
// }

//   return (
//     <div className='App'>
//         <h1> Food Recipe App</h1>
//       <form  onSubmit={getSearch} className="search-form">
//         <input className="search-bar" type ="text" value={search} onChange={updateSearch} />
//         <button className="search-button" type= "submit">
//         Search
//         </button>
//       </form> 
//       <form getRecipe={this.getRecipe} />
//       <Recipes  recipes={this.state.recipes}/>


//       {/* {recipes.map(recipe => (
//         <Recipe 
//         key={recipe.recipe.recipe}
//         title={recipe.recipe.label} 
//         image={recipe.recipe.image}
//         ingredients={recipe.recipe.ingredients}
//         />
//       ))}; */}
//     </div>
//   );
// };

export default App
