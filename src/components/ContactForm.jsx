import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  destination: Yup.string()
    .required('Required'),
  startDate: Yup.date()
    .min(new Date(), 'Date cannot be in the past')
    .required('Required'),
  endDate: Yup.date()
    .min(Yup.ref('startDate'), 'End date must be after start date')
    .required('Required'),
  message: Yup.string()
    .min(10, 'Message is too short')
    .required('Required'),
});

const ContactForm = () => {
  return (
    <Container className="contact-form-container py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Contact Us</h1>
          <Formik
            initialValues={{
              name: '',
              email: '',
              destination: '',
              startDate: '',
              endDate: '',
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // Handle form submission here
              console.log(values);
              setTimeout(() => {
                alert('Thank you for your inquiry! We will contact you soon.');
                setSubmitting(false);
                resetForm();
              }, 500);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.name && errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Destination</Form.Label>
                  <Form.Control
                    type="text"
                    name="destination"
                    value={values.destination}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.destination && errors.destination}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.destination}
                  </Form.Control.Feedback>
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="startDate"
                        value={values.startDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.startDate && errors.startDate}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.startDate}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>End Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="endDate"
                        value={values.endDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.endDate && errors.endDate}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.endDate}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.message && errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-100"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;