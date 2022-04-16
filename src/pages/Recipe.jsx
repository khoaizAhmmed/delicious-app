/* eslint-disable react/no-danger */
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');
    const params = useParams();
    const fetchDetails = async (id) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const detailData = await data.json();
        setDetails(detailData);
    };
    useEffect(() => {
        fetchDetails(params.name);
    }, [params.name]);
    return (
        <DetailWrapper
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
        >
            <div>
                <h2> {details.title} </h2>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button
                    className={activeTab === 'instructions' ? 'active' : ''}
                    onClick={() => {
                        setActiveTab('instructions');
                    }}
                >
                    Instructions
                </Button>
                <Button
                    className={activeTab === 'Ingredients' ? 'active' : ''}
                    onClick={() => {
                        setActiveTab('Ingredients');
                    }}
                >
                    Ingredients
                </Button>
                {activeTab === 'instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }} />
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }} />
                    </div>
                )}
                {activeTab === 'Ingredients' && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    );
}
const DetailWrapper = styled(motion.div)`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    img {
        width: 400px;
        height: 250px;
    }
    h2 {
        margin-bottom: 2rem;
    }
    h3 {
        font-size: 1.2rem;
        line-height: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2rem;
    }
    ul {
        margin-top: 2rem;
    }
`;
const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;
const Info = styled.div`
    margin-left: 5rem;
`;
export default Recipe;
