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
import { Navbar, Nav } from 'react-bootstrap';
// import { MatchResultForm } from './components/MatchResultForm';
import { Tournament } from './components/Tournament';
import { AddPlayerForm } from './components/AddPlayerForm';
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
  const [ tournament, setTournament ] = useState('');

  useEffect(() => {
    fetchTournaments();
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
  
  const addTournamentPlayer = async ( newTournamentPlayer, tournamentId ) => {
    let playerTournament = tournApi.getTournament(tournamentId);
    playerTournament.players.push(newTournamentPlayer);
    await tournApi.putTournament(playerTournament);
  }
  
  const fetchTournaments = async () => {
    const tournaments = await tournApi.getAllTournaments();
    
    setTournamentList( tournaments );
    console.log(`tournamentList line 58 App.js`, tournamentList);
  }

  const fetchPlayers = async () => {
    const players = await tournApi.getAllPlayers();
    console.log(players);
    setPlayerList(players);   
  }

  const loadTournament = (tournamentId) => {
    let tournament = {};
    console.log(tournamentList)
    // if(!tournamentList) fetchTournaments();
    console.log('We ran loadTournament', tournamentList);
    tournament = tournamentList.filter((object) => object.id == tournamentId);
    console.log('Line 75 loadTournament', tournament[0]);
    return tournament[0];
  }

  return (
    <div className="App">

      <Container>
        <Row>
          <Col>
          
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">League Manager</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/tournaments">Tournaments</Nav.Link>
                  <Nav.Link href="/players">Players</Nav.Link>
                </Nav>
              </Navbar>
            
          </Col>
        </Row>
        <Row>
          <Col>
          <Router>
            <Switch>
              <Route path={`/tournaments/:tournamentId`}>
                <Tournament loadTournament={loadTournament} playerList={playerList} />
                <AddPlayerForm playerList={playerList} addPlayer={addTournamentPlayer} />
              </Route>
              <Route path="/tournaments">
                <TournamentList tournamentList={tournamentList} fetchTournaments={fetchTournaments} />
                <NewTournamentForm addTournament={addTournament} />
              </Route>
              <Route path="/players">
                <PlayerList fetchPlayers={fetchPlayers} playerList={playerList} />
                <NewPlayerForm addPlayer={addPlayer} />
              </Route>
            </Switch>
            </Router>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
