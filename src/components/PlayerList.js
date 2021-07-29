import React, { useEffect, useState } from 'react';
import { tournApi } from '../rest/TournApi';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { LoadingButton } from './RefreshButton';

export const PlayerList = ( props ) => {    
    const tournamentPlayers = props.tournamentPlayers;
    const playerList = props.playerList;
    let players = [];

    if(tournamentPlayers) {        
        players = playerList.filter((player) => {
            return tournamentPlayers.includes(player.id);
        })
    } else {
        players = props.playerList;
    }
    console.log(props.playerList);
    if(players !== undefined && players.length > 0) {
        return(
            <div className="player-list col">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Player Name</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player) => (
                            <tr key={player.id}>
                                <td>{player.id}</td>
                                <td>{player.name}</td>
                                <td>{player.points ? player.points : '0'}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    } else {
        return(
            <div>
            <Alert variant='primary'>
                No Players Found
            </Alert>
            <LoadingButton actionFunc={props.fetchPlayers} />
            </div>
        )
    }    
}
