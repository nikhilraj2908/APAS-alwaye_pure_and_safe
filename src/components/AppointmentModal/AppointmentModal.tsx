import React, { useState } from "react";
import { Modal, Button, Form, Alert, Row, Col } from "react-bootstrap";
import axios from "axios";

export function AppointmentModal() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const handleShow = () => {
    setShow(true);
    setSubmitted(false);
    setError("");
  };

  const handleClose = () => setShow(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send data to backend
      await axios.post("http://localhost:5000/api/appointments", formData);

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Appointment Button */}
      <Button variant="primary" className="appointment-btn" onClick={handleShow}>
        APPOINTMENT
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Book an Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* Success Alert */}
          {submitted && <Alert variant="success">Appointment submitted successfully!</Alert>}

          {/* Error Alert */}
          {error && <Alert variant="danger">{error}</Alert>}

          {/* Form */}
          <Form>
  <Row className="mb-3">
    <Col md={6}>
      <Form.Group controlId="fullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter full name" />
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    </Col>
  </Row>

  <Row className="mb-3">
    <Col md={6}>
      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter phone number" />
      </Form.Group>
    </Col>
    <Col md={3}>
      <Form.Group controlId="date">
        <Form.Label>Preferred Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
    </Col>
    <Col md={3}>
      <Form.Group controlId="time">
        <Form.Label>Preferred Time</Form.Label>
        <Form.Control type="time" />
      </Form.Group>
    </Col>
  </Row>

  <Row className="mb-3">
    <Col md={6}>
      <Form.Group controlId="service">
        <Form.Label>Service / Reason</Form.Label>
        <Form.Select>
          <option>Select Service</option>
          <option>Service 1</option>
          <option>Service 2</option>
        </Form.Select>
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={1} placeholder="Enter message" />
      </Form.Group>
    </Col>
  </Row>

  <Button variant="primary" type="submit" className="w-100">
    Submit
  </Button>
</Form>

        </Modal.Body>
      </Modal>
    </>
  );
}
