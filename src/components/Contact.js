import React, {useRef, useState} from 'react';
import {Alert, Button, Container, Spinner,} from "react-bootstrap";
import emailjs from '@emailjs/browser';

const Contact = ({lang}) => {
    const form = useRef();
    const [loading, setLoading] = useState(false)
    const [isSent, setIsSent] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        msg: "",
    });
    const onChange = (event, attribute) => setData({...data, [attribute]: event.target.value});
    const sendEmail = (e) => {
        console.log(data);
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_90lhrcg',
            'template_epmv7fi', form.current,
            'u6ft_vqteHGQUZKvs')
            .then((result) => {
                console.log(result.text);
                setIsSent(true);
                setLoading(false);
            }, (error) => {
                window.alert("Message not sent " + error.text)
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
                                    <input onChange={e => onChange(e, "name")}
                                           name={"user_name"} className="form-control" id="name" type="text"
                                           placeholder="Tuo nome *"
                                           data-sb-validations="required"/>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">Un nome e'
                                        richiesto.
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input onChange={e => onChange(e, "email")} name={"user_email"}
                                           className="form-control" id="email" type="email"
                                           placeholder="Email *"
                                           data-sb-validations="required,email"/>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">Un indirizzo
                                        email
                                        valido.
                                    </div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email non valida
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">
                                <textarea onChange={e => onChange(e, "msg")} name={"message"} className="form-control"
                                          id="message"
                                          placeholder="Scrivi qui un messaggio *"
                                          data-sb-validations="required"/>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is
                                        required.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            {!isSent &&
                                <Button onClick={sendEmail} id="submitButton" type={"submit"} disabled={!data.name.length > 0 || !data.email.length > 0 || !data.msg.length > 0}>
                                    {!loading && "Invia Messaggio"}
                                    {loading && <Spinner animation="border" variant="light"/>}
                                </Button>
                            }
                        </div>
                    </form>
                    <Alert show={isSent} variant="success">
                        <Alert.Heading>Grazie per averci contattato!</Alert.Heading>
                        <p>
                            Vi risponderemo il prima possibile.
                        </p>
                        <hr/>
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setIsSent(false)} variant="outline-success">
                                Chiudi
                            </Button>
                        </div>
                    </Alert>
                </div>
            </Container>

        </section>
    );
};
export default Contact;