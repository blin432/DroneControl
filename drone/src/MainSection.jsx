import React, { Component } from 'react';
import {Row,Col,Container,Alert} from 'react-bootstrap';

import "../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import nipplejs from 'nipplejs';
import JoyWrapper from './Joystick.js'
import ReactNipple from 'react-nipple';
import FlightData from './FlightData.jsx'
import './App.css';




class MainSection extends Component {
  constructor(props){
    super(props)
    this.state = {
   
    }
    
}  
           
  render() {
    
    return (
      
          <Col   xs={{span:12,order:1}} sm={{span:12,order:1}} 
          md={{span:6,order:2}} lg={{span:6,order:2}}>
            <Row>
            <Col xs={1} sm={1} lg="1">
            <div className="led-box">
            <div className={this.props.onlineStatus}></div>
            </div>
             </Col>
             <Col xs={11} sm={11}  lg={11}>
              <Alert variant="success">
                <p className="mb-0">
                  Press Space Bar to initiate
                </p>
              </Alert>
             </Col>
            </Row>
            <Row>
             <Col >
             <Player
                playsInline
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                fluid={true}
                height={272}
              />
             </Col>
            </Row>
          </Col>
    );
  }
}

export default MainSection;


