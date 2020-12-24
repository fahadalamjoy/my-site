import React, { Component } from 'react'
import { Col,Row } from 'react-bootstrap';
import ui from '../images/ux.png'
import web from '../images/web.png'
import graphic from '../images/graphics.png'

import './Expert.css'

export default class Expert extends Component {
    render() {
        return (
            <div>
                <h1 className="expert">Expert In</h1>
                <Row className="every">
                    <Col className="cole">
                    <img className="ui" src={ui} alt="ui" />
                    <h3 className="text">Ux/Ui Design</h3>
                    <p className="uitext">I can do ux/ui with figma and adobe Xd and also for both mobile and web</p>
                    </Col>
                    <Col>
                    <img className="web" src={web} alt="web" />
                    <h3 className="text">Web Development</h3>
                    <p className="uitext">I’m expert in MERN stact. I can develop sites with React,Node,ExpressJS,MongoDB</p>
                    </Col>
                    <Col>
                    <img className="graphic" src={graphic} alt="graphic" />
                    <h3 className="text">Graphics Design</h3>
                    <p className="uitext">I’m also expert in Adobe Photoshop and illustrator. I can design web banner,product design ETC</p>
                    </Col>
                </Row>
            </div>
        )
    }
}
