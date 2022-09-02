import React, {useState} from "react";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {galleryItems, images} from "../costants/costant";
const ImageComponent = ({img,show,handleClose,handleShow,item}) => (
    <>
        <Modal show={show} onHide={() => handleClose(item)} centered size={'lg'}>
            <Modal.Header closeButton>
                {/*    <Modal.Title>Modal heading</Modal.Title>*/}
            </Modal.Header>
            <Modal.Body>
                <img className="img-fluid d-block mx-auto" src={img} alt="..."/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => handleClose(item)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        <Col lg={4} md={6} style={{marginBottom: 20}}>
            <div className="portfolio-item" onClick={() => handleShow(item)}>
                <a className="portfolio-link" data-bs-toggle="modal" href="#gallery">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <i className="fas fa-plus fa-3x"/>
                        </div>
                    </div>
                    <img className="img-fluid" src={img} alt="..."/>
                </a>
            </div>

        </Col>
    </>
)


function Gallery({lang}) {
    const [show, setShow] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    });
    const handleClose = (item) => setShow({...show,[item]: false});
    const handleShow = (item) => setShow({...show,[item]: true});
    return (
        <div>

            <section id={'gallery'} className="page-section bg-light">
                <Container>
                    <div style={{
                        textAlign: "center",
                    }}>
                        <h2 className="section-heading text-uppercase">{galleryItems.title[lang]}</h2>
                        <h3 className="section-subheading text-muted">{galleryItems.subtitle[lang]}</h3>
                    </div>
                    <Row>
                        {images.map((item,i)=>
                            <ImageComponent key={i} img={item.img} show={show[i]} handleClose={handleClose} handleShow={handleShow} item={i}/>
                        )}
                    </Row>
                </Container>
            </section>
        </div>
    );
}
export default Gallery;