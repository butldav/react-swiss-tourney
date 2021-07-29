import React, {useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const AddPlayerForm = ( props ) => {
    const [ playerId, setPlayerId ] = useState('');
    const tournamentId = props.tournamentId;
    const players = props.playerList;
    const addTournamentPlayer = props.addPlayer;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(playerId) {
            let addPlayer = players.filter((player) => player.id == playerId)
            props.addTournamentPlayer(addPlayer, tournamentId);
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