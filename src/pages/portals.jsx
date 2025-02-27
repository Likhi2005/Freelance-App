import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/researchPoratal.css'

import {Dot} from 'lucide-react';

export default function ResearchPortal() {
    const portals = [
        {
            title: 'Hire a Freelancer',
            route: '/post-project',
            buttonText: 'Hire a Freelancer'
        },
        {
            title: 'Looking for Job',
            route: '/sign-up',
            buttonText: 'Find Job'
        }
    ];

    return (
        <div>
            <Container fluid className="hero-section">
                <Row className="align-items-center">
                    <Col md={6} className="text-white">
                            <h2 className="fw-bold">Hire the best freelancers for any job, online.</h2>
                            <ul className="list-unstyled">
                                <li> <Dot /> Worlds largest freelance marketplace</li>
                            <li><Dot />&nbsp;Any job you can possibly think of</li>
                            <li><Dot />Save up to 90% & get quotes for free</li>
                            <li><Dot />Pay only when youre 100% happy</li>
                            </ul>
                        <div className="mt-4 d-flex gap-3">
                            {portals.map((card) => (
                                <PortalCard key={card.title} {...card} />
                            ))}
                            </div>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
}

function PortalCard({ buttonText, route }) {
    return (
        <div>
            <Card.Body className="p-0">
                <Button variant="primary" as={Link} to={route} className='custom-button'>
                    {buttonText}
                </Button>
            </Card.Body>
        </div>
    );
}