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

const AssessmentModal = ({ assessment, setAssessments }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      subjective: assessment.subjective,
      objective: assessment.objective,
      decidingTrigger: assessment.decidingTrigger,
    },
  });

  const onSubmit = (data) => {
    onClose();
    axios.patch(`/api/assessment/${assessment._id}`, data).then((res) => {
      setAssessments((prev) => {
        return prev.map((item) => (item._id === assessment._id ? res.data : item));
      });
    });
  };
  return (
    <>
      <EditIcon boxSize={5} mx={1} cursor="pointer" onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Assessment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
                <FormControl>
                  <FormLabel>Subjective</FormLabel>
                  <Input size="sm" variant="outline" {...register("subjective")} />
                </FormControl>
                <FormControl>
                  <FormLabel>Objective</FormLabel>
                  <Input size="sm" variant="outline" {...register("objective")} />
                </FormControl>
                <FormControl>
                  <FormLabel>Deciding Triggers</FormLabel>
                  <Input size="sm" variant="outline" {...register("decidingTrigger")} />
                </FormControl>
              </Stack>
              <ModalFooter>
                <Button w={150} colorScheme="green" variant="solid" type="submit">
                  Submit
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AssessmentModal;
