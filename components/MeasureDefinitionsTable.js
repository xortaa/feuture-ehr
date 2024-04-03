"use client";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";

function MeasureDefinitionsTable({ measureDefinitionss }) {
  return (
    <Box boxShadow="base" _hover={{ boxShadow: "lg" }} borderRadius="md" p={2} bgColor="white">
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Measure Label</Th>
              <Th>Measure Name</Th>
              <Th>Measure Numerator</Th>
              <Th>Measure Denominator</Th>
              <Th>CDSS</Th>
              <Th>Associated Order Set</Th>
            </Tr>
          </Thead>
          <Tbody>
            {measureDefinitionss &&
              measureDefinitionss.map((measureDefinitions, index) => (
                <Tr key={index}>
                  <Td>{measureDefinitions.measure_label}</Td>
                  <Td>{measureDefinitions.measure_name}</Td>
                  <Td>{measureDefinitions.measure_numerator}</Td>
                  <Td>{measureDefinitions.measure_denominator}</Td>
                  <Td>{measureDefinitions.cdss}</Td>
                  <Td>{measureDefinitions.associated_order_set}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MeasureDefinitionsTable;
