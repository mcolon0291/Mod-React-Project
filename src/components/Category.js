import styled from "styled-components";
import {Link} from "react-router-dom"

function Category(){
    return(
        <List>
        <Link to={"/"}>
            <h4>Home</h4>
        </Link>
        <Link to={'/cuisine/Italian'}>
            <h4>Italian</h4>
        </Link>
        <Link to={'/cuisine/American'}>
            <h4>American</h4>
        </Link>
        <Link to ={'/cuisine/Japanese'}>
            <h4>Japanese</h4>
        </Link>
        </List>
    )
}

const List = styled.div`
display: grid;
justify-content: center;
// margin: 2rem 0rem;
`

export default Category