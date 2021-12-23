import React, {useEffect} from 'react';
import { Form, Row, Col, Container, Image } from 'react-bootstrap';
import '../Style/general.scss';

const ProjectFlairInput = ({
  flairImageInput,
  setFlairImageInput,
  flairImageChecker,
  setFlairImageChecker,

  gradientInput,
  setGradientInput,
  gradientChecker,
  setGradientChecker,

  intensityInput,
  setIntensityInput,
  intensityChecker,
  setIntensityChecker,

  lesionSegmentationInput,
  setLesionSegmentationInput,
  lesionSegmentationChecker,
  setLesionSegmentationChecker,

  coRegistrationChecker,
  setCoRegistrationChecker,
  coRegistrationInput,
  setCoRegistrationInput,

  hyperintensityInput,
  setHyperintensityInput,
  hyperintensityChecker,
  setHyperintensityChecker,

  structuralSegmentationChecker,
  setStructuralSegmentationInput,

  tensorBasedChecker,

  selectedFile,
  setSelectedFile,
  preview,
  setPreview,
}) => {
  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [selectedFile, setPreview])
  const pictureHandler = (event) => {
    const checkPressed = event.target.files.length === 0 || !event.target.files ? false : true

    setFlairImageChecker(checkPressed);

    if (checkPressed) {
      setGradientInput(true);
      setIntensityInput(true);
    } else {
      setGradientInput(false);
      setIntensityInput(false);
    }

    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(event.target.files[0]);
  };

  const gradientHandler = (event) => {
    const checkPressed = event.target.checked;
    setGradientChecker(checkPressed);

    if (checkPressed) {
      setFlairImageInput(false);
    } else {
      setLesionSegmentationInput(false);
    }
    if (checkPressed && intensityChecker) {
      setLesionSegmentationInput(true);
    } else if (!checkPressed && !intensityChecker) {
      setFlairImageInput(true);
    } else if (!checkPressed && intensityChecker) {
      setFlairImageInput(false);
    } else if (checkPressed && !intensityChecker) {
      setLesionSegmentationInput(false);
    }
  };

  const intensityHandler = (event) => {
    const checkPressed = event.target.checked;
    setIntensityChecker(checkPressed);

    if (checkPressed) {
      setFlairImageInput(false);
    } else {
      setLesionSegmentationInput(false);
    }
    if (!checkPressed && !gradientChecker) {
      setFlairImageInput(true);
    } else if (checkPressed && gradientChecker) {
      setLesionSegmentationInput(true);
    }
  };

  const lesionHandler = (event) => {
    const checkPressed = event.target.checked;
    setLesionSegmentationChecker(checkPressed);
    // console.log(structuralSegmentationChecker);
    if (checkPressed) {
      setGradientInput(false);
      setIntensityInput(false);
    } else {
      setGradientInput(true);
      setIntensityInput(true);
    }
    if (checkPressed && structuralSegmentationChecker) {
      setCoRegistrationInput(true);
    } else {
      setCoRegistrationInput(false);
    }
  };

  const coRegistrationHandler = (event) => {
    const checkPressed = event.target.checked;
    setCoRegistrationChecker(checkPressed);

    if (checkPressed) {
      setHyperintensityInput(true);
      setLesionSegmentationInput(false);
      setStructuralSegmentationInput(false);
    } else {
      setHyperintensityInput(false);
      setLesionSegmentationInput(true);
    }

    if (!checkPressed && !tensorBasedChecker) {
      setStructuralSegmentationInput(true);
    }
    if (!tensorBasedChecker && checkPressed) {
      setStructuralSegmentationInput(false);
    }
  };

  const hyperIntensityHandler = (event) => {
    const checkPressed = event.target.checked;
    setHyperintensityChecker(checkPressed);

    if (checkPressed) {
      setCoRegistrationInput(false);
    } else {
      setCoRegistrationInput(true);
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
          <fieldset disabled={checkDisable(flairImageInput)}>
            <Form.Group
              className={flairImageChecker ? 'image mb-4 ' : 'normal mb-4 '}
              controlId='flairImageInput'
            >
              <Form.Label>FLAIR input image</Form.Label>
              <Form.Control onChange={pictureHandler} type='file' />
              {selectedFile && <Image className='image-input' src={preview} alt='' />}
            </Form.Group>
           
          </fieldset>
        </Col>

        <Col xs={6}>
          <fieldset disabled={checkDisable(gradientInput)}>
            <Form.Group
              className={`${gradientInput ? 'hover-on' : 'hover-off'} ${
                gradientChecker ? 'active mb-4' : 'normal mb-4'
              }`}
              controlId='gradientAnalysisInput'
            >
              <Form.Label>Gradient Analysis</Form.Label>
              <Form.Check
                type='checkbox'
                id='gradientAnalysis'
                onChange={gradientHandler}
              />
            </Form.Group>
          </fieldset>
        </Col>

        <Col xs={6}>
          <fieldset disabled={checkDisable(intensityInput)}>
            <Form.Group
              className={`${intensityInput ? 'hover-on' : 'hover-off'} ${
                intensityChecker ? 'active mb-4' : 'normal mb-4'
              }`}
              controlId='intensityNormalizationInput'
            >
              <Form.Label>Intensity Normalization</Form.Label>
              <Form.Check
                type='checkbox'
                id='intensityNormalization'
                onChange={intensityHandler}
              />
            </Form.Group>
          </fieldset>
        </Col>

        <Col xs={3}></Col>
        <Col xs={6}>
          <fieldset disabled={checkDisable(lesionSegmentationInput)}>
            <Form.Group
              className={`${lesionSegmentationInput ? 'hover-on' : 'hover-off'} ${
                lesionSegmentationChecker ? 'active mb-4' : 'normal mb-4'
              }`}
              controlId='lesionSegmentationInput'
            >
              <Form.Label>Lesion Segmentation</Form.Label>
              <Form.Check
                type='checkbox'
                id='lesionSegmentation'
                onChange={lesionHandler}
              />
            </Form.Group>
          </fieldset>
        </Col>
        <Col xs={3}></Col>

        <Col xs={6}>
          <fieldset disabled={checkDisable(coRegistrationInput)}>
            <Form.Group
              className={`${coRegistrationInput ? 'hover-on' : 'hover-off'} ${
                coRegistrationChecker ? 'active mb-4' : 'normal mb-4'
              }`}
              controlId='coRegistrationInput'
            >
              <Form.Label>Co-registration</Form.Label>
              <Form.Check
                type='checkbox'
                id='coRegistration'
                onChange={coRegistrationHandler}
              />
            </Form.Group>
          </fieldset>
        </Col>
        <Col xs={6}></Col>

        <Col xs={6}>
          <fieldset disabled={checkDisable(hyperintensityInput)}>
            <Form.Group
              className={`${hyperintensityInput ? 'hover-on' : 'hover-off'} ${
                hyperintensityChecker ? 'active mb-4' : 'normal mb-4'
              }`}
              controlId='hyperinternsityInput'
            >
              <Form.Label>Hyperintensity Segmentation</Form.Label>
              <Form.Check
                type='checkbox'
                id='hyperinternsity'
                onChange={hyperIntensityHandler}
              />
            </Form.Group>
          </fieldset>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectFlairInput;
