import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import { BrowserRouter, Route, Link, useRouteMatch } from 'react-router-dom';
import { LoadingButton } from './RefreshButton';

export const TournamentList = ( props ) => {

    const tournamentList = props.tournamentList;
    const fetchTournaments = props.fetchTournaments;
    let rMatch = useRouteMatch();

    if(!tournamentList) {
        return(
            <div>
            <Alert variant='primary'>
                No Tournaments Found
            </Alert>
            <LoadingButton actionFunc={fetchTournaments} />
            </div>
        )
    } else {
        return (
            <div className="tournament-list col">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Player Count</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody> 
                    {tournamentList.map((tournament) => (
                        <tr key={tournament.id}>
                            <td>{tournament.id}</td>
                            <td><Link to={`${rMatch.url}/${tournament.id}`}>{tournament.name}</Link></td>
                            <td>{tournament.players.length}</td>
                            <td>{new Date(tournament.timestamp).toLocaleString('en-us')}</td>
                        </tr>
                    ))}
                </tbody>

            </Table>
            <LoadingButton actionFunc={props.fetchTournaments} />
            </div>
        )
    }    
}

export default TournamentList;