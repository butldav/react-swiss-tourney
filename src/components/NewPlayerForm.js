import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const NewPlayerForm = ( props ) => {
    const [ playerName, setPlayerName ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(playerName) {
            props.addPlayer(playerName);
        } else {
            console.log('invalid input - player form');
            console.log(playerName);
        }
        setPlayerName('');
    }
    
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlID="newPlayerName">
                    <Form.Label>Player Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Player Name" 
                        onChange={(e) => setPlayerName(e.target.value)} 
                        value={playerName}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}