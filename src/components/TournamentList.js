import React from 'react';
import { tournApi } from '../rest/TournApi';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default class TournamentList extends React.Component {
    state = {
        tournaments: [],
        isLoading: false,
    }
    
    componentDidMount() {
        this.fetchTournaments();
    }

    fetchTournaments = async () => {
        const tournaments = await tournApi.getAllTournaments();
        this.setState({ tournaments });
        if(this.isLoading) {
            this.setState({isLoading: false});
        }
    }

    // handleClick ( 
    //     () => {
    //       if (isLoading) {
    //         simulateNetworkRequest().then(() => {
    //           setLoading(false);
    //         });
    //       }
    //     },
    //     [isLoading]
    // );

    handleClick = () => {
        console.log(`we clicked it boys~`);
        this.setState({isLoading: true});
        this.fetchTournaments().then(setTimeout(this.isLoading = false, 2000));
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
                        <Button 
                            variant="primary"
                            disabled={this.isLoading}
                            onClick={!this.isLoading ? this.handleClick : null}
                        >
                            {this.isLoading ? 'Loading' : 'Refresh'}
                        </Button>
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