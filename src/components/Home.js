import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap'
import './Home.css'

export default class extends Component {
  render() {
    return(
      <Grid>
        <Jumbotron>
          <h2>Welcome to James' Portfolio Site</h2>
          <p>This is the portfolio site for James Sakurai's projects.</p>
          <Link to = "/About">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/James.jpg" circle className='profile-pic' />
            <h3>James</h3>
            <p>Lorem ipsum filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}