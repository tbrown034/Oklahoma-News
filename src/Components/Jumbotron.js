import React from 'react';
import { Card } from 'react-bootstrap';
import cap from '../Images/Cap1.webp'
import { Button } from "semantic-ui-react";


const Jumbotron = () => {
    return (
      <>
        <Card>
      <Card.Img src={cap}/>
      <Card.ImgOverlay  >
        <h1>Hello, Oklahoma.</h1>
        <h4>It's your data. It should be yours. Here's what we go got so far.</h4>
        <Button>Explore the Data</Button>
        <Button>Join our Effort</Button>
                
       


       
      </Card.ImgOverlay>
    </Card>
      </>
    );
  }
  
  export default Jumbotron;