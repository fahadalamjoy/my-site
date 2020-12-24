import React, { Component } from 'react'
import { Col,Row } from 'react-bootstrap';
import image from '../images/about.jpg'
import './about.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1 className="expert">About Me</h1>
                <div>
                    <Row>
                        <Col>
                            <p className="aboutme">Hi! I’m Fahad.I studied in Electronic & Telecommunication Engineering at East West University.I have great passion in design and development so i choose this field and also I am self-taught developer I just love to learn. I have done some project to develop my skill.</p>
                        </Col>
                        <Col>
                            <img className="image" src={image} alt="Joy" />

                        </Col>
                    </Row>
                </div>
                
                <div className="footer">
                    <Row>
                        <Col>
                            <h3>Location</h3>
                            <p className="foot">East Hazinagar,Sarulia,
                             Demra-Dhaka. 1361</p>
                        </Col>
                        <Col>
                            <h3 >CONTACT INFORMATION</h3>
                            <h5 className="foot">Email:   jfahadalam@gmail.com</h5>
                            <h5 className="foot">Phone: +8801679104689</h5>

                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}
