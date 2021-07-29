import React from 'react';
import Table from 'react-bootstrap/Table';
import { PlayerList } from './PlayerList';
import { useParams } from 'react-router';

export const Tournament = (props) => {
    const params = useParams();
    const loadTournament = props.loadTournament;
    const playerList = props.playerList;

    if(params.tournamentId) {
        const tournament = loadTournament(params.tournamentId);
        console.log('Line 12 Tournament', tournament);
        console.log('Line 13 Tournament', tournament.players);
        return(
            <div className="tournament">
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>Tournament ID: {tournament.id}</td>
                            <td>Name: {tournament.name}</td>
                            <td>Date Created: {new Date(tournament.timestamp).toLocaleString('en-us')}</td>                        
                        </tr>                        
                    </tbody>
                </Table>
                <PlayerList tournamentPlayers={tournament.players} playerList={playerList} />
            </div>
        )
    }

    return (
        <div className="tournament">
            No Tournament Found
        </div>
    )
}