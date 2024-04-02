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

const EvaluationModal = ({ evaluation, setEvaluations }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      findings: evaluation.findings,
      followUpTreatment: evaluation.followUpTreatment,
      followUpDate: evaluation.followUpDate,
    },
  });

  const onSubmit = (data) => {
    onClose();
    axios.patch(`/api/evaluation/${evaluation._id}`, data).then((res) => {
      setEvaluations((prev) => {
        return prev.map((item) => (item._id === evaluation._id ? res.data : item));
      });
    });
  };
  return (
    <>
      <EditIcon boxSize={5} mx={1} cursor="pointer" onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Evaluation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
                <FormControl>
                  <FormLabel>Findings</FormLabel>
                  <Input size="sm" variant="outline" {...register("findings")} />
                </FormControl>
                <FormControl>
                  <FormLabel>Followup Treatment</FormLabel>
                  <Select size="sm" variant="outline" {...register("followUpTreatment")}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Followup Date</FormLabel>
                  <Input size="sm" variant="outline" type="date" {...register("followUpDate")} />
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
export default EvaluationModal;
