import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

function SocialHxTable({socialHxs}) {
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Occupation</Th>
            <Th>Marital Status</Th>
            <Th>Living Situation</Th>
            <Th>Educational Background</Th>
            <Th>Financial Status</Th>
            <Th>Substance Use</Th>
            <Th>Diet & Exercise</Th>
            <Th>Cultural/Religious Belief</Th>
            <Th>Hobbies & Interests</Th>
          </Tr>
        </Thead>
        <Tbody>
          {socialHxs &&
            socialHxs.map((socialHx, index) => (
              <Tr key={index}>
                <Td>{socialHx.occupation}</Td>
                <Td>{socialHx.maritalStatus}</Td>
                <Td>{socialHx.livingSituation}</Td>
                <Td>{socialHx.educationalBackground}</Td>
                <Td>{socialHx.financialStatus}</Td>
                <Td>{socialHx.substanceUse}</Td>
                <Td>{socialHx.dietAndExercise}</Td>
                <Td>{socialHx.culturalAndReligiousBackground}</Td>
                <Td>{socialHx.hobbiesAndInterests}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
export default SocialHxTable;

// {
//         "_id": "65ce96faf5d1b9e11fbb4c0d",
//         "occupation": "Software Developer",
//         "maritalStatus": "Single",
//         "livingSituation": "Living alone in a rented apartment",
//         "educationalBackground": "Bachelor's degree in Computer Science",
//         "financialStatus": "Stable",
//         "substanceUse": "Occasional alcohol, no tobacco or drugs",
//         "dietAndExercise": "Vegetarian diet, exercises 3 times a week",
//         "culturalAndReligiousBackground": "Atheist, Caucasian",
//         "hobbiesAndInterests": "Reading, coding, hiking",
//         "__v": 0
//     }
