import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import AddIcon from "@material-ui/icons/Add";
import ImagesZoom from "./imagesZoom";

const PostImages = ({ images }) => {
  const [showImageszoom, setShowImageszoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImageszoom(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImageszoom(false);
  });
  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={`http://localhost:3065/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
        />
        {showImageszoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  } else if (images.length === 2) {
    return (
      <>
        {" "}
        <img
          role="presentation"
          width="50%"
          src={`http://localhost:3065/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          width="50%"
          src={`http://localhost:3065/${images[1].src}`}
          alt={images[1].src}
          onClick={onZoom}
        />
        {showImageszoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          role="presentation"
          width="50%"
          src={`http://localhost:3065/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
        />
        <div
          role="presentation"
          style={{
            width: "50%",
            textAlign: "center",
          }}
          onClick={onZoom}
        >
          <AddIcon style={{ fontSize: "50px", cursor: "pointer" }} />
          <br />
          {images.length - 1} 개의 사진 더보기
        </div>
      </div>
      {showImageszoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
