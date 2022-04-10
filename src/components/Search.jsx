import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Search() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`);
    };
    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
            </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`
    margin: 0rem 10rem;
    div {
        width: 100%;
        position: relative;
    }
    input {
        background: linear-gradient(35deg, #494949, #313131);
        border: none;
        padding: 1rem 3rem;
        color: white;
        font-size: 1.5rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;
export default Search;
