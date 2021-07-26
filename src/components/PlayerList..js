import React, { useEffect } from 'react';
import tournApi from '../rest/TournApi';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export const PlayerList = ( props ) => {
    const [ PlayerList, setPlayers ] = useState('');

    useEffect(() => {
        this.fetchPlayers();
    });

    fetchPlayers = async () => {
        const players = await tournApi.getAllPlayers();
        setPlayers({ players });        
    }
    if(players !== undefined) {
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
                        {PlayerList.map((player) => (
                            <tr>
                                <td>{player.id}</td>
                                <td>{player.name}</td>
                                <td>{player.points ? player.points : '0'}</td>
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
    } else {
        return(
            <Alert variant='primary'>
                No Players Found
            </Alert>
        )
    }    
}
