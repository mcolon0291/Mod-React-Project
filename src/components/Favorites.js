import {useEffect, useState} from "react";
import styled from 'styled-components';

function Favorites(){

const [favorites, setFavorites] = useState([]);


useEffect(() => {
getFavorites();
},[]);


const getFavorites = async () => {
    const apiKey = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const data = await apiKey.json();
   setFavorites(data.recipes);
};
    return (
    <div>
        {favorites.map((recipe) => {
            return(
                <Wrapper>
                    <h3>Favorite Recipes! </h3>
                    {favorites.map((recipe) => {
                        return(
                            <Card>
                                <p> {recipe.title} </p>
                                <img src={recipe.image} alt={recipe.title} />
                            </Card>
                        )
                        })}
                </Wrapper>
            );
        })}
        </div>
    )
}

const Wrapper =styled.div`
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