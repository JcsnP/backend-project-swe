import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {


    render() {
        return (
            <div className="mt-5" style={{backgroundColor: "#F8F8F8", borderTop: "1px solid #CFCFCF"}}>
                <Container className="mt-3">
                    <Row>
                        <Col>
                            <h5>Contact Us</h5>
                            <p>Facebook</p>
                            <p>Instagram</p>
                        </Col>
                        <Col>
                            <h5>Help</h5>
                            <p>Faqs</p>
                        </Col>
                        <Col>
                            <h5>Community</h5>
                            <p>Discord</p>
                        </Col>
                        <Col>
                            <h5>Reviews</h5>
                            TrustScore 4.9 | 315 reviews
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Footer;