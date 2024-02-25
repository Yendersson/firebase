import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes.js';
import Header from './Components/Header.jsx'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      
    </div>
  );
}

export default App;
