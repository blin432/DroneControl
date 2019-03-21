import React, { Component } from 'react';
import {Row,Col,Container,Alert} from 'react-bootstrap';

import "../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import nipplejs from 'nipplejs';
import JoyWrapper from './Joystick.js'
import ReactNipple from 'react-nipple';
import FlightData from './FlightData.jsx'
import MainSection from './MainSection.jsx'
import './App.css';




class Elevation extends Component {
  constructor(props){
    super(props)
    this.state = {
     
    }
    
}  
          


  render() {
    
    return (
      
          <div className="elevation-wrapper mobile">
              <Row className="pt-4 d-flex justify-content-center mb-4" >
                    <img alt="button"
                    style={{height:"100px", witdh:"100px"}}
                    src="https://www.shareicon.net/data/128x128/2016/11/09/851194_arrows_512x512.png" 
                    onClick={(e) => this.props.action({keyCode:87})}></img>
                </Row>
                <Row className="d-flex justify-content-center">
                  <img alt="button" 
                  style={{height:"100px", witdh:"100px"}} 
                  src="https://www.shareicon.net/data/128x128/2016/11/09/851184_multimedia_512x512.png" 
                  onClick={(e) => this.props.action({keyCode:83})}></img>
                </Row>
            </div>
            
   
    );
  }
}

export default Elevation;


