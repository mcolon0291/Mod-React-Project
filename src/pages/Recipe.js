import {useEffect, useState } from "react"
import {useParams} from "react-router-dom"


function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    


const fetchDetials = async () => {
    const data= await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json();
    console.log(detailData)
    setDetails(detailData);

}

useEffect(() => {
fetchDetials();
},[params.name])


    return <div className = "ingredients">
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
        <div key={details.query} alt=""/>
        <h2>Ingredients</h2>
       
       
         {details.extendedIngredients?.map((ingreident) => (
            <div key={ingreident.id}>{ingreident.original}
            </div>
            
            ))}
            
  </div>
}
    export default Recipe