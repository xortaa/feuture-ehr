import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

function LabTable({ labs }) {
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Test Name</Th>
            <Th>Result</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {labs &&
            labs.map((lab, labIndex) =>
              lab.results.map((result, resultIndex) => (
                <Tr key={`${labIndex}-${resultIndex}`}>
                  <Td>{result.testName}</Td>
                  <Td>{result.result}</Td>
                  <Td>{lab.date && lab.date.split("T")[0]}</Td>
                </Tr>
              ))
            )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default LabTable;
