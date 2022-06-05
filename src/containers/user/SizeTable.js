import { Table } from "../../components";

const SizeTable = ({ filterSize, handleFilterSizeChange }) => {
	return (
		<div style={{ marginTop: "16px" }}>
			<Table.Base>
				<Table.Body>
					<Table.Row>
						<Table.Data
							onClick={() => handleFilterSizeChange("S")}
							hoverable
							active={filterSize.includes("S")}
						>
							S
						</Table.Data>

						<Table.Data
							onClick={() => handleFilterSizeChange("M")}
							hoverable
							active={filterSize.includes("M")}
						>
							M
						</Table.Data>

						<Table.Data
							onClick={() => handleFilterSizeChange("L")}
							hoverable
							active={filterSize.includes("L")}
						>
							L
						</Table.Data>

						<Table.Data
							onClick={() => handleFilterSizeChange("XL")}
							hoverable
							active={filterSize.includes("XL")}
						>
							XL
						</Table.Data>
					</Table.Row>

					<Table.Row>
						<Table.Data
							onClick={() => handleFilterSizeChange("35")}
							hoverable
							active={filterSize.includes("35")}
						>
							35
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("36")}
							hoverable
							active={filterSize.includes("36")}
						>
							36
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("37")}
							hoverable
							active={filterSize.includes("37")}
						>
							37
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("38")}
							hoverable
							active={filterSize.includes("38")}
						>
							38
						</Table.Data>
					</Table.Row>

					<Table.Row>
						<Table.Data
							onClick={() => handleFilterSizeChange("39")}
							hoverable
							active={filterSize.includes("39")}
						>
							39
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("40")}
							hoverable
							active={filterSize.includes("40")}
						>
							40
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("41")}
							hoverable
							active={filterSize.includes("41")}
						>
							41
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("42")}
							hoverable
							active={filterSize.includes("42")}
						>
							42
						</Table.Data>
					</Table.Row>

					<Table.Row>
						<Table.Data
							onClick={() => handleFilterSizeChange("43")}
							hoverable
							active={filterSize.includes("43")}
						>
							43
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("44")}
							hoverable
							active={filterSize.includes("44")}
						>
							44
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("45")}
							hoverable
							active={filterSize.includes("45")}
						>
							45
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("46")}
							hoverable
							active={filterSize.includes("46")}
						>
							46
						</Table.Data>
					</Table.Row>
				</Table.Body>
			</Table.Base>
		</div>
	);
};

export default SizeTable;
