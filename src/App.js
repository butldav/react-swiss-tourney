import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NewTournamentForm } from './components/NewTournamentForm';
function App() {
  return (
    <div className="App">
      <NewTournamentForm />
    </div>
  );
}

export default App;
