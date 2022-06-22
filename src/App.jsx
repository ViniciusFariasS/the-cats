import './App.scss'

import { BrowserRouter } from 'react-router-dom'
import Content from './routes/Content';
import Menu from './components/Menu';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu />
                <Content />
            </BrowserRouter>
        </div>
    );
}

export default App
