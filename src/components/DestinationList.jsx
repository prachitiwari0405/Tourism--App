import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import Destination from './Destination';
import { destinations } from '../data/destinations';
import { FaSearch } from 'react-icons/fa';

const DestinationList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = priceFilter === 'all' ||
      (priceFilter === 'budget' && dest.price <= 1000) ||
      (priceFilter === 'mid' && dest.price > 1000 && dest.price <= 3000) ||
      (priceFilter === 'luxury' && dest.price > 3000);

    return matchesSearch && matchesPrice;
  });

  return (
    <Container className="destinations-container">
      <h1 className="text-center mb-5">Explore Destinations</h1>
      
      <Row className="mb-4">
        <Col md={8}>
          <InputGroup>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={4}>
          <Form.Select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="budget">Budget (≤ $1000)</option>
            <option value="mid">Mid-Range ($1001-$3000)</option>
            <option value="luxury">Luxury (> $3000)</option>
          </Form.Select>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredDestinations.map(destination => (
          <Col key={destination.id}>
            <Destination {...destination} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DestinationList;