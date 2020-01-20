import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
export default function listpost({post}) {
    return (
       
              <div  >
           
           <Card >
        
         <CardBody >
           <CardTitle className=" crd " >{post.title}</CardTitle>
           <CardText className="crd">{post.body}</CardText>
       
         </CardBody>
       </Card> 
         </div>
       
    )
}
