import React, { useEffect, useState } from 'react';
import { tournApi } from '../rest/TournApi';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export const PlayerList = ( props ) => {
    const [ PlayerList, setPlayers ] = useState('');
    // const [ isLoading, setLoading ] = useState(false);

    useEffect(() => {
        //  fetchPlayers();
    console.log('eyo');
    // setPlayers(["1", "2", "3"]);
    }, [PlayerList]);

    const fetchPlayers = async () => {
        const players = await tournApi.getAllPlayers();
        console.log(players);
        setPlayers({ players });        
    }

    function LoadingButton( props ) {
        const [isLoading, setLoading] = useState(false);
        // const [ PlayerList, setPlayers ] = useState('');
        // const fetchPlayers = async () => {
        //     const players = await tournApi.getAllPlayers();
        //     console.log(players);
        //     setPlayers({ players });        
        // }

        useEffect(( props ) => {
          if (isLoading) {
            props.fetchPlayers().then(() => {
              setLoading(false);
            });
          }
        }, [isLoading]);
      
        const handleClick = () => setLoading(true);
      
        return (
          <Button
            variant="primary"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
          >
            {isLoading ? 'Loading…' : 'Click to load'}
          </Button>
        );
      }

    if(PlayerList !== undefined && PlayerList.length > 0 ) {
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
                <LoadingButton />
            </div>
        )
    } else {
        return(
            <div>
            <Alert variant='primary'>
                No Players Found
            </Alert>
            
            <LoadingButton fetchPlayers={fetchPlayers} />
            </div>
        )
    }    
}
