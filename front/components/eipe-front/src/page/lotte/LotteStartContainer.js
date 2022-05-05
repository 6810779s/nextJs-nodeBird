import React, { useState, useEffect } from 'react';
import LotteStart from './LotteStart';
import axios from 'axios';
import { DefaultHeaders } from '../../components/AxiosConfig';
import { useHistory } from 'react-router-dom';

const LotteStartContainer = () => {
  let history = useHistory();
  const pageCompanyName = 'lotte';
  const pageSize = 10;
  const [currentPageNum, setCurrentPageNum] = useState(1); //현재 페이지
  // const [currentPageNum, setCurrentPageNum] = useState(14); //현재 페이지 임시 페이지 설정
  const [currentSelectedNum, setCurrentSelectedNum] = useState(0); //유저가 선택지를 고른 개수
  const [currentPartNum, setCurrentPartNum] = useState(1); //현재 파트
  const [examContentList, setExamContentList] = useState([{}]); //서버에서 데이터 받아옴
  const [currentPageExamContent, setCurrentPageExamContent] = useState([]); //현재 페이지에 있는 문항들
  const [enableExamSubmitButton, setEnableExamSubmitButton] = useState(true);

  const partInfoList = [
    {
      partNum: 1,
      startExamNum: 1,
      endExamNum: 44,
      startPageNum: 1,
      endPageNum: 5,
      partTitle:
        '여러분은 자신과 자신의 미래 진로에 대해 어떻게 생각하고, 어떤 노력을 하고 있습니까?',
    },
    {
      partNum: 2,
      startExamNum: 45,
      endExamNum: 74,
      startPageNum: 6,
      endPageNum: 8,
      partTitle: '여러분은 어떤 활동이나 일이 재미있습니까?',
    },
    {
      partNum: 3,
      startExamNum: 75,
      endExamNum: 104,
      startPageNum: 9,
      endPageNum: 11,
      partTitle: '여러분은 어떤 활동이나 일을 잘 한다고 생각합니까?',
    },
    {
      partNum: 4,
      startExamNum: 105,
      endExamNum: 134,
      startPageNum: 12,
      endPageNum: 14,
      partTitle: '여러분이 좋아하고 또 마음에 드는 직업은 무엇입니까?',
    },
  ];

  //선택한 문항 정보/데이터를 담는 로직
  const [examInputData, setExamInputData] = useState({
    conCode: '41231e',
    examCode: '',

    // inputData(n): 0 ... 인풋 데이터가 해당 검사의 문항 갯수만큼 저장됨.
  });

  // useEffect(() => {
  //   for (let i = 0; i < 133; i++) {
  //     const random_selected = Math.floor(Math.random() * 5) + 1;
  //     examInputData['inputData' + (i + 1)] = random_selected;
  //   }
  // }, [examInputData]);

  //경고창 로직
  const [modalAlert, setModalAlert] = useState({
    success: false,
    show: false,
    timer: 0,
    title: '',
    message: '',
    backdrop: false,
  });

  //최초 실행 함수 로직
  const initExamContentAndInputData = () => {
    const savedExamIssueInfo = JSON.parse(
      localStorage.getItem('examIssueInfo')
    );

    // 검사 진행 중인 정보가 없을 시에 main페이지로 리다이렉트
    if (savedExamIssueInfo === null || savedExamIssueInfo === undefined) {
      return history.replace('/lotte/main');
    }
    axios
      .post(
        process.env.REACT_APP_API_URL + '/' + pageCompanyName + '/exam/start',
        { examCode: savedExamIssueInfo.examCode },
        DefaultHeaders
      )
      .then(
        (response) => {
          const examContentData = response.data;

          const savedExamInputData = JSON.parse(
            localStorage.getItem('examInputData')
          );

          if (savedExamInputData !== null) {
            setExamInputData(savedExamInputData);
            setCurrentSelectedNum(
              Number(JSON.parse(localStorage.getItem('currentSelectedNum')))
            );
            const tempCurrentPageNum = JSON.parse(
              localStorage.getItem('currentPageNum')
            );
            setCurrentPageNum(tempCurrentPageNum ? tempCurrentPageNum : 1);
          } else {
            setExamInputData({
              ...examInputData,
              conCode: savedExamIssueInfo.conCode,
              examCode: savedExamIssueInfo.examCode,
            });
          }
          setExamContentList(examContentData);
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

  const paginationExamContent = () => {
    const currentPartInfo = partInfoList.find((part, idx) => {
      if (
        currentPageNum <= part.endPageNum &&
        currentPageNum >= part.startPageNum
      ) {
        setCurrentPartNum(part.partNum);
        return true;
      }
      return false;
    });
    setCurrentPageExamContent(
      examContentList.filter((examContent) => {
        if (
          examContent.examNum >=
            currentPartInfo.startExamNum +
              (currentPageNum - currentPartInfo.startPageNum) * pageSize &&
          examContent.examNum <
            currentPartInfo.startExamNum +
              (currentPageNum - currentPartInfo.startPageNum) * pageSize +
              pageSize &&
          examContent.examNum <= currentPartInfo.endExamNum
        ) {
          return true;
        }
        return false;
      })
    );
  };

  const handleOnClickPageMove = (e) => {
    const value = e.target.value;
    let futurePageNum = currentPageNum;
    if (value === 'next') {
      const temp = currentPageExamContent.filter((examContent) => {
        if (
          examInputData['inputData' + examContent.examNum] !== null &&
          examInputData['inputData' + examContent.examNum] > 0
        )
          return false;
        else {
          return true;
        }
      });

      if (temp.length > 0) {
        let errorMessage = '';

        temp.map((examContent, idx) => {
          return (errorMessage +=
            (idx === 0 ? '' : ', ') + examContent.examNum);
        });
        errorMessage += '문항';

        setModalAlert({
          ...modalAlert,
          show: true,
          timer: 0,
          title: '체크 안 된 문항이 존재합니다. 다시 한번 확인해 주세요.',
          message: errorMessage,
        });
      } else {
        futurePageNum = currentPageNum + 1;
      }
    } else if (value === 'previous') {
      futurePageNum = currentPageNum - 1;
    }
    setCurrentPageNum(futurePageNum);
    localStorage.setItem('currentPageNum', JSON.stringify(futurePageNum));
  };

  const handleOnChangeExamInputData = (name, value) => {
    const newObject = { ...examInputData, [name]: value };
    const progress = Number(Object.keys(newObject).length) - 2;
    setExamInputData(newObject);
    setCurrentSelectedNum(progress);
    localStorage.setItem('examInputData', JSON.stringify(newObject));
    localStorage.setItem(
      'currentSelectedNum',
      Number(JSON.stringify(progress))
    );
    // 다음 문항으로 오토 스크롤
  };

  const handleOnSubmitExamInputData = (e) => {
    e.preventDefault();

    // 검사 모든 문항 정답 값 입력 되어있는지 확인
    const temp = examContentList.filter((examContent) => {
      if (
        examInputData['inputData' + examContent.examNum] !== null &&
        examInputData['inputData' + examContent.examNum] > 0
      )
        return false;
      else {
        return true;
      }
    });

    if (temp.length > 0) {
      let errorMessage = '';

      temp.map((examContent, idx) => {
        return (errorMessage += (idx === 0 ? '' : ', ') + examContent.examNum);
      });
      errorMessage += '문항';

      setModalAlert({
        ...modalAlert,
        show: true,
        timer: 0,
        title: '체크 안 된 문항이 존재합니다. 다시 한번 학인 해 주세요.',
        message: errorMessage,
      });
      return;
    }

    const requestData = JSON.stringify(examInputData);
    setEnableExamSubmitButton(false);

    axios
      .post(
        process.env.REACT_APP_API_URL + '/' + pageCompanyName + '/exam/finish',
        requestData,
        DefaultHeaders
      )
      .then(
        (response) => {
          // 해당 savedExamIssueInfo 서버로부터 데이터 갱신 받기.
          const examIssueInfo = response.data;

          // 검사 데이터 입력 완료시에 로컬 스토리지 초기화.
          localStorage.clear();
          // 갱신 받은 데이터 로컬스토리지에 등록
          localStorage.setItem('examIssueInfo', JSON.stringify(examIssueInfo));
          history.replace('/lotte/result');
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
          setEnableExamSubmitButton(true);
        }
      );
  };

  //경고창 로직
  const handleModalAlertClose = () => {
    setModalAlert({
      ...modalAlert,
      show: false,
      timer: 0,
    });
  };

  //진행률 표시 로직
  const handleProgressBar = (num) => {
    const totalNum = 134;
    const progress = Math.round((num / totalNum) * 100);
    return progress;
  };

  useEffect(() => {
    initExamContentAndInputData();
  }, []);

  useEffect(() => {
    paginationExamContent();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentPageNum, examContentList]);

  return (
    <LotteStart
      examInputData={examInputData}
      currentPageNum={currentPageNum}
      currentPageExamContent={currentPageExamContent}
      handleOnClickPageMove={handleOnClickPageMove}
      handleOnChangeExamInputData={handleOnChangeExamInputData}
      handleOnSubmitExamInputData={handleOnSubmitExamInputData}
      modalAlert={modalAlert}
      handleModalAlertClose={handleModalAlertClose}
      handleProgressBar={handleProgressBar}
      partInfoList={partInfoList}
      currentPartNum={currentPartNum}
      currentSelectedNum={currentSelectedNum}
      enableExamSubmitButton={enableExamSubmitButton}
    ></LotteStart>
  );
};

export default LotteStartContainer;
