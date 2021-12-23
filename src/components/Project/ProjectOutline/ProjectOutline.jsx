import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import ProjectFlairInput from '../ProjectFlairInput/ProjectFlairInput';
import ProjectInstruction from '../ProjectInstruction/ProjectInstruction';
import ProjectLogicPicture from '../ProjectLogicPicture/ProjectLogicPicture';
import ProjectReport from '../ProjectReport/ProjectReport';
import ProjectT1Input from '../ProjectT1Input/ProjectT1Input';

const ProjectOutline = () => {
  const [t1ImageInput, setT1ImageInput] = useState(true);
  const [t1ImageChecker, setT1ImageChecker] = useState(false);

  const [skullStripInput, setSkullStripInput] = useState(false);
  const [skullStripChecker, setSkullStripChecker] = useState(false);

  const [biasCorrectionInput, setBiasCorrectionInput] = useState(false);
  const [biasCorrectionChecker, setBiasCorrectionChecker] = useState(false);

  const [voxelInput, setVoxelInput] = useState(false);
  const [voxelChecker, setVoxelChecker] = useState(false);

  const [structuralSegmentationInput, setStructuralSegmentationInput] =
    useState(false);
  const [structuralSegmentationChecker, setStructuralSegmentationChecker] =
    useState(false);

  const [tensorBasedInput, setTensorBasedInput] = useState(false);
  const [tensorBasedChecker, setTensorBasedChecker] = useState(false);

  const [flairImageInput, setFlairImageInput] = useState(true);
  const [flairImageChecker, setFlairImageChecker] = useState(false);

  const [gradientInput, setGradientInput] = useState(false);
  const [gradientChecker, setGradientChecker] = useState(false);

  const [intensityInput, setIntensityInput] = useState(false);
  const [intensityChecker, setIntensityChecker] = useState(false);

  const [coRegistrationChecker, setCoRegistrationChecker] = useState(false);
  const [coRegistrationInput, setCoRegistrationInput] = useState(false);

  const [hyperintensityInput, setHyperintensityInput] = useState(false);
  const [hyperintensityChecker, setHyperintensityChecker] = useState(false);

  const [lesionSegmentationInput, setLesionSegmentationInput] = useState(false);
  const [lesionSegmentationChecker, setLesionSegmentationChecker] =
    useState(false);

  const [selectedFileFlair, setSelectedFileFlair] = useState();
  const [previewFlair, setPreviewFlair] = useState();

  const [selectedFileT1, setSelectedFileT1] = useState();
  const [previewT1, setPreviewT1] = useState();

  const [displayListT1, setDisplayListT1] = useState([]);
  const [displayListFLAIR, setDisplayListFLAIR] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    // logic to add to the list
    skullStripChecker &&
      setDisplayListT1((oldArray) => [...oldArray, 'Skull Strip']);
    biasCorrectionChecker &&
      setDisplayListT1((oldArray) => [...oldArray, 'Bias Correction']);
    voxelChecker &&
      setDisplayListT1((oldArray) => [...oldArray, 'Voxel-based morphometry']);
    structuralSegmentationChecker &&
      setDisplayListT1((oldArray) => [...oldArray, 'Structural Segmentation']);
    tensorBasedChecker &&
      setDisplayListT1((oldArray) => [...oldArray, 'Tensor-based morphometry']);

    gradientChecker &&
      setDisplayListFLAIR((oldArray) => [...oldArray, 'Gradient Analysis']);
    intensityChecker &&
      setDisplayListFLAIR((oldArray) => [
        ...oldArray,
        'Intensity Normalization',
      ]);
    lesionSegmentationChecker &&
      setDisplayListFLAIR((oldArray) => [...oldArray, 'Lesion Segmentation']);
    coRegistrationChecker &&
      setDisplayListFLAIR((oldArray) => [...oldArray, 'Co-registration']);
    hyperintensityChecker &&
      setDisplayListFLAIR((oldArray) => [
        ...oldArray,
        'Hyperintensity Segmentation',
      ]);
  };

  // reset everything
  const resetHandler = () => {
    //reset the report
    setDisplayListFLAIR([]);
    setDisplayListT1([]);
  };

  return (
    <div>
      <ProjectLogicPicture />
      <ProjectInstruction />
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md={6}>
            <ProjectT1Input
              selectedFile={selectedFileT1}
              setSelectedFile={setSelectedFileT1}
              preview={previewT1}
              setPreview={setPreviewT1}
              t1ImageInput={t1ImageInput}
              setT1ImageInput={setT1ImageInput}
              t1ImageChecker={t1ImageChecker}
              setT1ImageChecker={setT1ImageChecker}
              skullStripInput={skullStripInput}
              setSkullStripInput={setSkullStripInput}
              skullStripChecker={skullStripChecker}
              setSkullStripChecker={setSkullStripChecker}
              biasCorrectionInput={biasCorrectionInput}
              setBiasCorrectionInput={setBiasCorrectionInput}
              biasCorrectionChecker={biasCorrectionChecker}
              setBiasCorrectionChecker={setBiasCorrectionChecker}
              structuralSegmentationInput={structuralSegmentationInput}
              setStructuralSegmentationInput={setStructuralSegmentationInput}
              structuralSegmentationChecker={structuralSegmentationChecker}
              setStructuralSegmentationChecker={
                setStructuralSegmentationChecker
              }
              voxelInput={voxelInput}
              setVoxelInput={setVoxelInput}
              voxelChecker={voxelChecker}
              setVoxelChecker={setVoxelChecker}
              tensorBasedInput={tensorBasedInput}
              setTensorBasedInput={setTensorBasedInput}
              tensorBasedChecker={tensorBasedChecker}
              setTensorBasedChecker={setTensorBasedChecker}
              setCoRegistrationInput={setCoRegistrationInput}
              coRegistrationInput={coRegistrationInput}
              coRegistrationChecker={coRegistrationChecker}
              lesionSegmentationInput={lesionSegmentationInput}
            />
          </Col>
          <Col md={6}>
            <ProjectFlairInput
              selectedFile={selectedFileFlair}
              setSelectedFile={setSelectedFileFlair}
              preview={previewFlair}
              setPreview={setPreviewFlair}
              flairImageInput={flairImageInput}
              setFlairImageInput={setFlairImageInput}
              flairImageChecker={flairImageChecker}
              setFlairImageChecker={setFlairImageChecker}
              gradientInput={gradientInput}
              setGradientInput={setGradientInput}
              gradientChecker={gradientChecker}
              setGradientChecker={setGradientChecker}
              intensityInput={intensityInput}
              setIntensityInput={setIntensityInput}
              intensityChecker={intensityChecker}
              setIntensityChecker={setIntensityChecker}
              lesionSegmentationInput={lesionSegmentationInput}
              setLesionSegmentationInput={setLesionSegmentationInput}
              lesionSegmentationChecker={lesionSegmentationChecker}
              setLesionSegmentationChecker={setLesionSegmentationChecker}
              coRegistrationChecker={coRegistrationChecker}
              setCoRegistrationChecker={setCoRegistrationChecker}
              coRegistrationInput={coRegistrationInput}
              setCoRegistrationInput={setCoRegistrationInput}
              hyperintensityInput={hyperintensityInput}
              setHyperintensityInput={setHyperintensityInput}
              hyperintensityChecker={hyperintensityChecker}
              setHyperintensityChecker={setHyperintensityChecker}
              structuralSegmentationChecker={structuralSegmentationChecker}
              setStructuralSegmentationInput={setStructuralSegmentationInput}
              tensorBasedChecker={tensorBasedChecker}
            />
          </Col>
          <Col>
            <Button
              className='mx-3'
              disabled={displayListT1.length > 0 || displayListFLAIR.length > 0}
              type='submit'
            >
              Generate Report
            </Button>

            {displayListT1.length > 0 || displayListFLAIR.length > 0 ? (
              <Button variant='danger' onClick={resetHandler}>
                Clear Report
              </Button>
            ) : <></>}
            <ProjectReport
              displayListT1={displayListT1}
              displayListFLAIR={displayListFLAIR}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ProjectOutline;
