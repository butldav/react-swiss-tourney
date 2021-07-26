import React, { useState } from 'react';
import { tournApi } from '../rest/TournApi';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

export default class TournamentList extends React.Component {
    state = {
        tournaments: []
    }
    
    componentDidMount() {
        this.fetchTournaments();
    }

    fetchTournaments = async () => {
        const tournaments = await tournApi.getTournaments();
        this.setState({ tournaments });
    }

    render() {
        if(this.state.tournaments !== undefined) {      
            if(this.state.tournaments.length > 0 || this.state.tournaments !== undefined) {

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
                                {this.state.tournaments.map((tournament) => (
                                    <tr>
                                        <td>{tournament.id}</td>
                                        <td>{tournament.name}</td>
                                        <td>{tournament.players.length}</td>
                                        <td>{new Date(tournament.timestamp).toLocaleString('en-us')}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </Table>

                    </div>

                )
            }
        } else {
            return (
                <Alert variant='primary'>
                    No Tournaments Found
                </Alert>
            )
        }
    }
}