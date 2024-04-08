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

const DiagnosisModal = ({ diagnosis, setDiagnoses }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      nursingDiagnosis: diagnosis.nursingDiagnosis,
      decidingTriggers: diagnosis.decidingTriggers,
    },
  });

  const onSubmit = (data) => {
    onClose();
    axios.patch(`/api/diagnosis/${diagnosis._id}`, data).then((res) => {
      setDiagnoses((prev) => {
        return prev.map((item) => (item._id === diagnosis._id ? res.data : item));
      });
    });
  };
  return (
    <>
      <EditIcon boxSize={5} mx={1} cursor="pointer" onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Diagnosis</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
                <FormControl>
                  <FormLabel>Nursing Diagnosis</FormLabel>
                  <Input size="sm" variant="outline" {...register("nursingDiagnosis")} />
                </FormControl>
                <FormControl>
                  <FormLabel>Deciding Triggers</FormLabel>
                  <Input size="sm" variant="outline" {...register("decidingTriggers")} />
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
export default DiagnosisModal;
