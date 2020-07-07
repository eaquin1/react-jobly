import React from "react";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    ButtonToggle,
    Container
} from "reactstrap";
import "./Cards.scss"

function JobCard({ item, handleApply }) {
    console.log(handleApply)
    return (
        <Container className="Card-container">
        <Card>
            <CardBody>
                <CardTitle className="font-weight-bold">{item.title}</CardTitle>
                <CardSubtitle>Salary: {item.salary}</CardSubtitle>
                <CardText>Equity: {item.equity}</CardText>
                <ButtonToggle onClick={handleApply} className="float-right">{item.state ? 'Applied': 'Apply'}</ButtonToggle>
            </CardBody>
        </Card>
        </Container>
    );
}

export default JobCard;
