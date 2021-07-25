import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const NewTournamentForm = ( props ) => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="newTournamentName">
                    <Form.Label>Tournament Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Tournament Name" />                    
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}