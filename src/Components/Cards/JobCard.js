import React from "react";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from "reactstrap";

function JobCard({ item }) {
    return (
        <Card>
            <CardBody>
                <CardTitle className="font-weight-bold">{item.title}</CardTitle>
                <CardSubtitle>Salary: {item.salary}</CardSubtitle>
                <CardText>Equity: {item.equity}</CardText>
                <Button>Apply</Button>
            </CardBody>
        </Card>
    );
}

export default JobCard;
