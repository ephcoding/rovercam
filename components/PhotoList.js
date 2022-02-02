import React from "react"
import PhotoListItem from "./PhotoListItem"

const PhotoList = ({ photos }) => {
  return (
    <ul className="photos_ul">
      {photos.map((photo) => (
        <PhotoListItem photo={photo} key={photo.id} />
      ))}
    </ul>
  )
}

export default PhotoList
