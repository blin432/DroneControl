import React, { Component } from 'react';
import {Row,Col,Container,Alert} from 'react-bootstrap';
import './App.css';
import "../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import nipplejs from 'nipplejs';
import JoyWrapper from './Joystick.js'
import ReactNipple from 'react-nipple';





class FlightData extends Component {
  constructor(props){
    super(props)
    this.state = {
      flightInfo:[]
    
    }
    
}  
          

  
  render() {
    
    return (
        <Container className="flight-container">
          <Row >
              <Col  className="flight-data" style={{backgroundColor:"black",color:"green",width:"100%"}}>
              Flight data... 
              <br></br>     
              <p>x:{this.props.x}</p>
              <p>y:{this.props.y}</p>
              <p>xDirection:{this.props.xDirection}</p>
              <p>yDirection:{this.props.yDirection}</p>
              <p>angle:{this.props.angle}</p>
              </Col>
            </Row>
        </Container>
    );
  }
}

export default FlightData;


