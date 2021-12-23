import React, { useEffect } from 'react';
import { Form, Row, Col, Container, Image } from 'react-bootstrap';
import '../Style/general.scss';

const ProjectT1Input = ({
  t1ImageInput,
  setT1ImageInput,
  t1ImageChecker,
  setT1ImageChecker,

  skullStripInput,
  setSkullStripInput,
  skullStripChecker,
  setSkullStripChecker,

  biasCorrectionInput,
  setBiasCorrectionInput,
  biasCorrectionChecker,
  setBiasCorrectionChecker,

  structuralSegmentationInput,
  setStructuralSegmentationInput,
  structuralSegmentationChecker,
  setStructuralSegmentationChecker,

  voxelInput,
  setVoxelInput,
  voxelChecker,
  setVoxelChecker,

  tensorBasedInput,
  setTensorBasedInput,
  tensorBasedChecker,
  setTensorBasedChecker,

  setCoRegistrationInput,
  coRegistrationInput,
  coRegistrationChecker,

  lesionSegmentationInput,

  selectedFile,
  setSelectedFile,
  preview,
  setPreview,
}) => {
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, setPreview]);

  const pictureHandler = (event) => {
    const checkPressed =
      event.target.files.length === 0 || !event.target.files ? false : true;

    setT1ImageChecker(checkPressed);

    if (checkPressed) {
      setSkullStripInput(true);
      setBiasCorrectionInput(true);
    } else {
      setSkullStripInput(false);
      setBiasCorrectionInput(false);
    }

    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(event.target.files[0]);
  };

  const skullStripInputHandler = (event) => {
    const checkPressed = event.target.checked;
    setSkullStripChecker(checkPressed);

    // console.log(biasCorrectionChecker)
    if (checkPressed) {
      setT1ImageInput(false);
      setVoxelInput(true);
    } else {
      setVoxelInput(false);
      setStructuralSegmentationInput(false);
    }
    if (checkPressed && biasCorrectionChecker) {
      setStructuralSegmentationInput(true);
    }
    if (!checkPressed && !biasCorrectionChecker) {
      setT1ImageInput(true);
    }
  };

  const biasCorrectionInputHandler = (event) => {
    const checkPressed = event.target.checked;
    setBiasCorrectionChecker(checkPressed);

    if (checkPressed) {
      setT1ImageInput(false);
    } else {
      setStructuralSegmentationInput(false);
    }
    if (checkPressed && skullStripChecker && !coRegistrationChecker) {
      setStructuralSegmentationInput(true);
    } else if (!checkPressed && !skullStripChecker) {
      setT1ImageInput(true);
      setStructuralSegmentationInput(false);
    } else {
      setStructuralSegmentationInput(false);
    }
  };

  const structuralSegmentationHandler = (event) => {
    const checkPressed = event.target.checked;
    setStructuralSegmentationChecker(checkPressed);

    // console.log(lesionSegmentationInput)
    if (checkPressed) {
      setSkullStripInput(false);
      setBiasCorrectionInput(false);
    } else {
      setSkullStripInput(true);
      setBiasCorrectionInput(true);
      setTensorBasedInput(false);
      setCoRegistrationInput(false);
    }
    if (checkPressed && voxelChecker) {
      setTensorBasedInput(true);
    }
    if (!checkPressed && voxelChecker) {
      setSkullStripInput(false);
    }
    if (checkPressed && lesionSegmentationInput) {
      setCoRegistrationInput(true);
    }
  };

  const voxelInputHandler = (event) => {
    const checkPressed = event.target.checked;
    setVoxelChecker(checkPressed);

    if (checkPressed) {
      setSkullStripInput(false);
    }
    if (!checkPressed && !structuralSegmentationChecker) {
      setSkullStripInput(true);
    }
    if (checkPressed && structuralSegmentationChecker) {
      setTensorBasedInput(true);
    }
    if (!checkPressed && structuralSegmentationChecker) {
      setTensorBasedInput(false);
    }
  };

  const tensorBasedInputHandler = (event) => {
    const checkPressed = event.target.checked;
    setTensorBasedChecker(checkPressed);

    if (checkPressed) {
      setStructuralSegmentationInput(false);
      setVoxelInput(false);
    } else {
      setVoxelInput(true);
    }
    if (!checkPressed && coRegistrationInput) {
      setStructuralSegmentationInput(false);
    }
    if (!checkPressed && !coRegistrationChecker) {
      setStructuralSegmentationInput(true);
    }
  };

  // check if the state of the button is false then return true to disable the button, else return false to make the button normal
  const checkDisable = (state) => {
    if (state === true) return false;
    return true;
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <fieldset disabled={checkDisable(t1ImageInput)}>
            <Form.Group
              className={t1ImageChecker ? 'image mb-4 ' : 'normal mb-4 '}
              controlId='t1ImageInput'
            >
              <Form.Label>T1 Input Image</Form.Label>
              <Form.Control onChange={pictureHandler} type='file' />
              {selectedFile && (
                <Image className='image-input' src={preview} alt='' />
              )}
            </Form.Group>
          </fieldset>
        </Col>

        <Col xs={6}>
          <fieldset disabled={checkDisable(skullStripInput)}>
            <Form.Group
              className={`${skullStripInput ? 'hover-on' : 'hover-off'} ${
                skullStripChecker ? 'active mb-4' : 'normal mb-4'
              }`}
              controlId='skullStripInput'
            >
              <Form.Label>Skull Strip</Form.Label>
              <Form.Check
                type='checkbox'
                id='skullStrip'
                onChange={skullStripInputHandler}
              />
            </Form.Group>
          </fieldset>
        </Col>

        <Col xs={6}>
          <fieldset disabled={checkDisable(biasCorrectionInput)}>
            <Form.Group
              className={`${biasCorrectionInput ? 'hover-on' : 'hover-off'} ${
                biasCorrectionChecker ? 'active mb-4' : 'normal mb-4'
              }`}
              controlId='biasCorrectionInput'
            >
              <Form.Label>Bias Correction</Form.Label>
              <Form.Check
                type='checkbox'
                id='biasCorrection'
                onChange={biasCorrectionInputHandler}
              />
            </Form.Group>
          </fieldset>
        </Col>

        <Col xs={6}>
          <fieldset disabled={checkDisable(voxelInput)}>
            <Form.Group
              className={`${voxelInput ? 'hover-on' : 'hover-off'} ${
                voxelChecker ? 'active mb-4' : 'normal mb-4'
              }`}
              controlId='voxelInput'
            >
              <Form.Label>Voxel-based morphometry</Form.Label>
              <Form.Check
                type='checkbox'
                id='voxelBase'
                onChange={voxelInputHandler}
              />
            </Form.Group>
          </fieldset>
        </Col>

        <Col xs={6}>
          <fieldset disabled={checkDisable(structuralSegmentationInput)}>
            <Form.Group
              className={`${structuralSegmentationInput ? 'hover-on' : 'hover-off'} ${
                structuralSegmentationChecker ? 'active mb-4' : 'normal mb-4'
              }`}
              controlId='structuralSegmentationInput'
            >
              <Form.Label>Structural Segmentation</Form.Label>
              <Form.Check
                type='checkbox'
                id='structuralSegmentation'
                onChange={structuralSegmentationHandler}
              />
            </Form.Group>
          </fieldset>
        </Col>

        <Col xs={3}></Col>
        <Col xs={6}>
          <fieldset disabled={checkDisable(tensorBasedInput)}>
            <Form.Group
              className={`${tensorBasedInput ? 'hover-on' : 'hover-off'} ${
                tensorBasedChecker ? 'active mb-4' : 'normal mb-4'
              }`}
              controlId='tensorBasedInput'
            >
              <Form.Label>Tensor-based morphometry</Form.Label>
              <Form.Check
                type='checkbox'
                id='tensorBased'
                onChange={tensorBasedInputHandler}
              />
            </Form.Group>
          </fieldset>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectT1Input;
