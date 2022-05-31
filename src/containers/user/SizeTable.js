import { Table } from "../../components";

const SizeTable = ({ handleFilterSizeChange }) => {
	return (
		<div style={{ marginTop: "16px" }}>
			<Table.Base>
				<Table.Body>
					<Table.Row>
						<Table.Data onClick={() => handleFilterSizeChange("S")}>
							S
						</Table.Data>

						<Table.Data onClick={() => handleFilterSizeChange("M")}>
							M
						</Table.Data>

						<Table.Data onClick={() => handleFilterSizeChange("L")}>
							L
						</Table.Data>

						<Table.Data
							onClick={() => handleFilterSizeChange("XL")}
						>
							XL
						</Table.Data>
					</Table.Row>

					<Table.Row>
						<Table.Data
							onClick={() => handleFilterSizeChange("35")}
						>
							35
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("36")}
						>
							36
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("37")}
						>
							37
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("38")}
						>
							38
						</Table.Data>
					</Table.Row>

					<Table.Row>
						<Table.Data
							onClick={() => handleFilterSizeChange("39")}
						>
							39
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("40")}
						>
							40
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("41")}
						>
							41
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("42")}
						>
							42
						</Table.Data>
					</Table.Row>

					<Table.Row>
						<Table.Data
							onClick={() => handleFilterSizeChange("43")}
						>
							43
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("44")}
						>
							44
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("45")}
						>
							45
						</Table.Data>
						<Table.Data
							onClick={() => handleFilterSizeChange("46")}
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
