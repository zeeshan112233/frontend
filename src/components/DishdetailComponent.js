import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
  Label,
} from "reactstrap";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";
import { LocalForm, Control, Errors } from "react-redux-form";
import "bootstrap/dist/css/bootstrap.min.css";
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.showSubmit = this.showSubmit.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  showSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
  }
  render() {
    return (
      <Row className='form-group'>
        <Col md={{ size: 10, offset: 2 }}>
          <React.Fragment>
            <Button type='submit' icon color='light' onClick={this.showModal}>
              <i className='fa fa-pencil'></i>
              <span>&nbsp;&nbsp;</span>Submit Comment
            </Button>
            <Modal isOpen={this.state.show} toggle={this.showModal}>
              <ModalHeader toggle={this.hideModal}>
                <h3>Submit Comment</h3>
              </ModalHeader>
              <ModalBody>
                <LocalForm onSubmit={(values) => this.showSubmit(values)}>
                  <Label htmlFor='ratings' md={4}>
                    <b>Ratings</b>
                  </Label>
                  <Row className='form-group'>
                    <Col md={12}>
                      <Control.select
                        model='.ratings'
                        id='ratings'
                        name='ratings'
                        placeholder='Ratings'
                        className='form-control'
                      >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                      </Control.select>
                    </Col>
                  </Row>
                  <Label htmlFor='.yourname' md={4}>
                    <b>Your Name</b>
                  </Label>
                  <Row className='form-group'>
                    <Col md={12}>
                      <Control.text
                        model='.yourname'
                        id='yourname'
                        name='yourname'
                        placeholder='Your Name'
                        className='form-control'
                        validators={{
                          required,
                          minLength: minLength(3),
                          maxLength: maxLength(15),
                        }}
                      />
                      <Errors
                        className='text-danger'
                        model='.yourname'
                        show='touched'
                        messages={{
                          required: "Required",
                          minLength: "Must be greater than 2 characters",
                          maxLength: "Must be 15 characters or less",
                        }}
                      />
                    </Col>
                  </Row>

                  <Label htmlFor='message' md={3}>
                    <b>Comment</b>
                  </Label>
                  <Row className='form-group'>
                    <Col md={12}>
                      <Control.textarea
                        model='.message'
                        id='message'
                        name='message'
                        rows='6'
                        className='form-control'
                      />
                    </Col>
                  </Row>
                  <Row className='form-group'>
                    <Col md={{ size: 9 }}>
                      <Button type='submit' color='primary'>
                        <b>Submit</b>
                      </Button>
                    </Col>
                  </Row>
                </LocalForm>
              </ModalBody>
            </Modal>
          </React.Fragment>
        </Col>
      </Row>
    );
  }
}

function RenderComments({ thedish }) {
  if (thedish == null) {
    return <div></div>;
  } else {
    return (
      <div className='col-12 col-md-5 m-1'>
        <CardTitle>
          <h4> Comments</h4>{" "}
        </CardTitle>
        <CardBody>
          <CardText>
            <ul className='list-unstyled'>
              {thedish.map((comment) => {
                return (
                  <li key={comment.id}>
                    <p>"{comment.comment}"</p>
                    <p>
                      -- {comment.author}, &nbsp;
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                      }).format(new Date(comment.date))}
                    </p>
                  </li>
                );
              })}
              <CommentForm />
            </ul>
          </CardText>
        </CardBody>
      </div>
    );
  }
}

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className='col-12 col-md-5 m-1'>
        <Card>
          <CardImg width='100%' src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>
              <h3>
                <b>{dish.name}</b>
              </h3>
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  if (props.dish == null) {
    return <div></div>;
  }

  return (
    <div className='row'>
      <RenderDish dish={props.dish} />
      <RenderComments thedish={props.comments} />
    </div>
  );
};

//const DishDet = new DishDetail();
export default DishDetail;
