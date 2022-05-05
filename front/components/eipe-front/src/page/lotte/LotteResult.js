import React, { useRef, useState } from 'react';
import {
  Button,
  Alert,
  Modal,
  OverlayTrigger,
  Popover,
  Tabs,
  Tab,
} from 'react-bootstrap';
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { FcHighPriority } from 'react-icons/fc';
import styles from '../../style/LotteResult.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FcIdea, FcRedo, FcSearch, FcTodoList, FcSurvey } from 'react-icons/fc';
import { BsQuestionCircle } from 'react-icons/bs';
import { AiFillCaretRight, AiFillCaretDown } from 'react-icons/ai';
import useOnScreen from '../../components/useOnScreen';
import { ReactComponent as HexagonArtistic } from '../../assets/cdi/HexagonArtistic.svg';
import { ReactComponent as HexagonConventional } from '../../assets/cdi/HexagonConventional.svg';
import { ReactComponent as HexagonEnterprising } from '../../assets/cdi/HexagonEnterprising.svg';
import { ReactComponent as HexagonInvestigative } from '../../assets/cdi/HexagonInvestigative.svg';
import { ReactComponent as HexagonRealistic } from '../../assets/cdi/HexagonRealistic.svg';
import { ReactComponent as HexagonSocial } from '../../assets/cdi/HexagonSocial.svg';
import { ReactComponent as IconArtistic } from '../../assets/cdi/IconArtistic.svg';
import { ReactComponent as IconConventional } from '../../assets/cdi/IconConventional.svg';
import { ReactComponent as IconEnterprising } from '../../assets/cdi/IconEnterprising.svg';
import { ReactComponent as IconInvestigative } from '../../assets/cdi/IconInvestigative.svg';
import { ReactComponent as IconRealistic } from '../../assets/cdi/IconRealistic.svg';
import { ReactComponent as IconSocial } from '../../assets/cdi/IconSocial.svg';
import postMobile1 from '../../assets/cdi/postit-mobile1.png';
import postMobile2 from '../../assets/cdi/postit-mobile2.png';
import Realistic from '../../assets/cdi/tooltip-type/R.png';
import Investigative from '../../assets/cdi/tooltip-type/I.png';
import Artistic from '../../assets/cdi/tooltip-type/A.png';
import Social from '../../assets/cdi/tooltip-type/S.png';
import Enterprising from '../../assets/cdi/tooltip-type/E.png';
import Conventional from '../../assets/cdi/tooltip-type/C.png';

import DescriptionImage from '../../assets/cdi/result-description.png';

