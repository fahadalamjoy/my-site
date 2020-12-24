import React, { Component } from 'react'
import './Hero.css'
import { Col,Row,Button } from 'react-bootstrap';
import facebook from '../images/facebook.png'
import instagram from '../images/insta.png'
import linkdin from '../images/linkdin.png'
import github from '../images/github.png'
import myImage from '../images/image1.jpg'

export default class Hero extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="columone">
                        <h1>Hello, <span className="span">My Name is</span></h1>
                        <h1 className="fahad">Fahad Alam Joy</h1>
                        <p className="description">I’m expert in web development and Ux/Ui design</p>
                        <Button className="buton">Portfolio</Button>
                        <div className="social">
                           <a href={"https://www.facebook.com/fahad.alam.joy/"}> <img className="socialicon" src={facebook} alt="Logo" /></a>
                            <a href={"https://www.instagram.com/fahad_alam_joy_/"}><img  className="socialicon" src={instagram} alt="instagram" /></a>
                            <a href={"https://www.linkedin.com/in/fahad-alam-joy-b43b1b19b/"}><img className="socialicon" src={linkdin} alt="Linkdin" /></a>
                            <a href={"https://github.com/fahadalamjoy"}><img className="socialicon"src={github} alt="github" /></a>
                        </div>
                    </Col>
                    <Col><img className="image" src={myImage} alt="Logo" /></Col>
                </Row>
                
            </div>
        )
    }
}
