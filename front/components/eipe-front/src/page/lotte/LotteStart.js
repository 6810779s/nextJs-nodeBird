import React from 'react';
import {
  Form,
  Button,
  Alert,
  Row,
  Col,
  Modal,
  ProgressBar,
  Spinner,
} from 'react-bootstrap';
import { CustomExamGroup } from '../../components/CustomExamGroup';
import styles from '../../style/LotteStart.module.css';

const LotteStart = ({
  examInputData,
  currentPageExamContent,
  handleOnClickPageMove,
  handleOnChangeExamInputData,
  handleOnSubmitExamInputData,
  modalAlert,
  handleModalAlertClose,
  handleProgressBar,
  partInfoList,
  currentPageNum,
  currentPartNum,
  currentSelectedNum,
  enableExamSubmitButton,
}) => {
  return (
    <>
      <div className={styles.wrap}>
        <header className={styles.top}>
          <div className={styles.logo}>
            <p>CDI</p>
          </div>
          <div className={styles['current-part']}>
            {partInfoList.map((partInfo) => {
              return (
                <p
                  key={'partinfo-' + partInfo.partNum}
                  className={
                    styles[
                      `${currentPartNum === partInfo.partNum ? 'selected' : ''}`
                    ]
                  }
                >
                  part {partInfo.partNum}
                </p>
              );
            })}
          </div>
        </header>
        <section>
          <header>
            <h2>part{currentPartNum}</h2>
            <h3>{partInfoList[currentPartNum - 1].partTitle}</h3>
          </header>
          <article>
            <Form>
              <Form.Group as={Row} className="mb-3 justify-content-center">
                <Col className="my-4 d-flex justify-content-center">
                  <span style={{ marginRight: '1rem', fontWeight: '700' }}>
                    {handleProgressBar(currentSelectedNum)}%
                  </span>
                  <ProgressBar
                    animated
                    max={100}
                    min={0}
                    now={handleProgressBar(Number(currentSelectedNum))}
                    style={{
                      width: '80%',
                      borderRadius: '1.875rem',
                      height: '1.5rem',
                    }}
                  />
                </Col>
              </Form.Group>
              {currentPageExamContent.map((item, idx) => (
                <CustomExamGroup
                  className={'button' + idx}
                  key={item.examNum}
                  idx={idx}
                  examContent={'Q' + item.examNum + '. ' + item.examTitle}
                  toggleButtonGroupName={'inputData' + item.examNum}
                  toggleButtonId={'input-data-' + item.examNum}
                  onChangeToggleButtonGroup={handleOnChangeExamInputData}
                  selected={examInputData['inputData' + item.examNum]}
                />
              ))}

              <Row className={styles['form-btn-group']}>
                <Col className="d-flex align-items-center justify-content-end">
                  {currentPageNum !== 1 ? (
                    <Button
                      variant="primary"
                      type="button"
                      value="previous"
                      onClick={handleOnClickPageMove}
                    >
                      이전
                    </Button>
                  ) : null}
                </Col>
                <Col className="d-flex align-items-center justify-content-start">
                  {currentPageNum !== 14 ? (
                    <Button
                      variant="primary"
                      type="button"
                      value="next"
                      onClick={handleOnClickPageMove}
                    >
                      다음
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      type="button"
                      onClick={handleOnSubmitExamInputData}
                    >
                      {!enableExamSubmitButton ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        '완료'
                      )}
                    </Button>
                  )}
                </Col>
              </Row>
            </Form>
          </article>
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
        </section>
      </div>
    </>
  );
};

export default LotteStart;
