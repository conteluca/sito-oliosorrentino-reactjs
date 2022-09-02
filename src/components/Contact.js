import React, {useRef, useState} from 'react';
import {Button, Container, ProgressBar, Spinner} from "react-bootstrap";
import emailjs from '@emailjs/browser';

const Contact = ({lang}) => {
    const form = useRef();
    const [loading,setLoading] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_ys9ur2p', 'template_epmv7fi', form.current, 'rp7nMpjyejeSBybeO')
            .then((result) => {
                console.log(result.text);
                window.alert("Message sent "+result.text)
                setLoading(false);
            }, (error) => {
                console.log(error.text);
                window.alert("Message not sent "+error.text)
                setLoading(false);
            });
    };
    return (
        <section id={'contacts'} className={'page-section'}>
            <Container style={{textAlign: 'center'}}>
               <div>
                    <h2 className="section-heading text-uppercase">Contattaci</h2>
                    <h3 className="section-subheading text-muted">Perchè limitarsi a guardare. Contattaci.</h3>
                    <form ref={form} onSubmit={sendEmail} id="contactForm">
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input name={"user_name"} className="form-control" id="name" type="text" placeholder="Tuo nome *"
                                           data-sb-validations="required"/>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">Un nome e'
                                        richiesto.
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input name={"user_email"} className="form-control" id="email" type="email" placeholder="Email *"
                                           data-sb-validations="required,email"/>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">Un indirizzo email
                                        valido.
                                    </div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email non valida</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">
                                <textarea name={"message"} className="form-control" id="message" placeholder="Scrivi qui un messaggio *"
                                          data-sb-validations="required"/>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is
                                        required.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <Button variant={'primary'} className="btn btn-primary" id="submitButton"
                                    type="submit">
                                {!loading && "Invia Messaggio"}
                                {loading && <Spinner animation="border" variant="light"/>}
                            </Button>
                        </div>
                    </form>

                </div>}
            </Container>

        </section>
    );
};

/*
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name"/>
                <label>Email</label>
                <input type="email" name="user_email"/>
                <label>Message</label>
                <textarea name="message"/>
                <input type="submit" value="Send"/>
            </form>
* */
/*


* */

export default Contact;