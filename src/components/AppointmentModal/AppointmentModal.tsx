import React, { useState } from "react";
import { Modal, Button, Form, Alert, Row, Col } from "react-bootstrap";
import axios from "axios";
// import { GoogleReCaptcha } from "react-google-recaptcha-v3";
import ReCAPTCHA from "react-google-recaptcha";


export function AppointmentModal() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

 const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
});


  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

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

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      setError("Please verify you are not a robot!");
      return;
    }

    try {
      // Send data + captcha token to backend
      await axios.post("http://localhost:5000/api/appointments", { ...formData, captchaToken });

      setSubmitted(true);
      setFormData({
         fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
      });
      setCaptchaToken(null);
    } catch (err: any) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Button variant="primary" className="appointment-btn" onClick={handleShow}>
        APPOINTMENT
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Book an Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {submitted && <Alert variant="success">Appointment submitted successfully!</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="fullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    name="name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                 <Form.Control
    type="text"
    placeholder="Enter full name"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
/>

                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="date">
                  <Form.Label>Preferred Date</Form.Label>
                  <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="time">
                  <Form.Label>Preferred Time</Form.Label>
                  <Form.Control type="time" name="time" value={formData.time} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="service">
                  <Form.Label>Service / Reason</Form.Label>
                  <Form.Select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Select Service</option>
                    <option value="Water Delivery">Water Delivery</option>
                    <option value="Custom Bottles">Custom Bottles</option>
                    <option value="Bulk Orders">Bulk Orders</option>
                    <option value="Camper Services">Camper Services</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Enter message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Google reCAPTCHA */}
            <div className="mb-3">
              <ReCAPTCHA sitekey="6LfBrxksAAAAAFSq4sGyBMM-qKlc9VDchr1jOtiE" onChange={handleCaptchaChange} />
            </div>

            <Button type="submit" variant="primary" className="w-100">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
