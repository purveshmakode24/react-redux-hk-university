// Using Functional Components

import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                    <ul className="list-unstyled">
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
        const commentsSection = <RenderComments comments={props.comments} />
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {dishViewSection}
                    {commentsSection}
                </div>
            </div>
        )
    } else {
        return (<div></div>)
    }

}


export default Dishdetail;