import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const NewPlayerForm = ( props ) => {
    
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlID="newPlayerName">
                    <Form.Label>Player Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Player Name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}