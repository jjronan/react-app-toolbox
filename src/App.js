import './App.css';
import AppCollection from './components/AppCollection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Toolbox Apps</h1>
        <p>Useful tools made for you in React</p>
      </header>
      <div className="App-main-container">
        <AppCollection />
      </div>
      
    </div>
  );
}

export default App;
