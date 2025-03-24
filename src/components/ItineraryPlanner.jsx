import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ItineraryPlanner = () => {
  const [itinerary, setItinerary] = useState(null);

  const formik = useFormik({
    initialValues: {
      destination: '',
      duration: '',
      budget: '',
      interests: [],
      travelStyle: 'balanced'
    },
    validationSchema: Yup.object({
      destination: Yup.string().required('Required'),
      duration: Yup.number().required('Required').min(1, 'Minimum 1 day'),
      budget: Yup.number().required('Required').min(0, 'Invalid budget'),
      interests: Yup.array().min(1, 'Select at least one interest'),
      travelStyle: Yup.string().required('Required')
    }),
    onSubmit: async (values) => {
      // Simulate AI processing
      const response = await generateItinerary(values);
      setItinerary(response);
    }
  });

  return (
    <Container className="py-5">
      <h1 className="mb-4">AI Travel Planner</h1>
      <div className="row">
        <div className="col-md-6">
          <Card className="p-4 shadow-sm">
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps('destination')}
                  isInvalid={formik.touched.destination && formik.errors.destination}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.destination}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Duration (days)</Form.Label>
                <Form.Control
                  type="number"
                  {...formik.getFieldProps('duration')}
                  isInvalid={formik.touched.duration && formik.errors.duration}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.duration}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Budget ($)</Form.Label>
                <Form.Control
                  type="number"
                  {...formik.getFieldProps('budget')}
                  isInvalid={formik.touched.budget && formik.errors.budget}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.budget}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Interests</Form.Label>
                <div>
                  {['Culture', 'Nature', 'Food', 'Adventure', 'Relaxation'].map(interest => (
                    <Form.Check
                      key={interest}
                      type="checkbox"
                      label={interest}
                      name="interests"
                      value={interest}
                      onChange={formik.handleChange}
                      isInvalid={formik.touched.interests && formik.errors.interests}
                    />
                  ))}
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Travel Style</Form.Label>
                <Form.Select
                  {...formik.getFieldProps('travelStyle')}
                  isInvalid={formik.touched.travelStyle && formik.errors.travelStyle}
                >
                  <option value="balanced">Balanced</option>
                  <option value="relaxed">Relaxed</option>
                  <option value="intensive">Intensive</option>
                </Form.Select>
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100">
                Generate Itinerary
              </Button>
            </Form>
          </Card>
        </div>

        <div className="col-md-6">
          {itinerary && (
            <Card className="p-4 shadow-sm">
              <h3>Your Personalized Itinerary</h3>
              {/* Render AI-generated itinerary here */}
            </Card>
          )}
        </div>
      </div>
    </Container>
  );
};

// Simulate AI itinerary generation
const generateItinerary = async (preferences) => {
  // This would be replaced with actual AI service integration
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        days: [],
        totalCost: 0,
        recommendations: []
      });
    }, 1500);
  });
};

export default ItineraryPlanner;