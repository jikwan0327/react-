import PropTypes from "prop-types";
import { useState } from "react";
import Slick from "react-slick";
import * as S from "./style";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <S.Overlay>
      <S.Global />
      <S.Header>
        <h1>상세 이미지</h1>
        <S.CloseBtn onClick={onClose}>X</S.CloseBtn>
      </S.Header>
      <div>
        <S.SlickWrapper>
          <Slick
            initialSlide={1}
            beforeChange={(slide) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((v) => (
              <S.ImgWrapper key={v.src}>
                <img src={v.src} alt={v.src} />
              </S.ImgWrapper>
            ))}
          </Slick>
          <S.Indicater>
            <div>
              {currentSlide + 1} /{images.length}
            </div>
          </S.Indicater>
        </S.SlickWrapper>
      </div>
    </S.Overlay>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
