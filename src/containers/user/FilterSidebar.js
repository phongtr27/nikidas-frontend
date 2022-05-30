import { Sidebar } from "../../components";

const FilterSidebar = ({
	categories,
	subCategories,
	handleFilterCategoryChange,
	handleFilterSubCategoryChange,
	handleFilterSaleChange,
}) => {
	return (
		<Sidebar>
			<Sidebar.Dropdown>
				<Sidebar.DropdownHeader hovercolor="#f6aa8d">
					CATEGORIES
				</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu hovercolor="#f6aa8d">
					{categories?.map((category, index) => (
						<Sidebar.Text
							key={index}
							paddingLeft="30px"
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
				<Sidebar.DropdownHeader hovercolor="#f6aa8d">
					SUB-CATEGORIES
				</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu hovercolor="#f6aa8d">
					{subCategories?.map((subCategory, index) => (
						<Sidebar.Text
							key={index}
							paddingLeft="30px"
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
				<Sidebar.DropdownHeader hovercolor="#f6aa8d">
					ON SALE
				</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu hovercolor="#f6aa8d">
					<Sidebar.Text
						paddingLeft="30px"
						onClick={handleFilterSaleChange}
					>
						Sale
					</Sidebar.Text>
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>

			<Sidebar.Dropdown>
				<Sidebar.DropdownHeader hovercolor="#f6aa8d">
					PRICE
				</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu hovercolor="#f6aa8d">
					<Sidebar.Text paddingLeft="30px">{`< $200`}</Sidebar.Text>
					<Sidebar.Text paddingLeft="30px">$200 - $299</Sidebar.Text>
					<Sidebar.Text paddingLeft="30px">$300 - $399</Sidebar.Text>
					<Sidebar.Text paddingLeft="30px">$400 - $499</Sidebar.Text>
					<Sidebar.Text paddingLeft="30px">{`> $500`}</Sidebar.Text>
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>

			<Sidebar.Dropdown>
				<Sidebar.DropdownHeader hovercolor="#f6aa8d">
					SIZES
				</Sidebar.DropdownHeader>
			</Sidebar.Dropdown>
		</Sidebar>
	);
};

export default FilterSidebar;
