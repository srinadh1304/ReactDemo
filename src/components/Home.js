import React, { Component } from 'react'
import '../css/Home.css'

import logo from '../assets/img/logo.jpeg'


class Home extends Component 
{
    render() {
        return (
            <body>
            <nav class="navigationItem">
                <div class="navigationItemLinks">
                    <a href="home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="about">About</a>
                </div>
            </nav>
            <div class="mainContainer">
                <header class="headerContainer">
                    <h1>Bridgelabz is cool</h1>
                    <h3>We Guarantee Your Dream Job!</h3>
                </header>
                <div class="content">
                    <div class="mainContent">
        
                        <img src={logo} alt="Hover Text." width="25%"/>
                        <p>At Bridgelabz,we're a techie community of</p>
                        <ul>
                            <li>technologists</li>
                            <li>thinkers</li>
                            <li>builders</li>
                        </ul>
                        <p>
                            Working togeter to keep the tech Employability of engineers alive and
                            accesible,so Tech Companies worldwide can get contributors and
                            creators for Technology solutions.We believe this act of human
                            collaboration across an Employability platform is essential to individual
                            growth and our collective future.
                        </p>
                        <p>
                            To know about us,visit <a href="https://www.bridgelabz.com/">Bridgelabz</a> to learn even more about
                            our
                            mission i.e <strong> Employability to all</strong>
                        </p>
                    </div>
        
                    <aside class="asideContainer">
                        <div class="asideContainerItem">
                            <h3>Vision</h3>
                            <p>Be Synonymous With Employability</p>
                        </div>
                        <div class="asideContainerItem">
                            <h3>Mission</h3>
                            <p>Impact 1 Million Jobs By 2025</p>
                        </div>
                    </aside>
                </div>
                <footer class="footerContainer">
                    <a href="mailto:contactus@bridgelabz.com"> contactus@bridgelabz.com</a>
                    <br/><a href="mailto:press@bridgelabz.com"> press@bridgelabz.com</a>
        
                </footer>
            </div>
        </body>
        )
    }
}

export default Home