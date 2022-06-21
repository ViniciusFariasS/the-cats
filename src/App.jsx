import './App.scss'

import { BrowserRouter } from 'react-router-dom'
import Content from './Routes/Content';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App

