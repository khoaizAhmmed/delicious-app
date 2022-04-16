import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?number=9&tags=vegetarian&apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
        );
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);
    return (
        <div>
            <Grid
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                {cuisine.map((item) => (
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

const Grid = styled(motion.div)`
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
export default Cuisine;
