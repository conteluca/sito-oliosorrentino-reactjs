import {Container} from "react-bootstrap";
import {items} from "../costants/costant";
import React from "react";

function Company({lang}) {
    return(
        <section id={'company'} className={'page-section'}>
            <Container className={'container'}>
                <div>
                    <h2>{items.title[lang]}</h2>
                    <p>
                        {items.subtitle[lang]}
                    </p>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image">
                            <img className="rounded-circle img-fluid" src={require('../assets/img/about/tractor.jpg')}
                                 alt="Farm"/>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>{items.section1.title[lang]}</h4>
                                <h4 className="subheading">{items.section1.subtitle[lang]}</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    {items.section1.description[lang]}
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <img className="rounded-circle img-fluid"
                                 src={require('../assets/img/about/olives.jpg')}
                                 alt="Oil"/></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>{items.section2.title[lang]}</h4>
                                <h4 className="subheading">{items.section2.subtitle[lang]}</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    {items.section2.description[lang]}
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid"
                                                             src={require('../assets/img/about/oil.jpg')}
                                                             alt="..."/></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>{items.section3.title[lang]}</h4>
                                <h4 className="subheading">
                                    {items.section3.subtitle[lang]}
                                </h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    {items.section3.description[lang]}
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4 style={{
                                fontWeight: 800,
                            }}>
                                OLIO
                                <br/>
                                EXTRAVERGINE
                                <br/>
                                DI OLIVA!
                            </h4>
                        </div>
                    </li>
                </ul>
            </Container>
        </section>
    )
}
export default Company;