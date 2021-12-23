import React from 'react';
import { Container } from 'react-bootstrap';

const ProjectInstruction = () => {
  return (
    <Container>
      <label>Instructions</label>
      <p>Input a T1 or FALIR image or both, then the available steps will be shown based on the logic provided by Combinostics. Steps which has the red border are the steps that can not be choosen at the moment and will be disable. Steps with green border are the steps that can be chosen. Steps with green background as the steps which has been chose. After entered all the steps that you want, you can press Create Report to generate all the steps that you chose, or Clear Report to clear it.</p>
      <h3>Wish you a Merry Chirstmas - Phuc Le</h3>
    </Container>
  );
};

export default ProjectInstruction;
