import React from "react";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container
} from "reactstrap";
import "./Cards.scss"

function JobCard({ item }) {
    return (
        <Container className="Card-container">
        <Card>
            <CardBody>
                <CardTitle className="font-weight-bold">{item.title}</CardTitle>
                <CardSubtitle>Salary: {item.salary}</CardSubtitle>
                <CardText>Equity: {item.equity}</CardText>
                <Button>Apply</Button>
            </CardBody>
        </Card>
        </Container>
    );
}

export default JobCard;
