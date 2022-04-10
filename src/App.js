import { BrowserRouter } from 'react-router-dom';
import Category from './components/Category';
import Pages from './pages/Pages';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Category />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

export default App;
