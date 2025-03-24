import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Button, Form } from 'react-bootstrap';
import 'leaflet/dist/leaflet.css';

const MapExplorer = () => {
  const [center, setCenter] = useState([0, 0]);
  const [zoom, setZoom] = useState(2);
  const [offline, setOffline] = useState(false);

  return (
    <Container fluid className="p-0">
      <div className="map-controls p-3">
        <Button 
          variant={offline ? 'success' : 'outline-primary'}
          onClick={() => setOffline(!offline)}
          className="me-2"
        >
          {offline ? 'Offline Mode Active' : 'Enable Offline Mode'}
        </Button>

        <Form.Select 
          className="d-inline-block w-auto"
          onChange={(e) => {
            const [lat, lng] = e.target.value.split(',');
            setCenter([parseFloat(lat), parseFloat(lng)]);
            setZoom(12);
          }}
        >
          <option value="0,0">Select Location</option>
          <option value="40.7128,-74.0060">New York</option>
          <option value="48.8566,2.3522">Paris</option>
          <option value="-8.3405,115.0920">Bali</option>
        </Form.Select>
      </div>

      <div className="map-container" style={{ height: 'calc(100vh - 170px)' }}>
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Add markers for points of interest */}
        </MapContainer>
      </div>
    </Container>
  );
};

export default MapExplorer;