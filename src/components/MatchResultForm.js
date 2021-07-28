import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { tournApi } from '../rest/TournApi';

export const MatchResultForm = ( props ) => {
    const [ matchWinner, setMatchWinner ] = useState('');
    const match = props.match;
    const tournamentId = match.tournamentId;
    const [ player1, player2 ] = [...match.players];
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        let winner = match.players.filter(player => player.id === matchWinner);
        let newMatch = {
            players: match.players,
            winner: winner,
            id: match.id,
            tournamentId: tournamentId,
        }
        if(matchWinner) {

            await tournApi.postTournamentMatch(tournamentId, newMatch);
        } else {
            console.log('invalid input - match result form', match);
        }
        setMatchWinner('');
    }

    if(player1 !== undefined && player2 !== undefined) {
        return(
            <div className="match-result col">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="matchWinner">
                        <Form.Control as="select" onChange={(e) => setMatchWinner(e.target.value)}>
                            <option value={player1.id}>{player1.name}</option>
                            <option value={player2.id}>{player2.name}</option>
                        </Form.Control>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}