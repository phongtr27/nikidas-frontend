export const filterByField = (data, arr, field) => {
	let filterSet = new Set(arr);
	let filteredData = data?.filter((item) => filterSet.has(item[field]));
	return filteredData;
};

export const filterByPrice = (data, arr) => {
	arr = arr.map((i) => JSON.parse(i));

	let filterData = [];

	for (let i = 0; i < arr.length; i++) {
		let tempData = [];
		tempData = data?.filter((item) => {
			if (arr[i].length === 1) {
				return item.price >= arr[i][0];
			}

			return item.price >= arr[i][0] && item.price < arr[i][1];
		});

		filterData = filterData.concat(tempData);
	}

	return filterData;
};

export const filterBySize = (data, arr) => {
	// console.log(arr);

	data?.forEach((item) => {
		item.sizes = [];
		item.options.forEach((option) => {
			option.quantityPerSize.forEach((i) => item.sizes.push(i.size));
		});
	});

	let filteredData = data?.filter((item) =>
		item.sizes.some((value) => arr.includes(value))
	);

	// console.log(filteredData);
	return filteredData;
};
