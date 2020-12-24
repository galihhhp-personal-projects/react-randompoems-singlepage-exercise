import React, { Component } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends Component {
  state = {
    todo: [],
    formTodo: {
      id: 1,
      userId: 1,
      todo: "",
      note: "",
      deadline: "",
    },
  };

  render() {
    return (
      <Container fluid className="mt-5 ml-3">
        <Row>
          <Col sm={4}>
            <Card>
              <Card.Header as="h5" id="cardHeader">
                To do list
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formTodo">
                    <Form.Label>Todo</Form.Label>
                    <Form.Control type="text" placeholder="Enter todo list" />
                  </Form.Group>
                  <Form.Group controlId="formNote">
                    <Form.Label>Note</Form.Label>
                    <Form.Control type="text" placeholder="Enter note" />
                  </Form.Group>
                  <Form.Group controlId="formControlBody">
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Button id="submitButton" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={8}>
            {this.state.todo.map((todo) => {
              return (
                <Card key={todo.id} data={todo}>
                  <Card.Header id="cardHeader">{this.props.data.todo}</Card.Header>
                  <Card.Body>
                    <Card.Title>{this.props.data.note}</Card.Title>
                    <Card.Title>{this.props.data.deadline}</Card.Title>
                    <Button variant="success">Done</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
