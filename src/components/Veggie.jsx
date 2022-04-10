import { Splide, SplideSlide } from '@splidejs/react-splide';
// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    const getVeggie = async () => {
        const check = localStorage.getItem('veggie');
        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?number=9&tags=vegetarian&apiKey=${process.env.REACT_APP_API_KEY}`
            );
            const data = await api.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
    };

    useEffect(() => {
        getVeggie();
    }, []);
    return (
        <div>
            <Wrapper>
                <h3>Veggie Picks</h3>
                <Splide
                    options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: '3rem',
                    }}
                >
                    {veggie.map((recipe) => (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                                <Gradient />
                            </Card>
                        </SplideSlide>
                    ))}
                </Splide>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
    margin: 4rem 0;
`;
const Card = styled.div`
    min-height: 15rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        text-align: center;
        font-weight: 600;
        font-size: 0.8rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
