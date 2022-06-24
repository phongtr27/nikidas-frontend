import { Modal, Sidebar } from "../../components";
import { SizeTable } from "../../containers";

const FilterModal = ({
	showFilterModal,
	setShowFilterModal,
	categories,
	subCategories,
	filterCategory,
	filterSubCategory,
	filterSale,
	filterPrice,
	filterSize,
	handleFilterCategoryChange,
	handleFilterSubCategoryChange,
	handleFilterSaleChange,
	handleFilterPriceChange,
	handleFilterSizeChange,
}) => {
	return (
		<Modal.SideModal
			showModal={showFilterModal}
			setShowModal={setShowFilterModal}
		>
			<Sidebar.Dropdown defaultToggleShow={true}>
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
								handleFilterSubCategoryChange(subCategory.name)
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
						onClick={handleFilterSaleChange}
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
						onClick={() => handleFilterPriceChange("[0, 200]")}
					>
						{`< $200`}
						<Sidebar.Icon className="fas fa-times"></Sidebar.Icon>
					</Sidebar.Text>

					<Sidebar.Text
						paddingLeft="30px"
						active={filterPrice.includes("[200, 299]")}
						onClick={() => handleFilterPriceChange("[200, 299]")}
					>
						$200 - $299
						<Sidebar.Icon className="fas fa-times"></Sidebar.Icon>
					</Sidebar.Text>

					<Sidebar.Text
						paddingLeft="30px"
						active={filterPrice.includes("[300, 399]")}
						onClick={() => handleFilterPriceChange("[300, 399]")}
					>
						$300 - $399
						<Sidebar.Icon className="fas fa-times"></Sidebar.Icon>
					</Sidebar.Text>

					<Sidebar.Text
						paddingLeft="30px"
						active={filterPrice.includes("[400, 499]")}
						onClick={() => handleFilterPriceChange("[400, 499]")}
					>
						$400 - $499
						<Sidebar.Icon className="fas fa-times"></Sidebar.Icon>
					</Sidebar.Text>

					<Sidebar.Text
						paddingLeft="30px"
						active={filterPrice.includes("[500]")}
						onClick={() => handleFilterPriceChange("[500]")}
					>
						{`> $500`}
						<Sidebar.Icon className="fas fa-times"></Sidebar.Icon>
					</Sidebar.Text>
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>

			<Sidebar.Dropdown defaultToggleShow={true}>
				<Sidebar.DropdownHeader>SIZES</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu style={{ paddingBottom: "20px" }}>
					<SizeTable
						filterSize={filterSize}
						handleFilterSizeChange={handleFilterSizeChange}
					/>
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>
		</Modal.SideModal>
	);
};

export default FilterModal;
