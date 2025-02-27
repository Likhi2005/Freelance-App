import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import "../styles/footer.css"; // Import the CSS file

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    {/* Logo & Language Selection */}
                    <Col md={3}>
                        <h5 className="fw-bold text-white">freelancer</h5>
                        <p>🌍 <a href="#" className="footer-link">US (International) / English</a></p>
                        <p>❓ <a href="#" className="footer-link">Help & Support</a></p>
                        <p>♿ <a href="#" className="footer-link">Accessibility</a></p>
                    </Col>

                    {/* Freelancer Section */}
                    <Col md={3}>
                        <h6 className="fw-bold">Freelancer</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Categories</a></li>
                            <li><a href="#" className="footer-link">Projects</a></li>
                            <li><a href="#" className="footer-link">Contests</a></li>
                            <li><a href="#" className="footer-link">Freelancers</a></li>
                            <li><a href="#" className="footer-link">Enterprise</a></li>
                            <li><a href="#" className="footer-link">Innovation Challenges</a></li>
                            <li><a href="#" className="footer-link">AI Development</a></li>
                            <li><a href="#" className="footer-link">Membership</a></li>
                            <li><a href="#" className="footer-link">Preferred Freelancer</a></li>
                            <li><a href="#" className="footer-link">Project Management</a></li>
                            <li><a href="#" className="footer-link">Local Jobs</a></li>
                            <li><a href="#" className="footer-link">Photo Anywhere</a></li>
                            <li><a href="#" className="footer-link">Showcase</a></li>
                            <li><a href="#" className="footer-link">API for Developers</a></li>
                            <li><a href="#" className="footer-link">Get Verified</a></li>
                            <li><a href="#" className="footer-link">Desktop App</a></li>
                        </ul>
                    </Col>

                    {/* About Section */}
                    <Col md={2}>
                        <h6 className="fw-bold">About</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">About Us</a></li>
                            <li><a href="#" className="footer-link">How it Works</a></li>
                            <li><a href="#" className="footer-link">Security</a></li>
                            <li><a href="#" className="footer-link">Investor</a></li>
                            <li><a href="#" className="footer-link">Sitemap</a></li>
                            <li><a href="#" className="footer-link">Stories</a></li>
                            <li><a href="#" className="footer-link">News</a></li>
                            <li><a href="#" className="footer-link">Team</a></li>
                            <li><a href="#" className="footer-link">Awards</a></li>
                            <li><a href="#" className="footer-link">Press Releases</a></li>
                            <li><a href="#" className="footer-link">Careers</a></li>
                        </ul>
                    </Col>

                    {/* Terms Section */}
                    <Col md={2}>
                        <h6 className="fw-bold">Terms</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Privacy Policy</a></li>
                            <li><a href="#" className="footer-link">Terms & Conditions</a></li>
                            <li><a href="#" className="footer-link">Copyright Policy</a></li>
                            <li><a href="#" className="footer-link">Code of Conduct</a></li>
                            <li><a href="#" className="footer-link">Fees & Charges</a></li>
                        </ul>
                    </Col>

                    {/* Partners & Apps */}
                    <Col md={2}>
                        <h6 className="fw-bold">Partners</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Escrow.com</a></li>
                            <li><a href="#" className="footer-link">Loadshift</a></li>
                            <li><a href="#" className="footer-link">Warrior Forum</a></li>
                        </ul>

                        <h6 className="fw-bold mt-3">Apps</h6>
                        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/256px-App_Store_%28iOS%29.svg.png"
                            alt="App Store" width="120" className="mb-2" /></a>
                        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/256px-Google_Play_Store_badge_EN.svg.png"
                            alt="Google Play" width="120" /></a>
                    </Col>
                </Row>

                {/* Social Media & Stats */}
                <Row className="mt-4 text-center">
                    <Col md={6} className="text-start">
                        <p className="m-0"><strong>79,328,618</strong> Registered Users</p>
                        <p className="m-0"><strong>24,507,947</strong> Total Jobs Posted</p>
                    </Col>
                    <Col md={6} className="text-end">
                        <a href="#" className="footer-link"><FaFacebook size={24} className="me-3" /></a>
                        <a href="#" className="footer-link"><FaTwitter size={24} className="me-3" /></a>
                        <a href="#" className="footer-link"><FaYoutube size={24} className="me-3" /></a>
                        <a href="#" className="footer-link"><FaInstagram size={24} /></a>
                    </Col>
                </Row>

                {/* Copyright */}
                <Row className="mt-3 text-center">
                    <Col>
                        <p className="small">
                            Freelancer® is a registered Trademark of Freelancer Technology Pty Limited (ACN 142 189 759)
                            <br />
                            Copyright © 2025 Freelancer Technology Pty Limited (ACN 142 189 759)
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
