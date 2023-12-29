import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "react-bootstrap";

const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <div className="subscribe">
              <input type="text" placeholder="Email" />
              <button className="btn">Subscribe</button>
            </div>
          </Col>a
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
