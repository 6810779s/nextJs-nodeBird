import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled, { createGlobalStyle } from 'styled-components';
import { Global } from './styles';
const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    initiaSlide: 0,
    afterChange: (slide) => setCurrentSlide(slide),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 5000,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <Global />
      <header
        style={{
          position: 'relative',
          background: 'white',
          height: '44px',
          padding: '0',
          textAlign: 'center',
        }}
      >
        <h1>상세 이미지</h1>
        <button
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            padding: '15px',
            lineHeight: '14px',
            cursor: 'pointer',
          }}
          onClick={onClose}
        >
          X
        </button>
      </header>
      <div>
        <div style={{ height: '700px', position: 'relative' }}>
          <Slider
            style={{ height: '700px', background: '#090909' }}
            {...settings}
          >
            {images.map((image) => (
              <div style={{ padding: '32px', textAlign: 'center' }}>
                <img
                  style={{ margin: '0 auto', maxHeight: '700px' }}
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </Slider>

          <div
            style={{
              position: 'absolute',
              padding: '7px 30px',
              textAlign: 'center',
              bottom: 0,
              zIndex: 30000,
              borderRadius: '20px',
              background: '#313131',
              color: 'white',
            }}
          >
            {currentSlide + 1}/{images.length}
          </div>
        </div>
      </div>
    </div>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
