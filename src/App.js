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
import { useEffect, useState } from 'react';
import { MatchResultForm } from './components/MatchResultForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  const [ playerList, setPlayerList ] = useState('');
  const [ tournamentList, setTournamentList ] = useState('');
  
  useEffect(() => {
    fetchPlayers();
  }, []);

  const addTournament = async (newTournamentName) => {
    let newTournament = {
      name: newTournamentName,
      players: [],
      timestamp: Date.now()
    }

    await tournApi.postTournament(newTournament);
    await fetchTournaments();
  }

  const addPlayer = async (newPlayerName) => {
    let newPlayer = {
      name: newPlayerName,
      points: null,
      matches: [],
    }

    await tournApi.postPlayer(newPlayer);
    await fetchPlayers();
  }
  
  const fetchTournaments = async () => {
    const tournaments = await tournApi.getAllTournaments();
    console.log(tournaments);
    setTournamentList({ tournaments });
    console.log(`tournamentList`, tournamentList);
  }

  const fetchPlayers = async () => {
    const players = await tournApi.getAllPlayers();
    console.log(players);
    setPlayerList(players);   
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <TournamentList tournamentList={tournamentList} fetchTournaments={fetchTournaments} />
            <NewTournamentForm addTournament={addTournament} />
            <PlayerList fetchPlayers={fetchPlayers} playerList={playerList} />
            <NewPlayerForm addPlayer={addPlayer} />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
