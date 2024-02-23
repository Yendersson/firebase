import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
