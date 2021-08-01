import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return(
    <div>
        <Row>
            <Col>
                <h1>Welcome to the Tournament Manager</h1>
                <p>This app is meant to record your players and tournament matches. It's best to start off 
                    adding your players first and then adding a tournament to add them to. Where would you 
                    like to start?</p>            
            </Col>        
            <Col>
                <Card style={{ width: '18rem' }}>                    
                    <Card.Body>
                        <Card.Title>Add Tournament</Card.Title>
                        <Card.Text>
                            Add a new tournament and add players and record matches to it.
                        </Card.Text>
                        <Link to='/tournaments'><Button variant="primary">Tournaments</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>                    
                    <Card.Body>
                        <Card.Title>Add Players</Card.Title>
                        <Card.Text>
                            Add new players available for tournaments.
                        </Card.Text>
                        <Link to='/players'><Button variant="primary">Players</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
    )
}

export default HomePage;