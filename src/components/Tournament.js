import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { PlayerList } from './PlayerList';
import { useParams } from 'react-router';

export const Tournament = (props) => {
    const params = useParams();
    const loadTournament = props.loadTournament;
    const playerList = props.playerList;
    const loadedTournament = props.loadedTournament;
    
    useEffect(() => {
        if(params.tournamentId && !loadedTournament) {
            console.log('Tournament loaded on Line 13 in Tournament.js');
            loadTournament(params.tournamentId);
        }
    })


    if(params.tournamentId && loadedTournament) {
        console.log('Line 12 Tournament', loadedTournament);
        console.log('Line 13 Tournament', loadedTournament.players);
        return(
            <div className="tournament">
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>Tournament ID: {loadedTournament.id}</td>
                            <td>Name: {loadedTournament.name}</td>
                            <td>Date Created: {new Date(loadedTournament.timestamp).toLocaleString('en-us')}</td>                        
                        </tr>                        
                    </tbody>
                </Table>
                <PlayerList tournamentPlayers={loadedTournament.players} playerList={playerList} />
            </div>
        )
    }

    return (
        <div className="tournament">
            No Tournament Found
        </div>
    )
}