import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Destination = ({ id, image, title, description, price }) => {
  return (
    <Card className="destination-card h-100">
      <div className="image-wrapper">
        <Card.Img variant="top" src={image} alt={title} className="destination-image" />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="card-footer">
          <span className="price">From ${price}</span>
          <Button 
            as={Link} 
            to={`/destination/${id}`} 
            variant="primary"
            className="learn-more-btn"
          >
            Learn More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

Destination.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Destination;