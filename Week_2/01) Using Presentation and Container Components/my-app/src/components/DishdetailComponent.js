//--> This is a Presentational Component: Which has no local state

import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-md-5">
                    <Card className="col-12 m-1">
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        } else {
            return (<div></div>)
        }
    }


    renderComments(comments) {
        if (comments != null) {
            const commentslist = comments.map((comment) => {
                return (

                    <li key={comment.id} >
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, &nbsp;
                            {
                                new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }).format(new Date(comment.date))
                            }
                        </p>
                    </li>

                );
            });

            return (
                <div className="col-md-5">
                    <div className="col-12 m-1">
                        <h4>Comments</h4>
                        <ul class="list-unstyled">
                            {commentslist}
                        </ul>
                    </div>
                </div >
            )
        } else {
            return (<div></div>)
        }

    }


    render() {

        if (this.props.dish != null) {
            const dishViewSection = this.renderDish(this.props.dish)
            const commentsSection = this.renderComments(this.props.dish.comments)
            return (
                <div className="row">
                    {dishViewSection}
                    {commentsSection}
                </div>
            )
        } else {
            return (<div></div>)
        }

    }
}

export default Dishdetail;