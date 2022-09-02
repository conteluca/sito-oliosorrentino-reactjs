import React, {useState} from "react";
import {ThemeProvider} from "react-bootstrap";
import {HeaderComponent, NavbarComponent, Products, Company, Gallery, Social, Contact} from "./components";


function App() {
    const [lang, setLang] = useState('IT')
    return (
        <ThemeProvider>
            <NavbarComponent lang={lang} setLang={setLang}/>
            <HeaderComponent lang={lang}/>
            <Products lang={lang}/>
            <Company lang={lang}/>
            <Gallery lang={lang}/>
            <Social/>
            <Contact lang={lang}/>
        </ThemeProvider>
    );
}


export default App;
