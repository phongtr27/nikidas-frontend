import { useState, useEffect } from "react";
import { ProductContainer, FilterSidebar, FilterModal } from "../../containers";
import useFetch from "../../hooks/useFetch";
import { filterProduct } from "../../helpers/filterProduct";
import { apiUrl, ERROR } from "../../constants/routes";
import { Fade } from "react-awesome-reveal";
import { useNavigate, useSearchParams } from "react-router-dom";

const Shop = () => {
	const navigate = useNavigate();

	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", () => setWidth(window.innerWidth));
		return () =>
			window.removeEventListener("resize", () =>
				setWidth(window.innerWidth)
			);
	}, [width]);

	const [showFilterModal, setShowFilterModal] = useState(false);

	const [searchParams] = useSearchParams();

	const { data: products, error: err1 } = useFetch(`${apiUrl}/api/product`);

	const { data: categories, error: err2 } = useFetch(
		`${apiUrl}/api/category`
	);

	const { data: subCategories, error: err3 } = useFetch(
		`${apiUrl}/api/sub-category`
	);

	const [productLimit, setProductLimit] = useState(9);

	const [filterCategory, setFilterCategory] = useState(
		searchParams.get("category") ? [searchParams.get("category")] : []
	);

	const [filterSubCategory, setFilterSubCategory] = useState([]);

	const [filterSale, setFilterSale] = useState(
		searchParams.get("sale") ? true : false
	);

	const [filterPrice, setFilterPrice] = useState([]);

	const [filterSize, setFilterSize] = useState([]);

	const handleLoadMore = () => {
		setProductLimit(productLimit + 5);
	};

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

	const filteredProducts = filterProduct(
		products,
		filterCategory,
		filterSubCategory,
		filterSale,
		filterPrice,
		filterSize
	);

	if (err1 || err2 || err3) {
		return navigate(`${ERROR}`);
	}

	return (
		<Fade>
			<div className="flex">
				<FilterSidebar
					categories={categories}
					subCategories={subCategories}
					filterCategory={filterCategory}
					filterSubCategory={filterSubCategory}
					filterSale={filterSale}
					filterPrice={filterPrice}
					filterSize={filterSize}
					handleFilterCategoryChange={handleFilterCategoryChange}
					handleFilterSubCategoryChange={
						handleFilterSubCategoryChange
					}
					handleFilterSaleChange={handleFilterSaleChange}
					handleFilterPriceChange={handleFilterPriceChange}
					handleFilterSizeChange={handleFilterSizeChange}
				/>

				<ProductContainer
					products={filteredProducts}
					productLimit={productLimit}
					handleLoadMore={handleLoadMore}
					setShowFilterModal={setShowFilterModal}
					width={width}
				/>

				{width <= 768 && (
					<FilterModal
						showFilterModal={showFilterModal}
						setShowFilterModal={setShowFilterModal}
						categories={categories}
						subCategories={subCategories}
						filterCategory={filterCategory}
						filterSubCategory={filterSubCategory}
						filterSale={filterSale}
						filterPrice={filterPrice}
						filterSize={filterSize}
						handleFilterCategoryChange={handleFilterCategoryChange}
						handleFilterSubCategoryChange={
							handleFilterSubCategoryChange
						}
						handleFilterSaleChange={handleFilterSaleChange}
						handleFilterPriceChange={handleFilterPriceChange}
						handleFilterSizeChange={handleFilterSizeChange}
					/>
				)}
			</div>
		</Fade>
	);
};

export default Shop;
