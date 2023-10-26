/* eslint-disable jsx-a11y/alt-text */
/*********************************************************************************
*  WEB422 – Assignment 4
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Yunus Emre Gumus Student ID: 150331197 Date:26/10/2023
********************************************************************************/ 

import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';


function Home() {
  return (
    <div>
      <Row>
        <Col>
        <br/>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
            fluid
            rounded
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p>
            The Metropolitan Museum of Art, colloquially known as "The Met," is one of the largest and most prestigious art museums in the world. It is located in New York City and is home to an extensive collection of art and artifacts from various cultures and time periods.
          </p>
          <p>
            The museum's mission is to collect, preserve, study, exhibit, and encourage appreciation for works of art that collectively represent the broad spectrum of human achievement. It houses a vast array of art, including paintings, sculptures, decorative arts, and much more.
          </p>
        </Col>
        <Col md={6}>
          <p>
            Explore the rich history and diverse art collections of The Met by visiting its Wikipedia page.
          </p>
          <p>
            <a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" target="_blank" rel="noreferrer">Learn more about The Met...</a>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
