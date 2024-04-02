import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  Input,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import axios from "axios";

const InterventionModal = ({ intervention, setInterventions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm({
    defaultValues: {
     intervention: intervention.intervention,
    },
  });

  const onSubmit = (data) => {
    onClose();
    axios.patch(`/api/intervention/${intervention._id}`, data).then((res) => {
      setInterventions((prev) => {
        return prev.map((item) => (item._id === intervention._id ? res.data : item));
      });
    });
  };
  return (
    <>
      <EditIcon boxSize={5} mx={1} cursor="pointer" onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Intervention</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
                <FormControl>
                  <FormLabel>Intervention</FormLabel>
                  <Input size="sm" variant="outline" {...register("intervention")} />
                </FormControl>
                <Button w={150} colorScheme="green" variant="solid" type="submit">
                  Submit
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default InterventionModal;
