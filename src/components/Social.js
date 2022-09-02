import {Col, Container, Row} from "react-bootstrap";
import facebook from '../assets/img/logos/facebook.svg'
import google from '../assets/img/logos/google.svg'
import instagram from '../assets/img/logos/instagram-seeklogo.com.svg'

export const Social = () => (
    <Container style={{paddingTop: 20, paddingBottom: 20}}>
        <Row>
            <Col lg={4} sm={12} style={{textAlign: "center", paddingBottom: 20, paddingTop: 10}}>
                <a href="https://www.facebook.com/oliosorrentino/about">
                    <img height={40} src={facebook} alt="follow on facebook"/>
                </a>
            </Col>
            <Col lg={4} sm={12} style={{textAlign: "center", paddingBottom: 20, paddingTop: 10}}>
                <a href="https://instagram.com/oliosorrentino">
                    <img height={40}
                         src={instagram} alt="follow on instagram"/>
                </a>
            </Col>
            <Col lg={4} sm={12} style={{textAlign: "center", paddingBottom: 20, paddingTop: 10}}>
                <a href="https://maps.app.goo.gl/kYJet3VSM457QNbt8?g_st=iw">
                    <img height={40} src={google} alt="follow on google+"/>
                </a>
            </Col>
        </Row>

    </Container>
);