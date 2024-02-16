import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

function MeasurementTable({ measurements }) {
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Height</Th>
            <Th>Weight</Th>
            <Th>BMI</Th>
            <Th>date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {measurements &&
            measurements.map((measurement, index) => (
              <Tr key={index}>
                <Td>{measurement.height}</Td>
                <Td>{measurement.weight}</Td>
                <Td>{measurement.bmi}</Td>
                <Td>{measurement && measurement.date && measurement.date.split("T")[0]}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
export default MeasurementTable;

//  {
//         "_id": "65ccf876517265b9bbffc465",
//         "height": "180",
//         "weight": "75",
//         "bmi": "23.15",
//         "date": "2022-01-01T00:00:00.000Z",
//         "__v": 0
//     },
