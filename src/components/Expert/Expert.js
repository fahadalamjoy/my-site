import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import Reat from '../../components/images/react.png'
import AE from '../images/ae.png'
import Exel from '../images/excel.png'
import Figma from '../images/figma.png'
import mongo from '../images/mongo.png'
import node from '../images/node.png'
import Office from '../images/office.png'
import PR from '../images/pr.png'
import PS from '../images/ps.png'
import redux from '../images/redux.png'
import Typescript from '../images/typescript.png'
import './Expert.css'

export default class Expert extends Component {
  render() {
    return (
      <div>
        <h1 className='expert'>Skills</h1>
        <Col className='every'>
          <Row className='webdev'>
            <img className='ui' src={Reat} alt='ui' />
            <img className='ui' src={Typescript} alt='ui' />
            <img className='ui' src={redux} alt='ui' />
            <img className='ui' src={node} alt='ui' />
            <img className='ui' src={mongo} alt='ui' />
          </Row>
          <Row className='design'>
            <img className='ui' src={Figma} alt='ui' />
            <img className='ui' src={PS} alt='ui' />
            <img className='ui' src={PR} alt='ui' />
            <img className='ui' src={AE} alt='ui' />
          </Row>
          <Row className='micro'>
            <img className='ui' src={Exel} alt='ui' />
            <img className='ui' src={Office} alt='ui' />
          </Row>
        </Col>
      </div>
    )
  }
}
