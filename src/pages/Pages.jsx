import { Route, Routes } from 'react-router-dom';
import Searched from '../components/Searched';
import Cuisine from './Cuisine';
import Home from './Home';
import Recipe from './Recipe';

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/Searched/:search" element={<Searched />} />
            <Route path="/Recipe/:name" element={<Recipe />} />
        </Routes>
    );
}

export default Pages;
