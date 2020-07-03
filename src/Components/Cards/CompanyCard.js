import React from "react";
import {Link} from "react-router-dom"
import {
    Card, CardText, CardBody,
    CardTitle, CardImg
  } from 'reactstrap';

function CompanyCard({item}) {
return (
   
        <Card>
            <CardImg top width="100%" src={item.logo_url} alt="Card image cap" />
        <CardBody>
          <CardTitle className="font-weight-bold">
              <Link to={`/companies/${item.handle}`} key={item.handle}>{item.name}</Link></CardTitle>
          
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
   
)
}

export default CompanyCard