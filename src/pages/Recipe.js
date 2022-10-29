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


    return <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
        <div key={details.query} alt=""/>
        <h2>Ingredients</h2>
       
        <ul>
         {details.extendedIngredients?.map((ingreident) => (
            <li key={ingreident.id}>{ingreident.original}
            </li>
            ))}
            </ul>
  </div>
}
    export default Recipe