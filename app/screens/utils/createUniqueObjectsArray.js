export const createUniqueObjectsArray = (
	objectArray,
	rootProp,
	filterValueProp
) => {
	const uniqueKeyArray = [];
	const uniqueObjectArray = [];
	const rawObjectArray = objectArray.map(object => object[rootProp]);
	// objectArray.forEach(object => console.log(object[rootProp]));

	rawObjectArray.forEach(valObject => {
		if (!uniqueKeyArray.includes(valObject[filterValueProp])) {
			uniqueKeyArray.push(valObject[filterValueProp]);
			uniqueObjectArray.push(valObject);
		}
	});

	return uniqueObjectArray;

	// console.log(rootProp, filterValueProp);
};
