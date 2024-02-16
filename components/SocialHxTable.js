import { Table, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import axios from "axios";

function SocialHxTable({ socialHxs, onDelete }) {
  const router = useRouter();

  const handleDelete = (id) => {
    axios.delete(`/api/socialHx/${id}`).then((res) => {
      console.log(res);
      if (res.status === 200) {
        onDelete(id);
      }
    });
  };

  const headers = [
    "Occupation",
    "Marital Status",
    "Living Situation",
    "Educational Background",
    "Financial Status",
    "Substance Use",
    "Diet & Exercise",
    "Cultural/Religious Belief",
    "Hobbies & Interests",
  ];
  const keys = [
    "occupation",
    "maritalStatus",
    "livingSituation",
    "educationalBackground",
    "financialStatus",
    "substanceUse",
    "dietAndExercise",
    "culturalAndReligiousBackground",
    "hobbiesAndInterests",
  ];

  return (
    <Box boxShadow="base" _hover={{ boxShadow: "lg" }} borderRadius="md" p={2} bgColor="white">
      <TableContainer>
        <Table variant="simple" size="sm">
          <Tbody>
            {socialHxs &&
              socialHxs.length > 0 &&
              keys.map((key, index) => (
                <Tr key={index}>
                  <Th>{headers[index]}</Th>
                  <Td>{socialHxs[0][key]}</Td>
                  {index === keys.length - 1 && (
                    <Td>
                      <EditIcon
                        onClick={() => router.push(`/profile/edit/socialHx/${socialHxs[0]._id}`)}
                        boxSize={5}
                        mx={1}
                        cursor="pointer"
                      />
                      <DeleteIcon onClick={() => handleDelete(socialHxs[0]._id)} boxSize={5} mx={1} cursor="pointer" />
                    </Td>
                  )}
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default SocialHxTable;
