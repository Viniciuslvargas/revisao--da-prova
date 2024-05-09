import React from "react";
import Footer from "../components/Footer";
import Galeria from "../components/Galeria";
import Header from "../components/Header";
import '../styles/styles.css'
import Lista from "../components/ListItems";

function Home(){
    return(
    <> 
        <Header/>
        <Galeria/>
        <Lista/>
        <Footer/>
    </>
)}

export default Home