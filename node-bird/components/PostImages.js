import PropoTypes from "prop-types";

const PostImages = ({ images }) => {
  return <div>구현중...</div>;
};

PostImages.propType = {
  images: PropoTypes.arrayOf(PropoTypes.object),
};

export default PostImages;
