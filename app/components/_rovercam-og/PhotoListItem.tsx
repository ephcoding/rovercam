import React from "react"

const PhotoListItem = ({ photo }) => {
  const { img_src } = photo;
  return (
    <li className="photos_li">
      <img src={img_src} />
    </li>
  );
};

export default PhotoListItem;
