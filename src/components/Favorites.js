import {useEffect, useState} from "react";
import styled from 'styled-components';
import {Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';

function Favorites(){

const [favorites, setFavorites] = useState([]);


useEffect(() => {
getFavorites();
},[]);


const getFavorites = async () => {
    const apiKey = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const data = await apiKey.json();
   setFavorites(data.recipes);
   console.log(data.recipes)
};
    return (
    <div>
         <Wrapper>
            <h3>Favorite Recipes! </h3>
             <Splide options ={{
                perPage: 4,
                arrow: false,
                drag: "free",
                gap: "5rem",
             }}>
             {favorites.map((recipe) => {
             return (
                <SplideSlide key={recipe.id}>
                <Card>
                 <p> {recipe.title} </p>
                 <img src={recipe.image} alt={recipe.title} />
                 </Card>
                </SplideSlide>
         )
        })}
     </Splide>
    </Wrapper>
     </div>
    )
}

const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;

img{    
    border-radius: 2rem;
}
`;


export default Favorites;