const LotteResult = ({
  modalAlert,
  handleModalAlertClose,
  examResult,
  settings,
  clientType,
  resultBg,
  divTag,
  handleDetailTab,
}) => {
  const refDetailScoreByType = useRef(null);
  const isVisible = useOnScreen(refDetailScoreByType);

  const renderCustomHexagonAxisTick = ({ x, y, payload }) => {
    switch (payload.value) {
      case 'R':
        return (
          <HexagonRealistic
            x={x - 159}
            y={y - 16}
            width={1300}
            height={1300}
            viewBox="0 0 1024 1024"
          ></HexagonRealistic>
        );

      case 'I':
        return (
          <HexagonInvestigative
            x={x - 60}
            y={y - 16}
            width={1300}
            height={1300}
            viewBox="0 0 1024 1024"
          >
            {' '}
          </HexagonInvestigative>
        );

      case 'A':
        return (
          <HexagonArtistic
            x={x - 33}
            y={y - 35}
            width={1300}
            height={1300}
            viewBox="0 0 1024 1024"
          >
            {' '}
          </HexagonArtistic>
        );

      case 'S':
        return (
          <HexagonSocial
            x={x - 42}
            y={y - 33}
            width={1300}
            height={1300}
            viewBox="0 0 1024 1024"
          >
            {' '}
          </HexagonSocial>
        );

      case 'E':
        return (
          <HexagonEnterprising
            x={x - 126}
            y={y - 26}
            width={1300}
            height={1300}
            viewBox="0 0 1024 1024"
          ></HexagonEnterprising>
        );

      case 'C':
        return (
          <HexagonConventional
            x={x - 83}
            y={y - 17}
            width={1300}
            height={1300}
            viewBox="0 0 1024 1024"
          >
            {' '}
          </HexagonConventional>
        );

      default:
    }
  };

  const renderCustomRadarLabel = (props) => {
    const RADIAN = Math.PI / 180;
    let { cx, cy, radius, angle, value, name } = props;
    const sin = Math.sin(-RADIAN * angle);
    const cos = Math.cos(-RADIAN * angle);
    const mx = cx + (radius + 10) * cos - 9;
    const my = cy + (radius + 10) * sin + 5;

    return (
      <text x={mx} y={my}>
        {value}
      </text>
    );
  };

  // const renderCustomBarAxisTick = ({ x, y, payload }) => {
  const renderCustomBarAxisTick = (props) => {
    let { x, payload } = props;
    let y = 0;
    x -= 40;
    //x -= 30;
    switch (payload.value) {
      case 'R':
        return (
          <IconRealistic
            x={x - 0}
            y={y - 0}
            width={1500}
            height={1500}
            viewBox="0 0 1024 1024"
          ></IconRealistic>
        );

      case 'I':
        return (
          <IconInvestigative
            x={x - 0}
            y={y - 0}
            width={1500}
            height={1500}
            viewBox="0 0 1024 1024"
          >
            {' '}
          </IconInvestigative>
        );

      case 'A':
        return (
          <IconArtistic
            x={x - 0}
            y={y - 0}
            width={1500}
            height={1500}
            viewBox="0 0 1024 1024"
          >
            {' '}
          </IconArtistic>
        );

      case 'S':
        return (
          <IconSocial
            x={x - 0}
            y={y - 0}
            width={1500}
            height={1500}
            viewBox="0 0 1024 1024"
          >
            {' '}
          </IconSocial>
        );

      case 'E':
        return (
          <IconEnterprising
            x={x - 0}
            y={y - 0}
            width={1500}
            height={1500}
            viewBox="0 0 1024 1024"
          ></IconEnterprising>
        );

      case 'C':
        return (
          <IconConventional
            x={x - 0}
            y={y - 0}
            width={1300}
            height={1300}
            viewBox="0 0 1024 1024"
          >
            {' '}
          </IconConventional>
        );

      default:
    }
  };

  const data = [
    {
      subject: 'R',
      A: examResult.realTypeTotalPer,
      B: examResult.realTypeTotalT,
    },
    {
      subject: 'I',
      A: examResult.inquisitiveTypeTotalPer,
      B: examResult.inquisitiveTypeTotalT,
    },
    {
      subject: 'A',
      A: examResult.artTypeTotalPer,
      B: examResult.artTypeTotalT,
    },
    {
      subject: 'S',
      A: examResult.socialTypeTotalPer,
      B: examResult.socialTypeTotalT,
    },
    {
      subject: 'E',
      A: examResult.enterpriseTypeTotalPer,
      B: examResult.enterpriseTypeTotalT,
    },
    {
      subject: 'C',
      A: examResult.customaryTypeTotalPer,
      B: examResult.customaryTypeTotalT,
    },
  ];

  const dataBar = [
    {
      subject: 'R',
      name: '실재형(R)',
      흥미: examResult.realTypeInterestPer,
      역량: examResult.realTypeCapabilitiesPer,
      직업선호: examResult.realTypeJobPreferencePer,
    },
    {
      subject: 'I',
      name: '탐구형(I)',
      흥미: examResult.inquisitiveTypeInterestPer,
      역량: examResult.inquisitiveTypeCapabilitiesPer,
      직업선호: examResult.inquisitiveTypeJobPreferencePer,
    },
    {
      subject: 'A',
      name: '예술형(A)',
      흥미: examResult.artTypeInterestPer,
      역량: examResult.artTypeCapabilitiesPer,
      직업선호: examResult.artTypeJobPreferencePer,
    },
    {
      subject: 'S',
      name: '사회형(S)',
      흥미: examResult.socialTypeInterestPer,
      역량: examResult.socialTypeCapabilitiesPer,
      직업선호: examResult.socialTypeJobPreferencePer,
    },
    {
      subject: 'E',
      name: '기업형(E)',
      흥미: examResult.enterpriseTypeInterestPer,
      역량: examResult.enterpriseTypeCapabilitiesPer,
      직업선호: examResult.enterpriseTypeJobPreferencePer,
    },
    {
      subject: 'C',
      name: '관습형(C)',
      흥미: examResult.customaryTypeInterestPer,
      역량: examResult.customaryTypeCapabilitiesPer,
      직업선호: examResult.customaryTypeJobPreferencePer,
    },
  ];

  const detailContainerOne = {
    backgroundImage: `url(${postMobile1})`,
    backgroundPosition: 'center',
    backgroundSize: '23rem 37rem',
    backgroundRepeat: 'no-repeat',
  };

  const detailContainerTwo = {
    backgroundImage: `url(${postMobile2})`,
    backgroundPosition: 'center',
    backgroundSize: '23rem 37rem',
    backgroundRepeat: 'no-repeat',
  };

  const detailContainerMobileOne = {
    width: '16rem',
    height: '38rem',
    margin: 'auto',
    padding: '2rem',
    backgroundImage: `url(${postMobile1})`,
    backgroundPosition: 'center',
    backgroundSize: '16rem 37rem',
    backgroundRepeat: 'no-repeat',
  };

  const detailContainerMobileTwo = {
    width: '16rem',
    height: '38rem',
    margin: 'auto',
    padding: '2rem',
    backgroundImage: `url(${postMobile2})`,
    backgroundPosition: 'center',
    backgroundSize: '16rem 37rem',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={styles.wrap} style={{ background: `${resultBg()}` }}>
      <header>
        <h1 className={styles.result}>진로발달검사 결과</h1>
        <div className={styles.note} style={{ borderColor: `${resultBg()}` }}>
          <FcHighPriority
            style={{
              width: '3rem',
              height: '3rem',
              marginTop: '2rem',
              marginBottom: '0.6rem',
            }}
          />
          <p className={styles.title}>진로발달검사 해설 시 유의사항</p>
          <p>
            본 심리검사는 개인의 현재 심리 상태를 반영한 결과입니다. 심리검사의
            결과는 절대적인 것이 아니며 개인의 성장에 따라서 추후 변할 수
            있습니다.
          </p>
        </div>
      </header>

      <section>
        <article>
          {/* 설명서 */}
          {/* <div className={styles['description-tables']}>
            <div className={styles['development']}>
              <div>
                <div>
                  <p>
                    진로
                    <br />
                    발달
                  </p>
                </div>
                <p>
                  학생 스스로 자신에 대해 어느 정도 이해하고자 노력하고 있는지,
                  직업과 진로에 대해 다양하게 탐색하고 있는지, 진로의사결정을
                  합리적으로 해나갈 마음가짐을 갖추고 있는지를 알아보는
                  부분입니다.
                </p>
              </div>
            </div>
            <div className={styles['type']}>
              <div>
                Holland
                <br />
                유형
              </div>
            </div>
            <p>
              아울러 어떠한 진로희망분야에 관심을 가지고 있는지 알아보기 위해
              Holland 직업적 성격유형을 측정함으로써 앞으로 학생 여러분의
              진로설계에 필요한 정보를 알아보는 부분입니다.
            </p>
          </div> */}

          {/* 진로유형*/}
          <div className={`${styles['client-type']} ${styles.part}`}>
            <h3>
              {clientType()}
              당신의 진로유형은{' '}
              <span className={styles.bolder}>"{examResult.codeType}"</span>
              입니다.
            </h3>
          </div>

          {/* 진로유형 - 그래프 */}
          <div className={styles.result}>
            <p className={styles.percentage}>(단위: 백분율)</p>
            <div className={styles.graph}>
              <p>
                <OverlayTrigger
                  placement="bottom"
                  trigger={['hover', 'focus']}
                  delay={{ show: 250, hide: 400 }}
                  flip={false}
                  overlay={
                    <Popover id="popover-positioned-bottom">
                      <Popover.Header as="h3">해석 방법</Popover.Header>
                      <Popover.Body>
                        <img
                          alt="tooltip"
                          src={DescriptionImage}
                          style={{
                            width: '100%',
                          }}
                        />
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button
                    variant="light"
                    className="d-inline-flex align-items-center"
                    style={{ border: '0', outline: '0', background: 'none' }}
                  >
                    <BsQuestionCircle
                      className={styles['tooltip-button-style']}
                    />
                  </Button>
                </OverlayTrigger>
              </p>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  // cx={180}
                  // cy={180}
                  cx="50%"
                  cy="50%"
                  // outerRadius={120}
                  outerRadius="60%"
                  // width={360}
                  // height={360}
                  width="100%"
                  height="100%"
                  data={data}
                  startAngle={90}
                  endAngle={-270}
                  animationDuration={500}
                  animationBegin={0}
                >
                  <PolarGrid />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={renderCustomHexagonAxisTick}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="백분율"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.2}
                    label={renderCustomRadarLabel}
                  />
                  <Tooltip />
                  {/* <Legend /> */}
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* 그래프 보는법 */}

            <div className={styles['graph-description']}>
              <div
                className={`${styles['type-R']} ${styles['type-description']}`}
              >
                <div
                  className={styles.type}
                  style={{ borderColor: '#F9B361', color: '#F9B361' }}
                >
                  실재형(R){' '}
                  <span>
                    백분율:{examResult.realTypeTotalPer}
                    {'  '}
                    T점수:{examResult.realTypeTotalT}
                  </span>
                </div>
                <div className={styles.description}>
                  구체적이고 체계적이며 몸으로 부딪혀 문제를 해결하는 유형
                </div>
              </div>
              <div
                className={`${styles['type-I']} ${styles['type-description']}`}
              >
                <div
                  className={styles.type}
                  style={{ borderColor: '#B167B0', color: '#B167B0' }}
                >
                  탐구형(I){' '}
                  <span>
                    백분율:{examResult.inquisitiveTypeTotalPer} T점수:
                    {examResult.inquisitiveTypeTotalT}
                  </span>
                </div>
                <div className={styles.description}>
                  지적, 논리적이고 호기심이 많고 독립적인 유형
                </div>
              </div>
              <div
                className={`${styles['type-A']} ${styles['type-description']}`}
              >
                <div
                  className={styles.type}
                  style={{ borderColor: '#666490', color: '#666490' }}
                >
                  예술형(A){' '}
                  <span>
                    백분율:{examResult.artTypeTotalPer} T점수:
                    {examResult.artTypeTotalT}
                  </span>
                </div>
                <div className={styles.description}>
                  다양한 자원을 이용하여 새로운 것을 창작하는 활동을 하고
                  싶어하는 유형
                </div>
              </div>
              <div
                className={`${styles['type-S']} ${styles['type-description']}`}
              >
                <div
                  className={styles.type}
                  style={{ borderColor: '#6874B1', color: '#6874B1' }}
                >
                  사회형(S){' '}
                  <span>
                    백분율:{examResult.socialTypeTotalPer} T점수:
                    {examResult.socialTypeTotalT}
                  </span>
                </div>
                <div className={styles.description}>
                  다른 사람을 가르치거나 돌보거나 치유하고 돕는 일을 좋아하는
                  유형
                </div>
              </div>
              <div
                className={`${styles['type-E']} ${styles['type-description']}`}
              >
                <div
                  className={styles.type}
                  style={{ borderColor: '#589DD0', color: '#589DD0' }}
                >
                  기업형(E){' '}
                  <span>
                    백분율:{examResult.enterpriseTypeTotalPer} T점수:
                    {examResult.enterpriseTypeTotalT}
                  </span>
                </div>
                <div className={styles.description}>
                  다른 사람을 이끌거나 설득하는 지도자의 역할에 관심이 많은 유형
                </div>
              </div>
              <div
                className={`${styles['type-C']} ${styles['type-description']}`}
              >
                <div
                  className={styles.type}
                  style={{ borderColor: '#75CB80', color: '#75CB80' }}
                >
                  관습형(C){' '}
                  <span>
                    백분율:{examResult.customaryTypeTotalPer} T점수:
                    {examResult.customaryTypeTotalT}
                  </span>
                </div>
                <div className={styles.description}>
                  자료를 정리하는 등의 체계적이고 조직적인 일을 좋아하는 유형
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className={`${styles['type-analysis']}`}>
            {/* 세부 유형별 점수 */}
            <div className={styles['detail-type']}>
              <h3 ref={refDetailScoreByType} className={styles.tit}>
                세부 유형별 점수
              </h3>
              <BsQuestionCircle
                className={styles['tab-button-style']}
                onClick={handleDetailTab}
              />

              <div className={divTag ? '' : `${styles['tab-style']}`}>
                <Tabs
                  defaultActiveKey="R"
                  id="uncontrolled-tab-example"
                  className={styles['detail-tabs']}
                >
                  <Tab eventKey="R" title="R">
                    <img
                      alt="tooltip"
                      src={Realistic}
                      style={{
                        width: '5rem',
                        height: '5rem',
                        lineHeight: '5rem',
                      }}
                    />
                    <div>
                      <p>
                        <span>
                          성격 및 흥미 특징
                          <br />
                        </span>
                        현실적 · 조직적 활동, 신체 · 기계적 능력, 비사교적,
                        물질적, 실용적, 동조적, 솔직성, 단순성, 경직성, 통찰력
                        부족 등
                      </p>
                    </div>
                    <hr />
                    <div>
                      <p>
                        <span>
                          선호하는/싫어하는 직업적 환경
                          <br />
                        </span>
                        분명하고, 질서정연하게, 체계적으로 대상이나 연장, 기계,
                        동물들을 조작하는 활동내지는 신체적 기술들을 좋아하는
                        반면, 교육적인 활동이나 치료적인 활동은 좋아하지 않음
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="I" title="I">
                    <img
                      alt="tooltip"
                      src={Investigative}
                      style={{
                        width: '5rem',
                        height: '5rem',
                        lineHeight: '5rem',
                      }}
                    />
                    <div>
                      <p>
                        <span>
                          성격 및 흥미 특징
                          <br />
                        </span>
                        학구적 · 지적 활동, 과학 · 수학적 능력, 분석적, 합리적,
                        비판적, 독립적, 신중성, 주저함, 세밀함, 호기심 강함 등
                      </p>
                    </div>
                    <hr />
                    <div>
                      <p>
                        <span>
                          선호하는/싫어하는 직업적 환경
                          <br />
                        </span>
                        관찰적, 상징적, 체계적으로 물리적, 생물학적, 문화적
                        현상을 탐구하는 활동에는 흥미를 보이지만, 사회적이고
                        반복적인 활동 등에는 관심이 부족한 면이 있음
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="A" title="A">
                    <img
                      alt="tooltip"
                      src={Artistic}
                      style={{
                        width: '5rem',
                        height: '5rem',
                      }}
                    />
                    <div>
                      <p>
                        <span>
                          성격 및 흥미 특징
                          <br />
                        </span>
                        비체계적 자유로운 활동, 심미적 능력, 표현적, 직관적,
                        비동조적, 독립적, 독창적, 내성적, 감성적, 비실용적 등
                      </p>
                    </div>
                    <hr />
                    <div>
                      <p>
                        <span>
                          선호하는/싫어하는 직업적 환경
                          <br />
                        </span>
                        예술적 창조와 표현, 변화와 다양성을 좋아하고, 틀에 박힌
                        것을 싫어함, 모호하고 자유롭고, 상징적인 활동을
                        좋아하지만, 명쾌하고, 체계적이고, 구조화된 활동에는
                        흥미가 없음
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="S" title="S">
                    <img
                      alt="tooltip"
                      src={Social}
                      style={{
                        width: '5rem',
                        height: '5rem',
                      }}
                    />
                    <div>
                      <p>
                        <span>
                          성격 및 흥미 특징
                          <br />
                        </span>
                        사람을 다루는 활동, 인간 관계 능력, 사교적, 봉사적,
                        동정적, 임기응변적, 협동적, 친근성, 인내심, 관대함 등
                      </p>
                    </div>
                    <hr />
                    <div>
                      <p>
                        <span>
                          선호하는/싫어하는 직업적 환경
                          <br />
                        </span>
                        타인의 문제를 듣고, 이해하고, 도와주고, 치료해 주고,
                        봉사하는 활동에는 흥미를 보이지만, 기계, 도구, 물질과
                        함께 명쾌하고, 질서정연하고, 체계적인 활동에는 흥미가
                        없음
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="E" title="E">
                    <img
                      alt="tooltip"
                      src={Enterprising}
                      style={{
                        width: '5rem',
                        height: '5rem',
                      }}
                    />
                    <div>
                      <p>
                        <span>
                          성격 및 흥미 특징
                          <br />
                        </span>
                        조직적 · 경제적 활동, 설득 · 지도적 능력, 모험적,
                        지배적, 의욕적, 수다스러움, 활동적, 외향적, 야심적,
                        자신감 등
                      </p>
                    </div>
                    <hr />
                    <div>
                      <p>
                        <span>
                          선호하는/싫어하는 직업적 환경
                          <br />
                        </span>
                        조직의 목적과 경제적 이익을 얻기 위해 타인을 선도, 계획,
                        통제, 관리하는 일과 그 결과로 얻는 활동을 좋아하지만
                        관찰적, 상징적, 체계적 활동에는 흥미가 없음
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="C" title="C">
                    <img
                      alt="tooltip"
                      src={Conventional}
                      style={{
                        width: '5rem',
                        height: '5rem',
                      }}
                    />
                    <div>
                      <p>
                        <span>
                          성격 및 흥미 특징
                          <br />
                        </span>
                        체계적 · 자료처리 활동, 사무 · 계산 능력, 동조적,
                        실용적, 순종적, 끈기 있음, 조심성, 정연함, 진지함, 자기
                        절제 등
                      </p>
                    </div>
                    <hr />
                    <div>
                      <p>
                        <span>
                          선호하는/싫어하는 직업적 환경
                          <br />
                        </span>
                        정해진 원칙과 계획에 따라 자료들을 기록, 정리, 조직하는
                        일을 좋아하고, 체계적인 작업환경에서 사무적, 계산적
                        능력을 발휘하는 활동을 좋아함, 그러나 창의적,
                        자율적이며, 모험적, 비체계적인 활동은 매우 혼란을 느낌
                      </p>
                    </div>
                  </Tab>
                </Tabs>
              </div>

              {/* <p className={styles.tooltip}>
                <OverlayTrigger
                  placement="bottom"
                  trigger="click"
                  delay={{ show: 250, hide: 400 }}
                  flip={false}
                  overlay={
                    <Popover id="popover-type-style">
                      <Popover.Header as="h3">
                        Holland 유형별 특성과 관련 직업
                      </Popover.Header>
                      <Popover.Body>
                        <div>
                          <div className={styles['type-style']}>
                            <div>
                              <img alt="tooltip" src={Realistic} />
                            </div>
                            <div style={{ borderColor: '#f9b361' }}>
                              <p>
                                <span>
                                  성격 및 흥미 특징
                                  <br />
                                </span>
                                현실적 · 조직적 활동, 신체 · 기계적 능력,
                                비사교적, 물질적, 실용적, 동조적, 솔직성,
                                단순성, 경직성, 통찰력 부족 등
                              </p>
                            </div>
                            <div style={{ borderColor: '#f9b361' }}>
                              <p>
                                <span>
                                  선호하는/싫어하는 직업적 환경
                                  <br />
                                </span>
                                분명하고, 질서정연하게, 체계적으로 대상이나
                                연장, 기계, 동물들을 조작하는 활동내지는 신체적
                                기술들을 좋아하는 반면, 교육적인 활동이나
                                치료적인 활동은 좋아하지 않음
                              </p>
                            </div>
                          </div>

                          <div className={styles['type-style']}>
                            <div>
                              <img
                                alt="tooltip"
                                src={Investigative}
                                style={{
                                  width: '5rem',
                                  height: '5rem',
                                  lineHeight: '5rem',
                                }}
                              />
                            </div>
                            <div style={{ borderColor: '#b167b0' }}>
                              <p>
                                <span>
                                  성격 및 흥미 특징
                                  <br />
                                </span>
                                학구적 · 지적 활동, 과학 · 수학적 능력, 분석적,
                                합리적, 비판적, 독립적, 신중성, 주저함, 세밀함,
                                호기심 강함 등
                              </p>
                            </div>
                            <div style={{ borderColor: '#b167b0' }}>
                              <p>
                                <span>
                                  선호하는/싫어하는 직업적 환경
                                  <br />
                                </span>
                                관찰적, 상징적, 체계적으로 물리적, 생물학적,
                                문화적 현상을 탐구하는 활동에는 흥미를 보이지만,
                                사회적이고 반복적인 활동 등에는 관심이 부족한
                                면이 있음
                              </p>
                            </div>
                          </div>

                          <div className={styles['type-style']}>
                            <div>
                              <img
                                alt="tooltip"
                                src={Artistic}
                                style={{
                                  width: '5rem',
                                  height: '5rem',
                                }}
                              />
                            </div>
                            <div style={{ borderColor: '#666490' }}>
                              <p>
                                <span>
                                  성격 및 흥미 특징
                                  <br />
                                </span>
                                비체계적 자유로운 활동, 심미적 능력, 표현적,
                                직관적, 비동조적, 독립적, 독창적, 내성적,
                                감성적, 비실용적 등
                              </p>
                            </div>
                            <div style={{ borderColor: '#666490' }}>
                              <p>
                                <span>
                                  선호하는/싫어하는 직업적 환경
                                  <br />
                                </span>
                                예술적 창조와 표현, 변화와 다양성을 좋아하고,
                                틀에 박힌 것을 싫어함, 모호하고 자유롭고,
                                상징적인 활동을 좋아하지만, 명쾌하고,
                                체계적이고, 구조화된 활동에는 흥미가 없음
                              </p>
                            </div>
                          </div>

                          <div className={styles['type-style']}>
                            <div>
                              <img
                                alt="tooltip"
                                src={Social}
                                style={{
                                  width: '5rem',
                                  height: '5rem',
                                }}
                              />
                            </div>
                            <div style={{ borderColor: '#6874b1' }}>
                              <p>
                                <span>
                                  성격 및 흥미 특징
                                  <br />
                                </span>
                                사람을 다루는 활동, 인간 관계 능력, 사교적,
                                봉사적, 동정적, 임기응변적, 협동적, 친근성,
                                인내심, 관대함 등
                              </p>
                            </div>
                            <div style={{ borderColor: '#6874b1' }}>
                              <p>
                                <span>
                                  선호하는/싫어하는 직업적 환경
                                  <br />
                                </span>
                                타인의 문제를 듣고, 이해하고, 도와주고, 치료해
                                주고, 봉사하는 활동에는 흥미를 보이지만, 기계,
                                도구, 물질과 함께 명쾌하고, 질서정연하고,
                                체계적인 활동에는 흥미가 없음
                              </p>
                            </div>
                          </div>

                          <div className={styles['type-style']}>
                            <div>
                              <img
                                alt="tooltip"
                                src={Enterprising}
                                style={{
                                  width: '5rem',
                                  height: '5rem',
                                }}
                              />
                            </div>
                            <div style={{ borderColor: '#589dd0' }}>
                              <p>
                                <span>
                                  성격 및 흥미 특징
                                  <br />
                                </span>
                                조직적 · 경제적 활동, 설득 · 지도적 능력,
                                모험적, 지배적, 의욕적, 수다스러움, 활동적,
                                외향적, 야심적, 자신감 등
                              </p>
                            </div>
                            <div style={{ borderColor: '#589dd0' }}>
                              <p>
                                <span>
                                  선호하는/싫어하는 직업적 환경
                                  <br />
                                </span>
                                조직의 목적과 경제적 이익을 얻기 위해 타인을
                                선도, 계획, 통제, 관리하는 일과 그 결과로 얻는
                                활동을 좋아하지만 관찰적, 상징적, 체계적
                                활동에는 흥미가 없음
                              </p>
                            </div>
                          </div>

                          <div className={styles['type-style']}>
                            <div>
                              <img
                                alt="tooltip"
                                src={Conventional}
                                style={{
                                  width: '5rem',
                                  height: '5rem',
                                }}
                              />
                            </div>
                            <div style={{ borderColor: '#75cb80' }}>
                              <p>
                                <span>
                                  성격 및 흥미 특징
                                  <br />
                                </span>
                                체계적 · 자료처리 활동, 사무 · 계산 능력,
                                동조적, 실용적, 순종적, 끈기 있음, 조심성,
                                정연함, 진지함, 자기 절제 등
                              </p>
                            </div>
                            <div style={{ borderColor: '#75cb80' }}>
                              <p>
                                <span>
                                  선호하는/싫어하는 직업적 환경
                                  <br />
                                </span>
                                정해진 원칙과 계획에 따라 자료들을 기록, 정리,
                                조직하는 일을 좋아하고, 체계적인 작업환경에서
                                사무적, 계산적 능력을 발휘하는 활동을 좋아함,
                                그러나 창의적, 자율적이며, 모험적, 비체계적인
                                활동은 매우 혼란을 느낌
                              </p>
                            </div>
                          </div>
                        </div>
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button
                    variant="light"
                    className="d-inline-flex align-items-center"
                  >
                    결과 해석 방법
                  </Button>
                </OverlayTrigger>
              </p> */}
              {/* <button className={styles['button-tab']}>
                <BsQuestionCircle
                  className={styles['tooltip-button-style']}
                  onClick={tooltipHandler}
                />
              </button>
              <div className={styles['tab-type']}>

              </div> */}

              <div className={`${styles.type} ${styles['part']}`}>
                <p className={styles.percentage}>(단위: 백분율)</p>
                {!isVisible
                  ? ''
                  : dataBar.map((dataItem, index) => {
                      return (
                        <div
                          key={`div bar-chart-${index}`}
                          className={
                            (styles['type-' + dataItem.subject],
                            styles['type-box'])
                          }
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                              key={`bar-chart-${index}`}
                              label={true}
                              data={[dataItem]}
                              margin={{
                                top: 35,
                                right: 0,
                                left: 0,
                                bottom: 0,
                              }}
                              barGap={50}
                            >
                              <YAxis hide={true} domain={[0, 100]} />
                              <XAxis
                                dataKey="subject"
                                tick={renderCustomBarAxisTick}
                              />
                              {/* <Customized
                component={(props) =>
                  renderCustomBarAxisTick(props, dataItem.subject)
                }
              /> */}
                              {/* <XAxis dataKey="subject" tick={false} /> */}
                              {/* <Tooltip /> */}
                              <Legend verticalAlign="bottom" iconSize={10} />
                              <Bar
                                dataKey="흥미"
                                fill="#8d91eb"
                                animationBegin={0}
                                animationDuration={1000}
                                label={{ position: 'bottom' }}
                              />
                              <Bar
                                dataKey="역량"
                                fill="#5c6bc0"
                                animationBegin={0}
                                animationDuration={1000}
                                label={{ position: 'bottom' }}
                              />
                              <Bar
                                dataKey="직업선호"
                                fill="#AF8BB7"
                                animationBegin={0}
                                animationDuration={1000}
                                label={{ position: 'bottom' }}
                              />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      );
                    })}
              </div>
            </div>
            <hr />
            {/* 진로발달 프로파일 */}
            <div className={styles['profile']}>
              <h3 className={styles.tit}>진로발달 프로파일</h3>
              <div
                className={`${styles['job-profile-wrap']} ${styles['part']}`}
              >
                {/* 자아이해 */}
                <div className={styles.understanding}>
                  <div className={styles['outer-img']}>
                    <div className={styles.img}>
                      <FcIdea style={{ width: '5rem', height: '5rem' }} />
                    </div>
                  </div>
                  <div className={styles.arrow}>
                    <AiFillCaretRight
                      style={{
                        color: '#d95d6b',
                        width: '3rem',
                        height: '3rem',
                      }}
                    />
                  </div>
                  <div className={styles['arrow-mobile']}>
                    <AiFillCaretDown
                      style={{
                        color: '#d95d6b',
                        width: '2rem',
                        height: '2rem',
                      }}
                    />
                  </div>
                  <div className={styles.explain}>
                    <h4>자아이해</h4>
                    <p>
                      T점수(백분위): {examResult.understandTotalT}(
                      {examResult.understandTotalPer}%)
                    </p>
                    <p>수준: {examResult.understandTotalLevel}</p>
                  </div>
                </div>

                {/* 직업 및 진로탐색 */}
                <div className={styles.exploration}>
                  <div className={styles['outer-img']}>
                    <div className={styles.img}>
                      <FcSearch style={{ width: '5rem', height: '5rem' }} />
                    </div>
                  </div>
                  <div className={styles.arrow}>
                    <AiFillCaretRight
                      style={{
                        color: '#a44361',
                        width: '3rem',
                        height: '3rem',
                      }}
                    />
                  </div>
                  <div className={styles['arrow-mobile']}>
                    <AiFillCaretDown
                      style={{
                        color: '#a44361',
                        width: '2rem',
                        height: '2rem',
                      }}
                    />
                  </div>
                  <div className={styles.explain}>
                    <h4>직업 및 진로탐색</h4>
                    <p>
                      T점수(백분위): {examResult.jobAndExplorTotalT}(
                      {examResult.jobAndExplorTotalPer}%)
                    </p>
                    <p>수준: {examResult.jobAndExplorTotalLevel}</p>
                  </div>
                </div>

                {/* 진로설계 준비 */}
                <div className={styles['job-planning']}>
                  <div className={styles['outer-img']}>
                    <div className={styles.img}>
                      <FcTodoList style={{ width: '5rem', height: '5rem' }} />
                    </div>
                  </div>
                  <div className={styles.arrow}>
                    <AiFillCaretRight
                      style={{
                        color: '#a75263',
                        width: '3rem',
                        height: '3rem',
                      }}
                    />
                  </div>
                  <div className={styles['arrow-mobile']}>
                    <AiFillCaretDown
                      style={{
                        color: '#a75263',
                        width: '2rem',
                        height: '2rem',
                      }}
                    />
                  </div>
                  <div className={styles.explain}>
                    <h4>진로설계 준비</h4>
                    <p>
                      T점수(백분위): {examResult.prepareCarrerDesignTotalT}(
                      {examResult.prepareCarrerDesignTotalPer}%)
                    </p>
                    <p>수준: {examResult.prepareCarrerDesignTotalLevel}</p>
                  </div>
                </div>

                {/* 종합 */}
                <div className={styles['all-score']}>
                  <div className={styles['outer-img']}>
                    <div className={styles.img}>
                      <FcSurvey style={{ width: '5rem', height: '5rem' }} />
                    </div>
                  </div>
                  <div className={styles.arrow}>
                    <AiFillCaretRight
                      style={{
                        color: '#832237',
                        width: '3rem',
                        height: '3rem',
                      }}
                    />
                  </div>
                  <div className={styles['arrow-mobile']}>
                    <AiFillCaretDown
                      style={{
                        color: '#832237',
                        width: '2rem',
                        height: '2rem',
                      }}
                    />
                  </div>
                  <div className={styles.explain}>
                    <h4>종합</h4>
                    <p>
                      T점수(백분위): {examResult.totalT}({examResult.totalPer}%)
                    </p>
                    <p>수준: {examResult.totalLevel}</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className={styles['detail-result']}>
              <h3 className={styles.tit}>
                세부영역별 결과 해석 및<br />
                진로지도 전략
              </h3>
              {/* 세부영역별 결과 해석 및 진로지도 전략 - desktop ver. */}
              <div
                className={`${styles['detail-result-desktop']} ${styles['part']}`}
              >
                <Slider {...settings}>
                  {/* 자아이해 */}
                  <div className={styles.understanding}>
                    <h3>
                      {' '}
                      <FcIdea
                        style={{
                          width: '2rem',
                          height: '2rem',
                          marginRight: '0.3rem',
                        }}
                      />
                      자아이해
                    </h3>
                    <div className={styles['understanding-kinds']}>
                      <div style={detailContainerOne}>
                        <h4>성취가능성 인식</h4>
                        <p>
                          <strong>T점수</strong>:{' '}
                          {examResult.achievementPossibilityT}
                        </p>
                        <p>
                          <strong>수준</strong>:{' '}
                          {examResult.achievementPossibilityLevel}
                        </p>
                        <p>
                          <strong>
                            <FcIdea />
                            해석
                          </strong>
                          : {examResult.achievementPossibilityContent}
                        </p>
                        <p>
                          <strong>
                            <FcRedo />
                            전략
                          </strong>
                          : {examResult.achievementPossibilityStrategy}
                        </p>
                      </div>
                      <div style={detailContainerTwo}>
                        <h4>자기특성 이해</h4>
                        <p>
                          <strong>T점수</strong>:{' '}
                          {examResult.understandPersonalityT}
                        </p>
                        <p>
                          <strong>수준</strong>:{' '}
                          {examResult.understandPersonalityLevel}
                        </p>
                        <p>
                          {' '}
                          <strong>
                            <FcIdea />
                            해석
                          </strong>
                          : {examResult.understandPersonalityContent}
                        </p>
                        <p>
                          {' '}
                          <strong>
                            <FcRedo />
                            전략
                          </strong>
                          : {examResult.understandPersonalityStrategy}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 직업 및 진로탐색 */}
                  <div className={styles.exploration}>
                    <h3>
                      {' '}
                      <FcSearch
                        style={{
                          width: '2rem',
                          height: '2rem',
                          marginRight: '0.3rem',
                        }}
                      />
                      직업 및 진로탐색
                    </h3>
                    <div className={styles['exploration-kinds']}>
                      <div style={detailContainerOne}>
                        <h4>직업호기심</h4>
                        <p>
                          <strong>T점수</strong>: {examResult.jobCuriosityT}
                        </p>
                        <p>
                          <strong>수준</strong>: {examResult.jobCuriosityLevel}
                        </p>
                        <p>
                          <strong>
                            <FcIdea />
                            해석
                          </strong>
                          : {examResult.jobCuriosityContent}
                        </p>
                        <p>
                          <strong>
                            <FcRedo />
                            전략
                          </strong>
                          : {examResult.jobCuriosityStrategy}
                        </p>
                      </div>
                      <div style={detailContainerTwo}>
                        <h4>정보탐색</h4>
                        <p>
                          <strong>T점수</strong>:{' '}
                          {examResult.exploringInformationT}
                        </p>
                        <p>
                          <strong>수준</strong>:{' '}
                          {examResult.exploringInformationLevel}
                        </p>
                        <p>
                          {' '}
                          <strong>
                            <FcIdea />
                            해석
                          </strong>
                          : {examResult.exploringInformationContent}
                        </p>
                        <p>
                          {' '}
                          <strong>
                            <FcRedo />
                            전략
                          </strong>
                          : {examResult.exploringInformationStrategy}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 진로설계 준비 */}
                  <div className={styles['job-planning']}>
                    <h3>
                      <FcTodoList
                        style={{
                          width: '2rem',
                          height: '2rem',
                          marginRight: '0.3rem',
                        }}
                      />
                      진로설계 준비
                    </h3>
                    <div className={styles['job-planning-kinds']}>
                      <div style={detailContainerOne}>
                        <h4>상호의존적 의사결정 성향</h4>
                        <p>
                          <strong>T점수</strong>:{' '}
                          {examResult.decisionMakingTendenciesT}
                        </p>
                        <p>
                          <strong>수준</strong>:{' '}
                          {examResult.decisionMakingTendenciesLevel}
                        </p>
                        <p>
                          <strong>
                            {' '}
                            <FcIdea />
                            해석
                          </strong>
                          : {examResult.decisionMakingTendenciesContent}
                        </p>
                        <p>
                          <strong>
                            <FcRedo />
                            전략
                          </strong>
                          : {examResult.decisionMakingTendenciesStrategy}
                        </p>
                      </div>
                      <div style={detailContainerTwo}>
                        <h4>자기결정성</h4>
                        <p>
                          <strong>T점수</strong>:{' '}
                          {examResult.selfDeterminationT}
                        </p>
                        <p>
                          <strong>수준</strong>:{' '}
                          {examResult.selfDeterminationLevel}
                        </p>
                        <p>
                          {' '}
                          <strong>
                            <FcIdea />
                            해석
                          </strong>
                          : {examResult.selfDeterminationContent}
                        </p>
                        <p>
                          {' '}
                          <strong>
                            {' '}
                            <FcRedo />
                            전략
                          </strong>
                          : {examResult.selfDeterminationStrategy}
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>

              <div
                className={`${styles['detail-result-mobile']} ${styles['part']}`}
              >
                {/* 자아이해 */}
                <div className={styles.understanding}>
                  <h3>
                    {' '}
                    <FcIdea
                      style={{
                        width: '2rem',
                        height: '2rem',
                        marginRight: '0.3rem',
                      }}
                    />
                    자아이해
                  </h3>
                  <div className={styles['understanding-kinds']}>
                    <Slider {...settings}>
                      <div className={styles['result-container']}>
                        <div style={detailContainerMobileOne}>
                          <h4>
                            성취가능성
                            <br />
                            인식
                          </h4>
                          <p>
                            <strong>T점수</strong>:{' '}
                            {examResult.achievementPossibilityT}
                          </p>
                          <p>
                            <strong>수준</strong>:{' '}
                            {examResult.achievementPossibilityLevel}
                          </p>
                          <p>
                            <strong>
                              <FcIdea />
                              해석
                            </strong>
                            : {examResult.achievementPossibilityContent}
                          </p>
                          <p>
                            <strong>
                              <FcRedo />
                              전략
                            </strong>
                            : {examResult.achievementPossibilityStrategy}
                          </p>
                        </div>
                      </div>
                      <div className={styles['result-container']}>
                        <div style={detailContainerMobileTwo}>
                          <h4>
                            자기특성
                            <br />
                            이해
                          </h4>
                          <p>
                            <strong>T점수</strong>:{' '}
                            {examResult.understandPersonalityT}
                          </p>
                          <p>
                            <strong>수준</strong>:{' '}
                            {examResult.understandPersonalityLevel}
                          </p>
                          <p>
                            {' '}
                            <strong>
                              <FcIdea />
                              해석
                            </strong>
                            : {examResult.understandPersonalityContent}
                          </p>
                          <p>
                            {' '}
                            <strong>
                              <FcRedo />
                              전략
                            </strong>
                            : {examResult.understandPersonalityStrategy}
                          </p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>

                {/* 직업 및 진로탐색 */}
                <div className={styles.exploration}>
                  <h3>
                    {' '}
                    <FcSearch
                      style={{
                        width: '2rem',
                        height: '2rem',
                        marginRight: '0.3rem',
                      }}
                    />
                    직업 및 진로탐색
                  </h3>
                  <div className={styles['exploration-kinds']}>
                    <Slider {...settings}>
                      <div className={styles['result-container']}>
                        <div style={detailContainerMobileOne}>
                          <h4>직업호기심</h4>
                          <p>
                            <strong>T점수</strong>: {examResult.jobCuriosityT}
                          </p>
                          <p>
                            <strong>수준</strong>:{' '}
                            {examResult.jobCuriosityLevel}
                          </p>
                          <p>
                            <strong>
                              <FcIdea />
                              해석
                            </strong>
                            : {examResult.jobCuriosityContent}
                          </p>
                          <p>
                            <strong>
                              <FcRedo />
                              전략
                            </strong>
                            : {examResult.jobCuriosityStrategy}
                          </p>
                        </div>
                      </div>
                      <div className={styles['result-container']}>
                        <div style={detailContainerMobileTwo}>
                          <h4>정보탐색</h4>
                          <p>
                            <strong>T점수</strong>:{' '}
                            {examResult.exploringInformationT}
                          </p>
                          <p>
                            <strong>수준</strong>:{' '}
                            {examResult.exploringInformationLevel}
                          </p>
                          <p>
                            {' '}
                            <strong>
                              <FcIdea />
                              해석
                            </strong>
                            : {examResult.exploringInformationContent}
                          </p>
                          <p>
                            {' '}
                            <strong>
                              <FcRedo />
                              전략
                            </strong>
                            : {examResult.exploringInformationStrategy}
                          </p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>

                {/* 진로설계 준비 */}
                <div className={styles['job-planning']}>
                  <h3>
                    <FcTodoList
                      style={{
                        width: '2rem',
                        height: '2rem',
                        marginRight: '0.3rem',
                      }}
                    />
                    진로설계 준비
                  </h3>
                  <div className={styles['job-planning-kinds']}>
                    <Slider {...settings}>
                      <div className={styles['result-container']}>
                        <div style={detailContainerMobileOne}>
                          <h4>
                            상호의존적
                            <br />
                            의사결정 성향
                          </h4>
                          <p>
                            <strong>T점수</strong>:{' '}
                            {examResult.decisionMakingTendenciesT}
                          </p>
                          <p>
                            <strong>수준</strong>:{' '}
                            {examResult.decisionMakingTendenciesLevel}
                          </p>
                          <p>
                            <strong>
                              {' '}
                              <FcIdea />
                              해석
                            </strong>
                            : {examResult.decisionMakingTendenciesContent}
                          </p>
                          <p>
                            <strong>
                              <FcRedo />
                              전략
                            </strong>
                            : {examResult.decisionMakingTendenciesStrategy}
                          </p>
                        </div>
                      </div>
                      <div className={styles['result-container']}>
                        <div style={detailContainerMobileTwo}>
                          <h4>자기결정성</h4>
                          <p>
                            <strong>T점수</strong>:{' '}
                            {examResult.selfDeterminationT}
                          </p>
                          <p>
                            <strong>수준</strong>:{' '}
                            {examResult.selfDeterminationLevel}
                          </p>
                          <p>
                            {' '}
                            <strong>
                              <FcIdea />
                              해석
                            </strong>
                            : {examResult.selfDeterminationContent}
                          </p>
                          <p>
                            {' '}
                            <strong>
                              {' '}
                              <FcRedo />
                              전략
                            </strong>
                            : {examResult.selfDeterminationStrategy}
                          </p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* <div className={styles['character-recommend']}>
              <div className={styles['job-character']}>
                <div
                  className={styles['left-box']}
                  style={{ borderColor: `${resultBg()}` }}
                >
                  {clientType()}
                  <h3>직업적 성격특성</h3>
                </div>
                <div
                  className={styles['right-box']}
                  style={{ borderColor: `${resultBg()}` }}
                >
                  <p>{examResult.codeContent}</p>
                </div>
              </div>
              <div className={styles['job-recommend']}>
                <div className={styles['left-box']}>
                  <FcManager
                    style={{
                      minWidth: '10rem',
                      height: '10rem',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      opacity: '0.4',
                      transform: 'translate(-50%,-50%)',
                    }}
                  />
                  <h3>추천 직업</h3>
                </div>
                <div className={styles['right-box']}>
                  <p> {examResult.codeJob}</p>
                </div>
              </div>
            </div> */}

            <div
              className={`${styles['character-recommend']} ${styles['part']}`}
            >
              <h3 className={styles.tit}>직업적 성격특성</h3>
              <div className={styles['job-character']}>
                <p>{examResult.codeContent}</p>
              </div>
              <h3 className={styles.tit}>추천 직업</h3>
              <div className={styles['job-recommend']}>
                <p> {examResult.codeJob}</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <Modal
        show={modalAlert.show}
        onHide={handleModalAlertClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalAlert.title}</Modal.Title>
        </Modal.Header>
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
              <Button onClick={handleModalAlertClose} variant="outline-danger">
                닫기
              </Button>
            </div>
          </Alert>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LotteResult;
