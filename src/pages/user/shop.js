import { useState } from "react";
import { ProductContainer, FilterSidebar } from "../../containers";
import useFetch from "../../hooks/useFetch";
import { filterProduct } from "../../helpers/filterProduct";
import { apiUrl } from "../../constants/routes";
import { Fade } from "react-awesome-reveal";

const Shop = () => {
	let { data: products } = useFetch(`${apiUrl}/api/product`);
	const { data: categories } = useFetch(`${apiUrl}/api/category`);
	const { data: subCategories } = useFetch(`${apiUrl}/api/sub-category`);

	const [filterCategory, setFilterCategory] = useState([]);
	const [filterSubCategory, setFilterSubCategory] = useState([]);
	const [filterSale, setFilterSale] = useState(false);

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

	if (filterCategory.length > 0) {
		products = filterProduct(products, filterCategory, "category");
	}

	if (filterSubCategory.length > 0) {
		products = filterProduct(products, filterSubCategory, "subCategory");
	}

	if (filterSale) {
		products = products.filter((item) => item.discount > 0);
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
				/>
				<ProductContainer products={products} />
			</div>
		</Fade>
	);
};

export default Shop;
