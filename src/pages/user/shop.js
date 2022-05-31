import { useState } from "react";
import { ProductContainer, FilterSidebar } from "../../containers";
import useFetch from "../../hooks/useFetch";
import {
	filterByField,
	filterByPrice,
	filterBySize,
} from "../../helpers/filterProduct";
import { apiUrl } from "../../constants/routes";
import { Fade } from "react-awesome-reveal";

const Shop = () => {
	let { data: products } = useFetch(`${apiUrl}/api/product`);
	const { data: categories } = useFetch(`${apiUrl}/api/category`);
	const { data: subCategories } = useFetch(`${apiUrl}/api/sub-category`);

	const [filterCategory, setFilterCategory] = useState([]);
	const [filterSubCategory, setFilterSubCategory] = useState([]);
	const [filterSale, setFilterSale] = useState(false);
	const [filterPrice, setFilterPrice] = useState([]);
	const [filterSize, setFilterSize] = useState([]);

	const handleFilterCategoryChange = (item) => {
		const newFilterCategory = [...filterCategory];

		if (newFilterCategory.includes(item)) {
			const index = newFilterCategory.indexOf(item);
			newFilterCategory.splice(index, 1);
		} else {
			newFilterCategory.push(item);
		}

		setFilterCategory(newFilterCategory);
	};

	const handleFilterSubCategoryChange = (item) => {
		const newFilterSubCategory = [...filterSubCategory];
		if (newFilterSubCategory.includes(item)) {
			const index = newFilterSubCategory.indexOf(item);
			newFilterSubCategory.splice(index, 1);
		} else {
			newFilterSubCategory.push(item);
		}
		setFilterSubCategory(newFilterSubCategory);
	};

	const handleFilterSaleChange = () => {
		setFilterSale(!filterSale);
	};

	const handleFilterPriceChange = (item) => {
		const newFilterPrice = [...filterPrice];
		if (newFilterPrice.includes(item)) {
			const index = newFilterPrice.indexOf(item);
			newFilterPrice.splice(index, 1);
		} else {
			newFilterPrice.push(item);
		}
		setFilterPrice(newFilterPrice);
	};

	const handleFilterSizeChange = (item) => {
		const newFilterSize = [...filterSize];
		if (newFilterSize.includes(item)) {
			const index = newFilterSize.indexOf(item);
			newFilterSize.splice(index, 1);
		} else {
			newFilterSize.push(item);
		}
		setFilterSize(newFilterSize);
	};

	if (filterCategory.length > 0) {
		products = filterByField(products, filterCategory, "category");
	}

	if (filterSubCategory.length > 0) {
		products = filterByField(products, filterSubCategory, "subCategory");
	}

	if (filterSale) {
		products = products.filter((item) => item.discount > 0);
	}

	if (filterPrice.length > 0) {
		products = filterByPrice(products, filterPrice);
	}

	if (filterSize.length > 0) {
		products = filterBySize(products, filterSize);
	}

	return (
		<Fade triggerOnce>
			<div className="flex">
				<FilterSidebar
					categories={categories}
					subCategories={subCategories}
					handleFilterCategoryChange={handleFilterCategoryChange}
					handleFilterSubCategoryChange={
						handleFilterSubCategoryChange
					}
					handleFilterSaleChange={handleFilterSaleChange}
					handleFilterPriceChange={handleFilterPriceChange}
					handleFilterSizeChange={handleFilterSizeChange}
				/>

				<ProductContainer products={products} />
			</div>
		</Fade>
	);
};

export default Shop;
