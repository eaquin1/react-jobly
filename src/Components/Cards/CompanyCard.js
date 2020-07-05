import React from "react";
import {Link} from "react-router-dom"
import {
    Card, CardText, CardBody,
    CardTitle, Container
  } from 'reactstrap';
import defaultLogo from "../../Static/default-logo.png"
import "./Cards.scss"

function CompanyCard({item}) {
return (
   <Container className="Card-container">
       
        <Card className="Card" >
            
        <CardBody>
        <img src={ defaultLogo || item.logo_url} alt={`${item.name} Logo`} />
          <CardTitle className="font-weight-bold">
              <Link to={`/companies/${item.handle}`} key={item.handle}>{item.name}</Link></CardTitle>
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
   </Container>
)
}

export default CompanyCard