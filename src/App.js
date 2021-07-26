import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NewTournamentForm } from './components/NewTournamentForm';
import { NewPlayerForm } from './components/NewPlayerForm';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { tournApi } from './rest/TournApi';
import TournamentList from './components/TournamentList';
import { PlayerList } from './components/PlayerList';

function App() {

  const addTournament = async (newTournamentName) => {
    let newTournament = {
      name: newTournamentName,
      players: [],
      timestamp: Date.now()
    }

    await tournApi.postTournament(newTournament);
  }

  const addPlayer = async (newPlayerName) => {
    let newPlayer = {
      name: newPlayerName,
      points: null,
      matches: [],
    }

    await tournApi.postTournament(newPlayer);
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <TournamentList />
            <NewTournamentForm addTournament={addTournament} />
            <PlayerList />
            <NewPlayerForm addPlayer={addPlayer} />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
