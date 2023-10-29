import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export default function AdvancedSearch() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter(); // Move the useRouter hook here

  const submitForm = (data) => {
    // Initialize an empty queryString
    let queryString = '';

    // Append the searchBy parameter
    queryString += 'searchBy=true';

    // Append the geoLocation parameter if it's not null or undefined
    if (data.geoLocation) {
      queryString += `&geoLocation=${data.geoLocation}`;
    }

    // Append the medium parameter if it's not null or undefined
    if (data.medium) {
      queryString += `&medium=${data.medium}`;
    }

    // Append the isOnView parameter
    queryString += `&isOnView=${data.isOnView}`;

    // Append the isHighlight parameter
    queryString += `&isHighlight=${data.isHighlight}`;

    // Append the q parameter
    queryString += `&q=${data.q}`;

    // Redirect the user to the "/artwork" route with the generated queryString
    router.push(`/artwork?${queryString}`);
  };

  const onFormSubmit = (data) => {
    if (errors.q) {
      return;
    }

    submitForm(data);
  };

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <Row>
        <Col>
          <Form.Group className={`mb-3 ${errors.q ? 'is-invalid' : ''}`}>
            <br />
            <Form.Label>Search Query</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="q"
              {...register('q', { required: true })}
            />
            {errors.q && <div className="invalid-feedback">This field is required.</div>}
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className={`mb-3 ${errors.q ? 'is-invalid' : ''}`}>
            <br />
            <Form.Label>Search Query</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="q"
              {...register('q', { required: true })}
            />
            {errors.q && <div className="invalid-feedback">This field is required.</div>}
          </Form.Group>
        </Col>
      </Row>
      {/* Other form fields go here */}
      <Row>
        <Col>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
