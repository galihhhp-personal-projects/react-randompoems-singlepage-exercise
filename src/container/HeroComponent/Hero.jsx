import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./hero.css";

class Hero extends Component {
  render() {
    return (
      <Container fluid className="" id="heroBackground">
        <div className="d-flex flex-column mb-3 align-items-center">
          <div className="p-2 title">
            <h1 className="head mr-3">
              HAPPY CAT, <br /> HAPPY FAMILY
            </h1>
            <p className="text-white body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              corporis voluptates
              <br /> expedita et ipsum doloremque quidem nulla nihil. Ullam
              adipisci magni autem
              <br /> illo consectetur nam ratione quaerat tempora temporibus
              voluptatibus!
            </p>
            <Button id="cta">ADOPT ME!</Button>
          </div>
          <div className="p-2 body">
            <Row>
              <Col sm>sm=true</Col>
              <Col sm>sm=true</Col>
              <Col sm>sm=true</Col>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default Hero;
