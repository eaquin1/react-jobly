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
import "./Cards.css"

function JobCard({ item, handleApply }) {
   
    return (
        <Container className="Card-container">
        <Card>
            <CardBody>
                <CardTitle className="font-weight-bold">{item.title}</CardTitle>
                <CardSubtitle>Salary: {item.salary}</CardSubtitle>
                <CardText>Equity: {item.equity}</CardText>
                <ButtonToggle onClick={handleApply} className="float-right" disabled={item.state === "applied"}>{item.state ? 'Applied': 'Apply'}</ButtonToggle>
            </CardBody>
        </Card>
        </Container>
    );
}

export default JobCard;

