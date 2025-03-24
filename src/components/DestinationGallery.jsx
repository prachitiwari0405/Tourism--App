import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { destinations } from '../data/destinations';

const DestinationGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['all', 'beach', 'mountain', 'city', 'historical'];

  const filteredDestinations = selectedCategory === 'all'
    ? destinations
    : destinations.filter(dest => dest.category === selectedCategory);

  return (
    <Container className="py-5">
      <div className="gallery-filters mb-4">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'primary' : 'outline-primary'}
            className="me-2 mb-2 text-capitalize"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <Row className="g-4">
        {filteredDestinations.map(destination => (
          <Col key={destination.id} xs={12} sm={6} md={4} lg={3}>
            <div 
              className="gallery-item"
              onClick={() => setLightboxImage(destination.image)}
              role="button"
              tabIndex={0}
            >
              <img 
                src={destination.image} 
                alt={destination.title}
                className="img-fluid rounded shadow-sm"
              />
              <div className="gallery-item-overlay">
                <h3>{destination.title}</h3>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {lightboxImage && (
        <div 
          className="lightbox"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="lightbox-close"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <img 
            src={lightboxImage} 
            alt="Destination full view"
            className="lightbox-image"
          />
        </div>
      )}
    </Container>
  );
};

export default DestinationGallery;