import { Sidebar } from "../../components";
import { SizeTable } from "../../containers";

const FilterSidebar = ({
	categories,
	subCategories,
	filterCategory,
	filterSubCategory,
	filterSale,
	filterPrice,
	handleFilterCategoryChange,
	handleFilterSubCategoryChange,
	handleFilterSaleChange,
	handleFilterPriceChange,
	handleFilterSizeChange,
}) => {
	return (
		<Sidebar>
			<Sidebar.Dropdown>
				<Sidebar.DropdownHeader>CATEGORIES</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu hoverbox>
					{categories?.map((category, index) => (
						<Sidebar.Text
							key={index}
							paddingLeft="30px"
							active={filterCategory.includes(category.name)}
							onClick={() =>
								handleFilterCategoryChange(category.name)
							}
						>
							{category.name}
						</Sidebar.Text>
					))}
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>

			<Sidebar.Dropdown>
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
								handleFilterSubCategoryChange(subCategory.name)
							}
						>
							{subCategory.name}
						</Sidebar.Text>
					))}
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>

			<Sidebar.Dropdown>
				<Sidebar.DropdownHeader>ON SALE</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu hoverbox>
					<Sidebar.Text
						paddingLeft="30px"
						active={filterSale}
						onClick={handleFilterSaleChange}
					>
						Sale
					</Sidebar.Text>
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>

			<Sidebar.Dropdown>
				<Sidebar.DropdownHeader>PRICE</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu hoverbox>
					<Sidebar.Text
						paddingLeft="30px"
						active={filterPrice.includes("[0, 200]")}
						onClick={() => handleFilterPriceChange("[0, 200]")}
					>{`< $200`}</Sidebar.Text>

					<Sidebar.Text
						paddingLeft="30px"
						active={filterPrice.includes("[200, 299]")}
						onClick={() => handleFilterPriceChange("[200, 299]")}
					>
						$200 - $299
					</Sidebar.Text>

					<Sidebar.Text
						paddingLeft="30px"
						active={filterPrice.includes("[300, 399]")}
						onClick={() => handleFilterPriceChange("[300, 399]")}
					>
						$300 - $399
					</Sidebar.Text>

					<Sidebar.Text
						paddingLeft="30px"
						active={filterPrice.includes("[400, 499]")}
						onClick={() => handleFilterPriceChange("[400, 499]")}
					>
						$400 - $499
					</Sidebar.Text>

					<Sidebar.Text
						paddingLeft="30px"
						active={filterPrice.includes("[500]")}
						onClick={() => handleFilterPriceChange("[500]")}
					>{`> $500`}</Sidebar.Text>
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>

			<Sidebar.Dropdown>
				<Sidebar.DropdownHeader>SIZES</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu>
					<SizeTable
						handleFilterSizeChange={handleFilterSizeChange}
					/>
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>
		</Sidebar>
	);
};

export default FilterSidebar;
