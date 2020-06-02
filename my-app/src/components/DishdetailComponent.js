import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

export default class DishdetailComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        const comments = this.props.dish.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}</p>
                    <p>{comment.date}</p>
                    <hr/>
                </div>             
            );
        });

        return (
            <div className="row">
                <div className="col-md-5">
                    <Card className="col-12 m-1">
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-md-5">
                    <div className="col-12 m-1">
                        <h2>Comments</h2>
                        <hr/>
                        {comments}
                    </div>
                </div>

            </div>
        )
    }
}
