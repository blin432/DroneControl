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




class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      onlineStatus:"red",
      x:0,
      y:0,
      xDirection:"",
      yDirection:"",
      angle:"",
      elevationPositive:0,
      elevationNegative:0
    }
    
}  
          
componentDidMount(){
    document.addEventListener("keydown", (e) => this.action(e));
    
}

componentWillUnmount() {
    document.removeEventListener("keydown", (e) => this.action(e));
}
  
action({keyCode}){
  switch( keyCode ) {
      case 32:
          
          this.setState({onlineStatus:"green"}) 
          break;
      case 87:
          let  newPositveElevation = this.state.elevationPositive +1;
          this.setState({elevationPositive:newPositveElevation})  
          break;
      case 83:
          let  newNegativeElevation = this.state.elevationPositive - 1;
          this.setState({elevationNegative:newNegativeElevation})  
          break;
      default: 
          break;
  }
}

  render() {
    
    return (
      <Container style={{marginTop:"50px"}}>
        <Row>
          <Col xs={{span:12,order:2}} sm={{span:12,order:2}}
          md={{span:3,order:1}} lg={{span:3,order:1}} >
          <FlightData {...this.state}/>
            <Row className="d-flex align-content-end gif-image">
                  <img className="gif-image"
                  style={{height:"100px", witdh:"100px"}}
                  src="https://thumbs.gfycat.com/ImportantEthicalFantail-max-1mb.gif" 
                  ></img>
            </Row>
          </Col>
          <MainSection {...this.state} />
          <Col  xs={{span:12,order:3}} sm={{span:12,order:3}} 
          md={{span:3,order:3}} lg={{span:3,order:3}}
          className="controller-wrapper">
          <div className="elevation-wrapper">
              <Row className="pt-4 d-flex justify-content-center" >
                    <img alt="button"
                    style={{height:"100px", witdh:"100px"}}
                    src="https://www.shareicon.net/data/128x128/2016/11/09/851194_arrows_512x512.png" 
                    onClick={(e) => this.props.move({keyCode:38})}></img>
                </Row>
                <Row className="d-flex justify-content-center">
                  <img alt="button" 
                  style={{height:"100px", witdh:"100px"}} 
                  src="https://www.shareicon.net/data/128x128/2016/11/09/851184_multimedia_512x512.png" 
                  ></img>
                </Row>
            </div>
            <Row className="nippleContainer" >
              <Col className="nipple" style={{height:"250px", backgroundColor:"grey"}} >
              <ReactNipple
                    // supports all nipplejs options
                    // see https://github.com/yoannmoinet/nipplejs#options
                    options={{ mode: 'static', position: { top: '50%', left: '50%' } }}
                    // any unknown props will be passed to the container element, e.g. 'title', 'style' etc
                    
                        // if you pass position: 'relative', you don't need to import the stylesheet
              
                    // all events supported by nipplejs are available as callbacks
                    // see https://github.com/yoannmoinet/nipplejs#start
                    onMove={(evt, data) => {
                       console.log(evt,data);
                      this.setState({
                        x:data.position.x,
                        y:data.position.y,
                        xDirection:data.direction.x,
                        yDirection:data.direction.y,
                        angle:data.direction.angle
                      })
                    }}
                />  
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> 
    );
  }
}

export default App;


