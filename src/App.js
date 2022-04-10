import { BrowserRouter } from 'react-router-dom';
import Category from './components/Category';
import Search from './components/Search';
import Pages from './pages/Pages';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Search />
                <Category />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

export default App;
