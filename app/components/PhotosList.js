import React from "react";
import PhotosListItem from "./PhotosListItem";

const PhotosList = ({ photos }) => {
	return (
		<ul className='photos_ul'>
			{photos.map(photo => (
				<PhotosListItem photo={photo} key={photo.id} />
			))}
		</ul>
	);
};

export default PhotosList;
