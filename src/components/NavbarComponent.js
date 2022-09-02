import React, {useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const NavbarComponent = ({lang, setLang}) => {
    const [active, setActive] = useState('products')
    const [scrolledY, setScrolled] = useState(0)
    const [size, setSize] = useState([0, 0]);
    function listenToScroll() {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight
        const scrolled = winScroll / height

        setScrolled(scrolled)
    }
    function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
    }
    useState(() => {
        window.addEventListener('scroll', listenToScroll)
        window.addEventListener('resize', updateSize);
        updateSize();
    })
    const navItems = [
        {
            title: {
                IT: 'PRODOTTI',
                EN: 'PRODUCTS',
            },
            href: '#products',
            isActive: active === 'products',
            onClick: () => setActive('products'),
        },
        {
            title: {
                IT: "L'AZIENDA",
                EN: 'OUR FARM',
            },
            href: '#company',
            isActive: active === 'company',
            onClick: () => setActive('company'),
        },
        {
            title: {
                IT: 'GALLERIA',
                EN: 'GALLERY',
            },
            href: '#gallery',
            isActive: active === 'gallery',
            onClick: () => setActive('gallery'),
        },
        {
            title: {
                IT: 'CONTATTI',
                EN: 'CONTACTS',
            },
            href: '#contacts',
            isActive: active === 'contacts',
            onClick: () => setActive('contacts'),
        },
    ]
    const languages = [
        {
            title: 'Italiano',
            isActive: lang === 'IT',
            lang: 'IT',
        },
        {
            title: 'English',
            isActive: lang === 'EN',
            lang: 'EN',
        }
    ]
    return (
        <Navbar variant={scrolledY > 0.05 || size[0]<1400?'dark':'light'} expand="xxl" fixed={'top'}>
            <Container>
                <Navbar.Brand href="#top">
                   <h2>
                       OLIO
                   </h2>
                    <h2 className={'brand-first'}>
                        SORRENTINO
                    </h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="justify-content-end"/>
                <Navbar.Collapse className={'justify-content-end'}>
                    <Nav style={{textAlign: "center"}}>
                        {navItems.map((item, i) =>
                            <Nav.Link key={i} href={item.href} active={item.isActive}
                                      onClick={item.onClick}>{item.title[lang]}</Nav.Link>
                        )}
                        {/*<NavDropdown title={lang} menuVariant="dark">*/}
                        {/*    {languages.map((item, i) =>*/}
                        {/*        <NavDropdown.Item key={i}*/}
                        {/*                          onClick={() => setLang(item.lang)}*/}
                        {/*                          active={item.isActive}>{item.title}</NavDropdown.Item>*/}
                        {/*    )}*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default NavbarComponent;