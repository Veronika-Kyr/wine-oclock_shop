import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/homePage.scss'
//import "../assets/styles/Home.scss";
//import Button from '../components/Button';
//import { Link } from 'react-router-dom';


export default function Homepage() {

    // ***** here we're fetching test data (to test with mirage use api "/test")  ******

    const [testData, setTestData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/main/test')
            .then((resp) => resp.json())
            .then((setTestData))
    }, []);


    return (
        <div className='homepage'>
            <header>
                <Header /></header>

            <main>
                <h2> Hi there! This is the future online shop of the greatest
                    team ever from the Team Challenge platform. Welcome to "Wine o'clock"!
                    Chin-chin!  </h2>
                <h1 className='mainHeading'>buy craft wine
                    from our catalog
                    with free delivery</h1>

                <h2 className='testIhor'>Here we're testing back-end and front-end</h2>

                {testData && testData.map((testItem, index) => {
                    return (
                        <div key={index} >
                            <p className='testIhor'>{testItem.name}</p>
                        </div>
                    )
                })
                }

            </main>

            <footer className='footerSection'>
                <Footer />
            </footer>
        </div>
    )

}