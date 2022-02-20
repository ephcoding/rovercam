import React from "react";

const PhotosListItem = ({ photo }) => {
	const { imgSrc } = photo;
	return (
		<li className='photos_li'>
			<img src={imgSrc} />
		</li>
	);
};

export default PhotosListItem;
