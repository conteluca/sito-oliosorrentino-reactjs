import React from 'react';
import {Button, Container} from "react-bootstrap";

const Contact = ({lang}) => {
    return (
        <section id={'contacts'} className={'page-section'}>
            <Container style={{textAlign: 'center'}}>
                <h2 className="section-heading text-uppercase">Contattaci</h2>
                <h3 className="section-subheading text-muted">Perchè limitarsi a guardare. Contattaci.</h3>
                <form action="" id="contactForm">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Tuo nome *"
                                       data-sb-validations="required"/>
                                <div className="invalid-feedback" data-sb-feedback="name:required">Un nome e'
                                    richiesto.
                                </div>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" type="email" placeholder="Email *"
                                       data-sb-validations="required,email"/>
                                <div className="invalid-feedback" data-sb-feedback="email:required">Un indirizzo email
                                    valido.
                                </div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email non valida</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" id="message" placeholder="Scrivi qui un messaggio *"
    data-sb-validations="required"/>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is
                                    required.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <Button variant={'primary'} className="btn btn-primary" id="submitButton"
                                type="submit">Invia
                            Messaggio
                        </Button>
                    </div>
                </form>
            </Container>
        </section>
    );
};

export default Contact;