export const filterProduct = (data, arr, field) => {
	let filterSet = new Set(arr);
	let filteredData = data?.filter((item) => filterSet.has(item[field]));
	return filteredData;
};
