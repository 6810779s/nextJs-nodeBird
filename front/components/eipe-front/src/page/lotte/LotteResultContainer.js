import React, { useState, useEffect } from 'react';
import LotteResult from './LotteResult';
import axios from 'axios';
import { DefaultHeaders } from '../../components/AxiosConfig';
import { useHistory } from 'react-router-dom';
import S from '../../assets/cdi/S.png';
import C from '../../assets/cdi/C.png';
import A from '../../assets/cdi/A.png';
import E from '../../assets/cdi/E.png';
import I from '../../assets/cdi/I.png';
import R from '../../assets/cdi/R.png';

const LotteResultContainer = () => {
  const [divTag, setDivTag] = useState(false);
  let history = useHistory();
  const pageCompanyName = 'lotte';

  const pagenation = [];

  // 슬라이드쇼 세팅
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots slick-thumb',
  };

  const clientType = () => {
    const your_type = String(examResult.codeType).substring(0, 1);
    if (your_type === 'S') {
      return <img width="25" src={S} alt="S" />;
    } else if (your_type === 'C') {
      return <img width="25" src={C} alt="C" />;
    } else if (your_type === 'A') {
      return <img width="25" src={A} alt="A" />;
    } else if (your_type === 'E') {
      return <img width="25" src={E} alt="E" />;
    } else if (your_type === 'I') {
      return <img width="25" src={I} alt="I" />;
    } else if (your_type === 'R') {
      return <img width="25" src={R} alt="R" />;
    }
  };

  const resultBg = () => {
    const your_type = String(examResult.codeType).substring(0, 1);
    if (your_type === 'S') {
      return '#6874b123';
    } else if (your_type === 'C') {
      return '#75cb8023';
      //0e
    } else if (your_type === 'A') {
      return '#66649023';
    } else if (your_type === 'E') {
      return '#589dd023';
    } else if (your_type === 'I') {
      return '#b167b023';
    } else if (your_type === 'R') {
      return '#f9b36123';
    }
  };

  const tooltipHandler = () => {
    if (divTag === true) {
      setDivTag(false);
    } else {
      setDivTag(true);
    }
  };

  const handleDetailTab = () => {
    if (divTag === true) {
      setDivTag(false);
    } else {
      setDivTag(true);
    }
  };

  //경고창 로직
  const [modalAlert, setModalAlert] = useState({
    success: false,
    show: false,
    timer: 0,
    title: '',
    message: '',
    backdrop: false,
  });
  //경고창 로직
  const handleModalAlertClose = () => {
    setModalAlert({
      ...modalAlert,
      show: false,
      timer: 0,
    });
  };

  const [examResult, setExamResult] = useState({});

  //최초 실행 함수 로직
  const initExamResult = () => {
    const savedExamIssueInfo = JSON.parse(
      localStorage.getItem('examIssueInfo')
    );

    // 검사 진행 중인 정보가 없을 시에 main페이지로 리다이렉트
    if (savedExamIssueInfo === null || savedExamIssueInfo === undefined) {
      return history.replace('/lotte/main');
    }

    axios
      .post(
        process.env.REACT_APP_API_URL + '/' + pageCompanyName + '/exam/result',
        { conCode: savedExamIssueInfo.conCode },
        DefaultHeaders
      )
      .then(
        (response) => {
          const responseExamResult = response.data;
          setExamResult(responseExamResult);
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
        }
      );
  };

  useEffect(() => {
    initExamResult();
  }, []);

  return (
    <LotteResult
      modalAlert={modalAlert}
      examResult={examResult}
      handleModalAlertClose={handleModalAlertClose}
      settings={settings}
      clientType={clientType}
      resultBg={resultBg}
      divTag={divTag}
      handleDetailTab={handleDetailTab}
    ></LotteResult>
  );
};

export default LotteResultContainer;
