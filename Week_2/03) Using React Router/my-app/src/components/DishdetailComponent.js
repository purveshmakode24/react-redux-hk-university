// Using Functional Components

import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div className="col-md-5">
                <Card className="col-12 m-1">
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    } else {
        return (<div></div>)
    }
}


function RenderComments({ comments }) {
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


const Dishdetail = (props) => {
    if (props.dish != null) {
        const dishViewSection = <RenderDish dish={props.dish} />
        const commentsSection = <RenderComments comments={props.dish.comments} />
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


export default Dishdetail;