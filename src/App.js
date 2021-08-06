import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This has been deployed with Docker and Azure!!!</h1>
      </header>
    </div>
  );
}

export default App;
