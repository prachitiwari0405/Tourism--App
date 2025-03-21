import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { destinations } from '../data/destinations';

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <Container className="text-center py-5">
        <h2>Destination not found</h2>
        <Button variant="primary" onClick={() => navigate('/')}>
          Back to Destinations
        </Button>
      </Container>
    );
  }

  return (
    <Container className="destination-detail py-5">
      <Row>
        <Col lg={8}>
          <img
            src={destination.image}
            alt={destination.title}
            className="main-image img-fluid rounded"
          />
          <h1 className="mt-4">{destination.title}</h1>
          <p className="lead">{destination.description}</p>
          
          <section className="amenities mt-4">
            <h3>Amenities</h3>
            <div className="d-flex flex-wrap gap-2">
              {destination.amenities.map((amenity, index) => (
                <Badge key={index} bg="secondary" className="p-2">
                  {amenity}
                </Badge>
              ))}
            </div>
          </section>
        </Col>
        
        <Col lg={4}>
          <div className="booking-card">
            <h3>Price Details</h3>
            <p className="price-tag">From ${destination.price}</p>
            <ul className="included-list">
              {destination.included.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <Button 
              variant="primary" 
              size="lg" 
              className="w-100"
              onClick={() => navigate('/contact')}
            >
              Book Now
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DestinationDetail;