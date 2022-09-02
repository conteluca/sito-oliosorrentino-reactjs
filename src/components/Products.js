import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {products} from "../costants/costant";

const Products = ({lang}) => {
    return (
        <section id={'products'}>
            <div style={{paddingTop: 120}}/>
            <Container>
                <div style={{paddingBottom: 50}}>
                    <h2>{products.title[lang]}</h2>
                    <p>
                        {products.subtitle1[lang]}
                        <br/>
                        {products.subtitle2[lang]}
                    </p>
                </div>
            </Container>
            <Container>
                    <Row >
                        <Col md={6} sm={12}>
                            <img src={require('../assets/img/home/bottle.jpg')} width={164} height={432}/>
                            <h4 className="my-3">Olio Extravergine di Oliva 0,5L</h4>

                        </Col>
                        <Col md={6} sm={12}>
                            <img src={require('../assets/img/home/tanica.jpg')} width={224} height={432}/>
                            <h4 className="my-3">Olio Extravergine di Oliva 3L</h4>
                        </Col>
                    </Row>
            </Container>
        </section>
    );
};
export default Products;