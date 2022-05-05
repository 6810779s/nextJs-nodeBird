import React from 'react';
import '../style/CustomExamGroup.css';
import {
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton,
  Form,
} from 'react-bootstrap';

const CustomExamGroup = ({
  examContent,
  onChangeToggleButtonGroup,
  toggleButtonGroupName,
  toggleButtonId,
  selected,
  idx,
}) => {
  const handleScroll = (e) => {
    const testForm = document.querySelectorAll('.test-form');

    if (testForm[idx].className === 'test-form') {
      window.scrollTo({
        top: testForm[idx].offsetTop + testForm[idx].offsetHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="test-form">
      <Row>
        <p>{examContent ? examContent : '문항정보가 없습니다.'}</p>
      </Row>
      <Row>
        <Col>
          <Form.Text className="text-muted text-nowrap d-flex align-items-center justify-content-start">
            전혀아니다
          </Form.Text>
        </Col>
        <Col>
          <Form.Text className="text-muted text-nowrap d-flex align-items-center justify-content-end">
            매우그렇다
          </Form.Text>
        </Col>
      </Row>
      <Form.Group
        as={Row}
        className="mb-3 d-flex align-items-center justify-content-center"
        controlId="inputData3Grid"
      >
        <Col>
          <ToggleButtonGroup
            type="radio"
            name={toggleButtonGroupName}
            className="d-flex align-items-center justify-content-center"
            value={selected}
            onChange={(value) =>
              onChangeToggleButtonGroup(toggleButtonGroupName, value)
            }
          >
            <ToggleButton
              id={toggleButtonId + '-1'}
              value={1}
              onClick={handleScroll}
            >
              1
            </ToggleButton>
            <ToggleButton
              id={toggleButtonId + '-2'}
              value={2}
              onClick={handleScroll}
            >
              2
            </ToggleButton>
            <ToggleButton
              id={toggleButtonId + '-3'}
              value={3}
              onClick={handleScroll}
            >
              3
            </ToggleButton>
            <ToggleButton
              id={toggleButtonId + '-4'}
              value={4}
              onClick={handleScroll}
            >
              4
            </ToggleButton>
            <ToggleButton
              id={toggleButtonId + '-5'}
              value={5}
              onClick={handleScroll}
            >
              5
            </ToggleButton>
          </ToggleButtonGroup>
        </Col>
      </Form.Group>
    </div>
  );
};

export { CustomExamGroup };
