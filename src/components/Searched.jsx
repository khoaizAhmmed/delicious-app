import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const params = useParams();
    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?number=9&apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };
    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);
    return (
        <div>
            <Grid>
                {searchedRecipes.map((item) => (
                    <Link to={`/Recipe/${item.id}`}>
                        <Card key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Card>
                    </Link>
                ))}
            </Grid>
        </div>
    );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 3rem;
`;
const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }

    h4 {
        text-align: center;
    }
`;

export default Searched;
