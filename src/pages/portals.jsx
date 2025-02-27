import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, InputGroup, Form } from 'react-bootstrap';
import '../styles/researchPortal.css';
import { Dot } from 'lucide-react';

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
        <Container fluid className="hero-section">
            <Row className="align-items-center">
                {/* Left Side - Text & Buttons */}
                <Col md={6} className="text-white">
                    <h2 className="fw-bold">Hire the best freelancers for any job, online.</h2>
                    <ul className="list-unstyled">
                        <li><Dot /> World's largest freelance marketplace</li>
                        <li><Dot /> Any job you can possibly think of</li>
                        <li><Dot /> Save up to 90% & get quotes for free</li>
                        <li><Dot /> Pay only when you're 100% happy</li>
                    </ul>
                    <div className="mt-4 d-flex gap-3">
                        {portals.map((card) => (
                            <PortalCard key={card.title} {...card} />
                        ))}
                    </div>
                </Col>
                
                {/* Right Side - Compact Chatbox */}
                <Col md={4} className="ms-auto">
                    <ChatBox />
                </Col>
            </Row>
        </Container>
    );
}

function PortalCard({ buttonText, route }) {
    return (
        <div>
            <Card.Body className="p-0">
                <Button variant="primary" to={route} className='custom-button'>
                    {buttonText}
                </Button>
            </Card.Body>
        </div>
    );
}

// Compact Chatbox Component
function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: "user" }]);
            setInput(""); // Clear input field
        }
    };

    return (
        <Card className="chatbox-container shadow-sm p-2 m-40 small-chatbox">
            <Card.Body>
                <h6 className="text-center">Chat with AI</h6>
                <div className="chatbox-messages small-chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`chat-message ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <InputGroup className="mt-8">
                    <Form.Control
                        type="text"
                        placeholder="Ask AI..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        className="small-input"
                    />
                    <Button variant="primary" size="sm" onClick={sendMessage}>
                        Send
                    </Button>
                </InputGroup>
            </Card.Body>
        </Card>
    );
}
