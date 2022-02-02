import React from "react"

const PhotoListItem = ({ photo }) => {
  const { imgSrc } = photo
  return (
    <li className="photos_li">
      <img src={imgSrc} />
    </li>
  )
}

export default PhotoListItem
