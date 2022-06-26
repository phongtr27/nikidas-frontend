import { Sidebar } from "../../components";
import { SizeTable } from "../../containers";

const FilterSidebar = ({
	categories,
	subCategories,
	filterCategory,
	filterSubCategory,
	filterSale,
	filterPrice,
	filterSize,
	onFilterCategoryChange,
	onFilterSubCategoryChange,
	onFilterSaleChange,
	onFilterPriceChange,
	onFilterSizeChange,
}) => {
	return (
		<Sidebar>
			<Sidebar.Dropdown defaultToggleShow={true}>
				<Sidebar.DropdownHeader>CATEGORIES</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu hoverbox>
					{categories?.map((category, index) => (
						<Sidebar.Text
							key={index}
							paddingLeft="30px"
							active={filterCategory.includes(category.name)}
							onClick={() =>
								onFilterCategoryChange(category.name)
							}
						>
							{category.name}
							<Sidebar.Icon className="fas fa-times"></Sidebar.Icon>
						</Sidebar.Text>
					))}
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>

			<Sidebar.Dropdown defaultToggleShow={true}>
				<Sidebar.DropdownHeader>SUB-CATEGORIES</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu hoverbox>
					{subCategories?.map((subCategory, index) => (
						<Sidebar.Text
							key={index}
							paddingLeft="30px"
							active={filterSubCategory.includes(
								subCategory.name
							)}
							onClick={() =>
								onFilterSubCategoryChange(subCategory.name)
							}
						>
							{subCategory.name}
							<Sidebar.Icon className="fas fa-times"></Sidebar.Icon>
						</Sidebar.Text>
					))}
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>

			<Sidebar.Dropdown defaultToggleShow={true}>
				<Sidebar.DropdownHeader>ON SALE</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu hoverbox>
					<Sidebar.Text
						paddingLeft="30px"
						active={filterSale}
						onClick={onFilterSaleChange}
					>
						Sale
						<Sidebar.Icon className="fas fa-times"></Sidebar.Icon>
					</Sidebar.Text>
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>

			<Sidebar.Dropdown defaultToggleShow={true}>
				<Sidebar.DropdownHeader>PRICE</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu hoverbox>
					<Sidebar.Text
						paddingLeft="30px"
						active={filterPrice.includes("[0, 200]")}
						onClick={() => onFilterPriceChange("[0, 200]")}
					>
						{`< $200`}
						<Sidebar.Icon className="fas fa-times"></Sidebar.Icon>
					</Sidebar.Text>

					<Sidebar.Text
						paddingLeft="30px"
						active={filterPrice.includes("[200, 299]")}
						onClick={() => onFilterPriceChange("[200, 299]")}
					>
						$200 - $299
						<Sidebar.Icon className="fas fa-times"></Sidebar.Icon>
					</Sidebar.Text>

					<Sidebar.Text
						paddingLeft="30px"
						active={filterPrice.includes("[300, 399]")}
						onClick={() => onFilterPriceChange("[300, 399]")}
					>
						$300 - $399
						<Sidebar.Icon className="fas fa-times"></Sidebar.Icon>
					</Sidebar.Text>

					<Sidebar.Text
						paddingLeft="30px"
						active={filterPrice.includes("[400, 499]")}
						onClick={() => onFilterPriceChange("[400, 499]")}
					>
						$400 - $499
						<Sidebar.Icon className="fas fa-times"></Sidebar.Icon>
					</Sidebar.Text>

					<Sidebar.Text
						paddingLeft="30px"
						active={filterPrice.includes("[500]")}
						onClick={() => onFilterPriceChange("[500]")}
					>
						{`> $500`}
						<Sidebar.Icon className="fas fa-times"></Sidebar.Icon>
					</Sidebar.Text>
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>

			<Sidebar.Dropdown defaultToggleShow={true}>
				<Sidebar.DropdownHeader>SIZES</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu>
					<SizeTable
						filterSize={filterSize}
						onFilterSizeChange={onFilterSizeChange}
					/>
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>
		</Sidebar>
	);
};

export default FilterSidebar;
