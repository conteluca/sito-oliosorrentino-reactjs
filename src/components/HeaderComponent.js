import React from 'react';
import {Button, Container} from "react-bootstrap";

const HeaderComponent = ({lang}) => {
    const titles = {
        heading: {
            IT: 'Azienda Agricola Sorrentino',
            EN: "Sorrentino' s Farm"
        },
        subheading: {
            IT: 'Benvenuti In',
            EN: 'Welcome to',
        },
        heading_button: {
            IT: 'Esplora',
            EN: 'Explore',
        }
    }
    return (
        <header>
            <Container className={'main'}>
                <div className={'subheading'}>{titles.subheading[lang]}</div>
                <div className={'heading'}>{titles.heading[lang]}</div>
                <Button href={'#products'}>{titles.heading_button[lang]}</Button>
            </Container>
        </header>
    );
};

export default HeaderComponent;