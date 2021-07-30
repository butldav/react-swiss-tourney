import React, {useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const AddPlayerForm = ( props ) => {
    const [ playerId, setPlayerId ] = useState('');
    const params = useParams();
    const tournamentId = params.tournamentId;
    const players = props.playerList;
    const addTournamentPlayer = props.addPlayer;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(playerId) {
            // let addPlayer = players.filter((player) => player.id == playerId)
            addTournamentPlayer(playerId, tournamentId);
        }

    }

    return(
     <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="matchWinner">
                        <Form.Control as="select" onChange={(e) => setPlayerId(e.target.value)}>
                            {players.map((player) => <option key={player.id} value={player.id}>{player.name}</option> )}                            
                        </Form.Control>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
     </div>   
    )
}