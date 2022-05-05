import React, { useState, useEffect } from 'react';
import LotteMain from './LotteMain';
import queryString from 'query-string';
import axios from 'axios';
import { DefaultHeaders } from '../../components/AxiosConfig';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import ValidationHelper from '../../components/ValidationHelper';
import { Form } from 'react-bootstrap';

const LotteMainContainer = ({ location }) => {
  let queries = queryString.parse(location.search);
  let history = useHistory();
  const pageCompanyName = 'lotte';

  const [enableVerifyConCodeButton, setEnableVerifyConCodeButton] =
    useState(false);
  const [isVerifiedConCode, setIsVerifiedConCode] = useState(false);
  const [enableExamStartButton, setEnableExamStartButton] = useState(false);
  const [submitFlag, setSubmitFlag] = useState(false);

  const [modalAlert, setModalAlert] = useState({
    success: false,
    show: false,
    timer: 0,
    title: '',
    message: '',
    backdrop: false,
  });

  const [examIssueInfo, setExamIssueInfo] = useState({
    conCode: '',
    companyCode: 0,
    status: 'N',
    testerBirthday: '',
    testerAge: '',
    testerName: '',
    testerGender: '1',
    testerClass: '0',
    testerGrade: '1',
  });

  const yearRegex = new RegExp(
    '(?:19\\d{2}|20[0-' +
      new Date().getFullYear().toString().substring(2, 3) +
      '][0-' +
      new Date().getFullYear().toString().substring(3, 4) +
      '])(?:0[1-9]|1[012])(?:0[1-9]|[12][0-9]|3[01])'
  );

  const ValidationSchema = Yup.object().shape({
    testerBirthday: Yup.string()
      .required('생년월일을 입력해주세요.')
      .min(8, '생년월일은 8자리로 입력해주세요.')
      .max(8, '생년월일은 8자리로 입력해주세요.')
      .matches(yearRegex, '생년월일이 잘못 되었습니다.'),
    testerName: Yup.string()
      .required('이름을 입력해주세요.')
      .min(1, '이름이 너무 짧습니다.')
      .max(20, '이름이 너무 깁니다.'),
    testerClass: Yup.string()
      .required('학력을 선택해주세요.')
      .matches(/(1|2)/, '학력을 선택해주세요.'),
  });

  const [validationErrors, setValidationErrors] = useState({});

  const initExamIssueInfo = () => {
    // axios 로 서버쪽에 pageCompanyName 전송 후 code 받아서 객체에 저장
    axios
      .post(
        process.env.REACT_APP_API_URL + '/company/search',
        { companyName: pageCompanyName },
        DefaultHeaders
      )
      .then(
        (response) => {
          // companyCode 리스폰스 데이터에서 받기.
          let companyCode = response.data.companyCode;

          const savedExamIssueInfo = JSON.parse(
            localStorage.getItem('examIssueInfo')
          );

          if (queries.concode) {
            if (!savedExamIssueInfo) {
              console.log('A: 쿼리스트링 - 로컬 스토리지 초기화');
              localStorage.clear();
              setExamIssueInfo({
                ...examIssueInfo,
                conCode: queries.concode,
                companyCode: companyCode,
              });
            } else if (
              savedExamIssueInfo &&
              queries.concode !== savedExamIssueInfo.conCode
            ) {
              console.log(
                'B: 쿼리 스트링 !== 로컬 스토리지 - 로컬 스토리지 초기화'
              );
              localStorage.clear();
              setExamIssueInfo({
                ...examIssueInfo,
                conCode: queries.concode,
                companyCode: companyCode,
              });
            } else {
              console.log('C: 쿼리 스트링 === 로컬 스토리지');
              setExamIssueInfo(savedExamIssueInfo);
            }
          } else if (savedExamIssueInfo) {
            console.log('D: 로컬스토리지');
            setExamIssueInfo(savedExamIssueInfo);
          } else {
            setExamIssueInfo({
              ...examIssueInfo,
              companyCode: companyCode,
            });
          }
          setEnableVerifyConCodeButton(true);
        },
        (error) => {
          if (error.response) {
            const errorMessage = error.response.data;
            setModalAlert({
              ...modalAlert,
              show: true,
              timer: 0,
              title: '오류',
              message: errorMessage.code + ': ' + errorMessage.message,
            });
          } else {
            setModalAlert({
              ...modalAlert,
              show: true,
              timer: 0,
              title: '오류',
              message:
                '화면 로딩 중 서버 오류입니다. 관리자에게 문의 해 주세요.',
            });
          }
        }
      );
  };

  const onChangeExamIssueInfoHandler = (e) => {
    const { value, name } = e.target;
    if (name === 'testerClass') {
      setExamIssueInfo({
        ...examIssueInfo,
        testerGrade: '1',
        [name]: value,
      });
    } else {
      setExamIssueInfo({
        ...examIssueInfo,
        [name]: value,
      });
    }
  };

  //선택한 학력에 따른 조건문
  const gradeOption = () => {
    if (examIssueInfo.testerClass === '0') {
      return false;
    } else if (examIssueInfo.testerClass === '1') {
      return (
        <Form.Select
          name="testerGrade"
          value={examIssueInfo.testerGrade}
          onChange={onChangeExamIssueInfoHandler}
        >
          <option value="1">1학년</option>
          <option value="2">2학년</option>
          <option value="3">3학년</option>
          <option value="4">4학년</option>
          <option value="5">5학년</option>
          <option value="6">6학년</option>
        </Form.Select>
      );
    } else if (examIssueInfo.testerClass === '2') {
      return (
        <Form.Select
          name="testerGrade"
          value={examIssueInfo.testerGrade}
          onChange={onChangeExamIssueInfoHandler}
        >
          <option value="1">1학년</option>
          <option value="2">2학년</option>
          <option value="3">3학년</option>
        </Form.Select>
      );
    }
  };

  const onSubmitConCodeVerifyHandler = (e) => {
    e.preventDefault();

    if (!examIssueInfo.conCode) {
      alert('접속 번호를 입력해주세요.');
      return;
    }
    setEnableVerifyConCodeButton(false);

    axios
      .post(
        process.env.REACT_APP_API_URL + '/lotte/exam/search',
        {
          conCode: examIssueInfo.conCode,
          companyCode: examIssueInfo.companyCode,
        },
        DefaultHeaders
      )
      .then(
        (response) => {
          let tempExamIssueInfo = response.data;

          if (tempExamIssueInfo.status === 'N') {
            setExamIssueInfo({
              companyCode: tempExamIssueInfo.companyCode,
              conCode: tempExamIssueInfo.conCode,
              createTime: tempExamIssueInfo.createTime,
              examCode: tempExamIssueInfo.examCode,
              startTime: tempExamIssueInfo.startTime,
              status: tempExamIssueInfo.status
                ? tempExamIssueInfo.status
                : examIssueInfo.status,
              testerAge: tempExamIssueInfo.testerAge
                ? tempExamIssueInfo.testerAge
                : examIssueInfo.testerAge,
              testerBirthday: tempExamIssueInfo.testerBirthday
                ? tempExamIssueInfo.testerBirthday
                : examIssueInfo.testerBirthday,
              testerClass: tempExamIssueInfo.testerClass
                ? tempExamIssueInfo.testerClass
                : examIssueInfo.testerClass,
              testerGender: tempExamIssueInfo.testerGender
                ? tempExamIssueInfo.testerGender
                : examIssueInfo.testerGender,
              testerGrade: tempExamIssueInfo.testerGrade
                ? tempExamIssueInfo.testerGrade
                : examIssueInfo.testerGrade,
              testerName: tempExamIssueInfo.testerName
                ? tempExamIssueInfo.testerName
                : examIssueInfo.testerName,
            });
          } else {
            localStorage.setItem(
              'examIssueInfo',
              JSON.stringify(tempExamIssueInfo)
            );
          }

          if (tempExamIssueInfo.status === 'N') {
            setIsVerifiedConCode(true);
            setEnableExamStartButton(true);
          } else if (tempExamIssueInfo.status === 'S') {
            history.push('/lotte/start');
          } else if (tempExamIssueInfo.status === 'F') {
            history.push('/lotte/result');
          } else if (tempExamIssueInfo.status === 'E') {
            history.push('/lotte/result');
          }
        },
        (error) => {
          // 실패시 오류 메세지 출력
          if (error.response) {
            const errorMessage = error.response.data;
            setModalAlert({
              ...modalAlert,
              show: true,
              timer: 0,
              title: '오류',
              message: errorMessage.message,
            });
          } else {
            setModalAlert({
              ...modalAlert,
              show: true,
              timer: 0,
              title: '오류',
              message: '서버 오류입니다. 관리자에게 문의 해 주세요.',
            });
          }
          setEnableVerifyConCodeButton(true);
        }
      );
  };

  const getAge = (birthday) => {
    let today = new Date();
    let thisYear = today.getFullYear();
    let birthYear = birthday.getFullYear();
    let yearAge = thisYear - birthYear;
    let thisBirth = birthday.setFullYear(thisYear); //올해의 생일 timestamp로 반환

    if (today.getTime() > thisBirth) {
      yearAge++;
    }
    return yearAge;
  };

  const onSubmitExamStartHandler = (e) => {
    e.preventDefault();

    ValidationHelper(ValidationSchema, examIssueInfo).then((err) => {
      if (err) {
        setValidationErrors(err);
        setSubmitFlag(true);
        return;
      }

      let age = getAge(
        new Date(
          examIssueInfo.testerBirthday.substring(0, 4),
          examIssueInfo.testerBirthday.substring(4, 6) - 1,
          examIssueInfo.testerBirthday.substring(6, 8)
        )
      );

      setExamIssueInfo({
        ...examIssueInfo,
        testerAge: age,
      });

      setEnableExamStartButton(false);

      axios
        .post(
          process.env.REACT_APP_API_URL + '/' + pageCompanyName + '/exam/ready',
          {
            conCode: examIssueInfo.conCode,
            examCode: examIssueInfo.examCode,
            companyCode: examIssueInfo.companyCode,
            testerBirthday: examIssueInfo.testerBirthday,
            testerAge: age,
            testerName: examIssueInfo.testerName,
            testerGender: examIssueInfo.testerGender,
            testerClass: examIssueInfo.testerClass,
            testerGrade: examIssueInfo.testerGrade,
          },
          DefaultHeaders
        )
        .then(
          (response) => {
            localStorage.setItem(
              'examIssueInfo',
              JSON.stringify(examIssueInfo)
            );

            history.push('/lotte/start');
          },
          (error) => {
            if (error.response) {
              const errorMessage = error.response.data;
              setModalAlert({
                ...modalAlert,
                show: true,
                timer: 0,
                title: '오류',
                message: errorMessage.message,
              });
            } else {
              setModalAlert({
                ...modalAlert,
                show: true,
                timer: 0,
                title: '오류',
                message: '서버 오류입니다. 관리자에게 문의 해 주세요.',
              });
            }
            setEnableExamStartButton(true);
          }
        );
    });
  };

  const handleModalAlertClose = () => {
    setModalAlert({
      ...modalAlert,
      show: false,
      timer: 0,
    });
  };

  useEffect(() => {
    initExamIssueInfo();
  }, []);

  useEffect(() => {
    // 서브밋 한번 된 이후부터 examIssueInfo 체인지 이벤트에서 발리데이션 체크
    if (submitFlag) {
      ValidationHelper(ValidationSchema, examIssueInfo).then((err) => {
        setValidationErrors(err ? err : {});
      });
    }
  }, [examIssueInfo]);

  return (
    <LotteMain
      enableVerifyConCodeButton={enableVerifyConCodeButton}
      isVerifiedConCode={isVerifiedConCode}
      enableExamStartButton={enableExamStartButton}
      modalAlert={modalAlert}
      examIssueInfo={examIssueInfo}
      onChangeExamIssueInfoHandler={onChangeExamIssueInfoHandler}
      onSubmitConCodeVerifyHandler={onSubmitConCodeVerifyHandler}
      onSubmitExamStartHandler={onSubmitExamStartHandler}
      handleModalAlertClose={handleModalAlertClose}
      gradeOption={gradeOption}
      validationErrors={validationErrors}
    ></LotteMain>
  );
};

export default LotteMainContainer;
