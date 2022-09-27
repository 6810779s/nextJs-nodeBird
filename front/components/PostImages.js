import React, { useCallback, useState, useRef } from "react";
import PropTypes from "prop-types";
import AddIcon from "@material-ui/icons/Add";
import ImagesZoom from "./imagesZoom";
import styles from "../styles/PostImages.module.scss";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
const PostImages = ({ images }) => {
  const [showImageszoom, setShowImageszoom] = useState(false);
  const [slideNum, setSlideNum] = useState(0);
  const imgContainer = useRef(null);
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  const onZoom = useCallback(() => {
    setShowImageszoom(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImageszoom(false);
  }, []);

  const moveSlide = (num) => {
    imgContainer.current.style.left = -num * 470 + `px`;
  };

  const prevBtnClick = useCallback(() => {
    if (imgContainer.current) {
      moveSlide(slideNum - 1);
      setSlideNum(slideNum - 1);
    }
  }, [slideNum]);

  const nextBtnClick = useCallback(() => {
    if (imgContainer.current) {
      moveSlide(slideNum + 1);
      setSlideNum(slideNum + 1);
    }
  }, [slideNum]);
  const imagesReturn = useCallback(() => {
    const containerWidth = 470 * images.length;

    if (imgContainer.current && prevBtn.current && nextBtn.current) {
      imgContainer.current.style.width = `${containerWidth}px`;

      if (slideNum == 0) {
        prevBtn.current.style.display = "none";
        nextBtn.current.style.display = "block";
      } else if (slideNum == images.length - 1) {
        nextBtn.current.style.display = "none";
        prevBtn.current.style.display = "block";
      } else {
        prevBtn.current.style.display = "block";
        nextBtn.current.style.display = "block";
      }
    }
    return (
      <div className={styles.imgContainer} ref={imgContainer}>
        {images.map((v) => (
          <img
            role="presentation"
            src={`http://localhost:3065/${v.src}`}
            alt={v.src}
            onClick={onZoom}
          />
        ))}
      </div>
    );
  }, [imgContainer && prevBtn && nextBtn, slideNum]);

  if (images.length === 1) {
    return (
      <div className={styles.container}>
        <img
          role="presentation"
          src={`${process.env.NEXT_PUBLIC_API_URL}/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
        />
        {showImageszoom && <ImagesZoom images={images} onClose={onClose} />}
      </div>
    );
  }

  return (
    <div className={styles.slideContainer}>
      <NavigateBeforeIcon
        className={styles.backIcon}
        ref={prevBtn}
        onClick={prevBtnClick}
      />
      <NavigateNextIcon
        className={styles.forwardIcon}
        ref={nextBtn}
        onClick={nextBtnClick}
      />
      {imagesReturn()}
    </div>
    // <>
    //   <div style={{ display: "flex", alignItems: "center" }}>
    //     <img
    //       role="presentation"
    //       width="50%"
    //       src={`http://localhost:3065/${images[0].src}`}
    //       alt={images[0].src}
    //       onClick={onZoom}
    //     />
    //     <div
    //       role="presentation"
    //       style={{
    //         width: "50%",
    //         textAlign: "center",
    //       }}
    //       onClick={onZoom}
    //     >
    //       <AddIcon style={{ fontSize: "50px", cursor: "pointer" }} />
    //       <br />
    //       {images.length - 1} 개의 사진 더보기
    //     </div>
    //   </div>
    //   {showImageszoom && <ImagesZoom images={images} onClose={onClose} />}
    // </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
