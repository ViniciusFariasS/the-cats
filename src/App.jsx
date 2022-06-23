import './App.scss'

import { BrowserRouter } from 'react-router-dom'
import Content from './routes/Content';
import Menu from './components/Menu';
import { AuthGoogleProvider } from './contexts/authGoogle';

const App = () => {
    return (
        <div className="App">
            <AuthGoogleProvider>
                <BrowserRouter>
                    <Content />
                </BrowserRouter>
            </AuthGoogleProvider>
        </div>
    );
}

export default App
