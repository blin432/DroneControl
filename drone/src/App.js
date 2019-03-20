import React, { Component } from 'react';
import {Row,Col,Container,Alert} from 'react-bootstrap';
import './App.css';
import "../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import nipplejs from 'nipplejs';
import JoyWrapper from './Joystick.js'
import ReactNipple from 'react-nipple';





class App extends Component {
  
  render() {
    return (
      <Container>
        <Row>
          <Col   style={{height:"500px"}} className="elevate" >
            <Row className="pt-4 d-flex justify-content-center" >
                <img alt="button"
                style={{height:"100px", witdh:"100px"}}
                src="https://www.shareicon.net/data/128x128/2016/11/09/851194_arrows_512x512.png" 
                onClick={(e) => this.props.move({keyCode:38})}></img>
            </Row>
            <Row className="pb-4 d-flex justify-content-center">
              <img alt="button" 
              style={{height:"100px", witdh:"100px"}} 
              src="https://www.shareicon.net/data/128x128/2016/11/09/851184_multimedia_512x512.png" 
              onClick={(e) => this.props.move({keyCode:40})} ></img>
            </Row>
          </Col>
          <Col xs={6} >
            <Row>
            <Col xs lg="1">
            <div className="led-box">
            <div className="led-green"></div>
            </div>
             </Col>
             <Col >
              <Alert variant="success">
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep things nice
                  and tidy.
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
          <Col>
            <Row>
              <Col style={{backgroundColor:"black",color:"green",height:"250px"}}>
              Flight data... 
              </Col>
            </Row>
            <Row>
              <Col style={{height:"250px", backgroundColor:"grey"}} >
              <ReactNipple
                    // supports all nipplejs options
                    // see https://github.com/yoannmoinet/nipplejs#options
                    options={{ mode: 'static', position: { top: '50%', left: '50%' } }}
                    // any unknown props will be passed to the container element, e.g. 'title', 'style' etc
                    style={{
                        outline: '1px dashed red',
                        width: 150,
                        height: 150
                        // if you pass position: 'relative', you don't need to import the stylesheet
                    }}
                    // all events supported by nipplejs are available as callbacks
                    // see https://github.com/yoannmoinet/nipplejs#start
                    onMove={(evt, data) => console.log(evt, data)}
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


