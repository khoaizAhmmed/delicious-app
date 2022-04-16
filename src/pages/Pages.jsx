import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Searched from '../components/Searched';
import Cuisine from './Cuisine';
import Home from './Home';
import Recipe from './Recipe';

function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="/Searched/:search" element={<Searched />} />
                <Route path="/Recipe/:name" element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    );
}

export default Pages;
