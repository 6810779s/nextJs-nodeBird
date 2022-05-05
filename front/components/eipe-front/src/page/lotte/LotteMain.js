import React from 'react';
import { FcComboChart } from 'react-icons/fc';
// import { IoIosRadioButtonOn } from "react-icons/io";
import { FcSms, FcWorkflow, FcReading, FcSurvey } from 'react-icons/fc';
import { RiFileEditLine } from 'react-icons/ri';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from '../../style/LotteMain.module.css';
import {
  Form,
  Button,
  Alert,
  Row,
  Col,
  Modal,
  Spinner,
  ButtonGroup,
  ToggleButton,
} from 'react-bootstrap';

const LotteMain = ({
  enableVerifyConCodeButton,
  isVerifiedConCode,
  enableExamStartButton,
  modalAlert,
  examIssueInfo,
  onChangeExamIssueInfoHandler,
  onSubmitConCodeVerifyHandler,
  onSubmitExamStartHandler,
  handleModalAlertClose,
  gradeOption,
  validationErrors,
}) => {
  return (
    <>
      <div className={styles.wrap}>
        <header>
          <h1>한국가이던스</h1>
          <h3 style={{ fontWeight: '100', fontSize: '20px' }}>
            학과적합성진로진단검사
          </h3>
        </header>
        <section>
          <article className={styles['test-part-info']}>
            <div className={styles.detail}>
              <h2>
                <FcComboChart style={{ marginRight: '8px' }} />
                진로발달검사
              </h2>
              <div className={styles['test-part-explain']}>
                <div>
                  <FcSms style={{ width: '5rem', height: '5rem' }} />
                  <p>
                    총 134개의 <br />
                    문항이 있습니다.
                  </p>
                </div>
                <div>
                  <FcWorkflow style={{ width: '5rem', height: '5rem' }} />
                  <p>
                    4가지 파트로 <br />
                    구성되어 있습니다.
                  </p>
                </div>
                <div>
                  <FcReading style={{ width: '5rem', height: '5rem' }} />
                  <p>
                    진로고민을 위한 <br />
                    학생들에게 적합한 <br />
                    검사입니다.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className={styles['test-form']}>
            <Form className={styles['code-form']}>
              {!isVerifiedConCode ? (
                <>
                  <Form.Group as={Row} controlId="conCode">
                    <Form.Label>
                      <h2 style={{ fontWeight: '700' }}>
                        <RiFileEditLine
                          style={{ marginRight: '8px', color: '#00BCD4' }}
                        />
                        접속 번호
                      </h2>
                    </Form.Label>
                    <Form.Control
                      className={styles['code-num']}
                      type="text"
                      name="conCode"
                      value={examIssueInfo.conCode ? examIssueInfo.conCode : ''}
                      placeholder="접속 번호"
                      onChange={onChangeExamIssueInfoHandler}
                    />
                    <Form.Text>
                      <p>
                        이메일 또는 메세지로 받은 접속 번호를 입력 해 주세요.
                      </p>
                    </Form.Text>
                  </Form.Group>
                  <Row className="g-2">
                    <Col>
                      <Button
                        size="sm"
                        variant={
                          enableVerifyConCodeButton
                            ? 'outline-success'
                            : 'outline-warning'
                        }
                        type="submit"
                        onClick={onSubmitConCodeVerifyHandler}
                        className={enableVerifyConCodeButton ? '' : 'disabled'}
                      >
                        {!enableVerifyConCodeButton ? (
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        ) : (
                          <p>
                            다음
                            <AiOutlineArrowRight />
                          </p>
                        )}
                      </Button>
                    </Col>
                  </Row>
                </>
              ) : (
                <>
                  <h2 style={{ fontWeight: '800', padding: '2rem 0' }}>
                    <FcSurvey style={{ marginRight: '8px' }} />
                    정보 입력
                  </h2>
                  <Form.Group
                    className={styles['info-group']}
                    controlId="conCode"
                  >
                    <Form.Label className={styles['info-writing']}>
                      접속 번호
                    </Form.Label>
                    <Form.Control
                      className={styles['info-input']}
                      type="test"
                      name="conCode"
                      value={examIssueInfo.conCode ? examIssueInfo.conCode : ''}
                      readOnly
                    />
                  </Form.Group>

                  <Form.Group
                    className={styles['info-group']}
                    controlId="testerBirthday"
                  >
                    <Form.Label className={styles['info-writing']}>
                      생년 월일
                    </Form.Label>

                    <Form.Control
                      className={styles['info-input']}
                      type="text"
                      name="testerBirthday"
                      value={
                        examIssueInfo.testerBirthday
                          ? examIssueInfo.testerBirthday
                          : ''
                      }
                      placeholder="19990101"
                      onChange={onChangeExamIssueInfoHandler}
                      isInvalid={!!validationErrors.testerBirthday}
                    />
                    <Form.Control.Feedback
                      className={styles['feedBack']}
                      type="invalid"
                    >
                      {validationErrors.testerBirthday}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className={styles['info-group']}
                    controlId="testerName"
                  >
                    <Form.Label className={styles['info-writing']}>
                      이름
                    </Form.Label>
                    <Form.Control
                      className={styles['info-input']}
                      type="text"
                      name="testerName"
                      value={
                        examIssueInfo.testerName ? examIssueInfo.testerName : ''
                      }
                      placeholder="홍길동"
                      onChange={onChangeExamIssueInfoHandler}
                      isInvalid={validationErrors.testerName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {validationErrors.testerName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className={styles['info-group']}
                    controlId="testerClass"
                  >
                    <Form.Label className={styles['info-writing']}>
                      학력
                    </Form.Label>
                    <Form.Select
                      name="testerClass"
                      onChange={onChangeExamIssueInfoHandler}
                      value={examIssueInfo.testerClass}
                      isInvalid={validationErrors.testerClass}
                    >
                      <option value="0">-</option>
                      <option value="1">초등학교</option>
                      <option value="2">중학교</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {validationErrors.testerClass}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {gradeOption() ? (
                    <Form.Group
                      className={styles['info-group']}
                      controlId="testerGrade"
                    >
                      <Form.Label className={styles['info-writing']}>
                        학년
                      </Form.Label>
                      <>{gradeOption()}</>
                    </Form.Group>
                  ) : (
                    ''
                  )}
                  <Form.Group
                    className={styles['info-group']}
                    controlId="testerGender"
                  >
                    <Form.Label className={styles['info-writing']}>
                      성별
                    </Form.Label>

                    <Row>
                      <ButtonGroup>
                        <ToggleButton
                          key="1"
                          id="gender-radio-1"
                          type="radio"
                          variant="outline-primary"
                          name="testerGender"
                          value="1"
                          checked={examIssueInfo.testerGender === '1'}
                          onChange={onChangeExamIssueInfoHandler}
                        >
                          남
                        </ToggleButton>
                        <ToggleButton
                          key="2"
                          id="gender-radio-2"
                          type="radio"
                          variant="outline-primary"
                          name="testerGender"
                          value="2"
                          checked={examIssueInfo.testerGender === '2'}
                          onChange={onChangeExamIssueInfoHandler}
                        >
                          여
                        </ToggleButton>
                      </ButtonGroup>
                    </Row>
                  </Form.Group>

                  <Row className="g-2">
                    <Col>
                      <Button
                        variant={enableExamStartButton ? 'success' : 'warning'}
                        type="submit"
                        onClick={onSubmitExamStartHandler}
                        // 테스트용: 임시로 주석 처리
                        //className={enableExamStartButton ? '' : 'disabled'}
                      >
                        {!enableExamStartButton ? (
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        ) : (
                          <p>
                            검사 시작
                            <AiOutlineArrowRight />
                          </p>
                        )}
                      </Button>
                    </Col>
                  </Row>
                </>
              )}
            </Form>
          </article>
        </section>
        <Modal
          show={modalAlert.show}
          onHide={handleModalAlertClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          {/* <Modal.Header closeButton>
						<Modal.Title>{modalAlert.title}</Modal.Title>
					</Modal.Header> */}
          <Modal.Body className="padding-zero">
            <Alert
              show={true}
              variant={modalAlert.success ? 'success' : 'danger'}
              className="margin-zero"
            >
              <Alert.Heading>{modalAlert.title}</Alert.Heading>
              <hr />
              <p>{modalAlert.message}</p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button
                  onClick={handleModalAlertClose}
                  variant="outline-danger"
                >
                  닫기
                </Button>
              </div>
            </Alert>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default LotteMain;
