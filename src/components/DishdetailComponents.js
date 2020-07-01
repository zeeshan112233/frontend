import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderDish(selectedDish) {
    console.log("ai ai ");
    if (this.props.selectedDish != null) {
      return (
        <div>
          <Card>
            <CardImg
              width='100%'
              src={this.props.selectedDish.image}
              alt={this.props.selectedDish.name}
            />
            <CardBody>
              <CardTitle>{this.props.selectedDish.name}</CardTitle>
              <CardText>{this.props.selectedDish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(selectedDish) {
    if (this.props.selectedDish != null) {
      return (
        <div>
          <div>
            <div>
              <h4>Comments</h4>
            </div>
            <div>
              <strong>--{this.props.selectedDish.comments[0].comment}</strong>
            </div>
            <br />
            <div>
              <strong>
                {this.props.selectedDish.comments[0].author} ,{" "}
                {this.props.selectedDish.comments[0].date}
              </strong>
            </div>
            <br />
            <div>
              <strong>--{this.props.selectedDish.comments[1].comment}</strong>
            </div>
            <br />
            <div>
              <strong>
                {this.props.selectedDish.comments[1].author} ,{" "}
                {this.props.selectedDish.comments[1].date}
              </strong>
            </div>
            <br />
            <div>
              <strong>--{this.props.selectedDish.comments[2].comment}</strong>
            </div>
            <br />
            <div>
              <strong>
                {this.props.selectedDish.comments[2].author} ,{" "}
                {this.props.selectedDish.comments[2].date}
              </strong>
            </div>
            <br />
            <div>
              <strong>--{this.props.selectedDish.comments[3].comment}</strong>
            </div>
            <br />
            <div>
              <strong>
                {this.props.selectedDish.comments[3].author} ,{" "}
                {this.props.selectedDish.comments[3].date}
              </strong>
            </div>
            <br />
            <div>
              <strong>--{this.props.selectedDish.comments[4].comment}</strong>
            </div>
            <br />
            <div>
              <strong>
                {this.props.selectedDish.comments[4].author} ,{" "}
                {this.props.selectedDish.comments[4].date}
              </strong>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-5 m-1'>
            <h1> details </h1>
            {this.renderDish(this.props.selectedDish)}
          </div>
          <div className='col-12 col-md-5'>
            {this.renderComments(this.props.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
