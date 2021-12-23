import React from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';

const ProjectReport = ({ displayListT1 , displayListFLAIR }) => {
  return (
    <>
      <Row>
        <Col sm={6}>
          {displayListT1.length > 0 && <h1>Step(s) chose with T1 input image</h1>}
          <ListGroup>
            {displayListT1.map((item) => (
              <ListGroup.Item key={item}>{item}</ListGroup.Item>
          ))}
          </ListGroup>
        </Col>
        <Col sm={6}>
          {displayListFLAIR.length > 0 && <h1>Step(s) chose with FALIR input image</h1>}
          <ListGroup>
            {displayListFLAIR.map((item) => (
              <ListGroup.Item key={item}>{item}</ListGroup.Item>
          ))}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProjectReport;
