export const createUniqueObjectsArray = (
	objectArray,
	rootProp,
	filterValueProp
) => {
	const uniqueKeyArray = [];
	const uniqueObjectArray = [];
	// returns camera object[]
	const rawObjectArray = objectArray.map(object => object[rootProp]);

	rawObjectArray.forEach(object => {
		if (!uniqueKeyArray.includes(object[filterValueProp])) {
			uniqueKeyArray.push(object[filterValueProp]);
			uniqueObjectArray.push(object);
		}
	});

	return uniqueObjectArray;
};
