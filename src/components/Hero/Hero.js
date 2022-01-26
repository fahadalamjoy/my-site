import React, { Component } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import facebook from '../images/facebook.png'
import github from '../images/github.png'
import myImage from '../images/image1.svg'
import instagram from '../images/insta.png'
import linkdin from '../images/linkdin.png'
import Behance from '../images/behance.png'
import './Hero.css'

export default class Hero extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className='columone'>
            <h1>
              Hello, <span className='span'>My Name is</span>
            </h1>
            <h1 className='fahad'>Fahad Alam Joy</h1>
            <p className='description'>Web Developer & Designer</p>
            <a href={'https://portfolioo-page.netlify.app/'}>
              <Button className='buton'>Portfolio</Button>
            </a>
            <a
              href={
                'https://drive.google.com/file/d/1iZObNztdlFAhLnXIQv_hHwxhbvTibKwQ/view?usp=sharing'
              }
            >
              <Button className='buton cv'>My CV</Button>
            </a>
            <div className='social'>
              <a href={'https://www.facebook.com/fahad.alam.joy/'}>
                {' '}
                <img className='socialicon' src={facebook} alt='Logo' />
              </a>
              <a href={'https://www.instagram.com/fahad_alam_joy_/'}>
                <img className='socialicon' src={instagram} alt='instagram' />
              </a>
              <a href={'https://www.linkedin.com/in/fahad-alam-joy/'}>
                <img className='socialicon' src={linkdin} alt='Linkdin' />
              </a>
              <a href={'https://github.com/fahadalamjoy'}>
                <img className='socialicon' src={github} alt='github' />
              </a>
              <a href={'https://www.behance.net/fahadalam4'}>
                <img className='socialicon' src={Behance} alt='behance' />
              </a>
            </div>
          </Col>
          <Col>
            <img className='image' src={myImage} alt='Logo' />
          </Col>
        </Row>
      </div>
    )
  }
}
