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

  renderComments(comments) {
    if (comments != null) {
      const cmnts = comments.map((each) => {
        var DaTe = new Date(each.date);

        return (
          <div>
            <CardText>{each.comment}</CardText>
            <CardText>
              --{each.author} , {DaTe.getDate()}-{DaTe.getMonth()}-
              {DaTe.getFullYear()}
            </CardText>
            <CardText></CardText>
          </div>
        );
      });
      return (
        <Card>
          <CardTitle>Comments</CardTitle>
          {cmnts}
        </Card>
      );
    } else {
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
            {this.renderComments(this.props.comments)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
