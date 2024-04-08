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

const PlanningModal = ({ planning, setPlannings }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      shortTermGoal: planning.shortTermGoal,
      longTermGoal: planning.longTermGoal,
      cognitiveObjectives: planning.cognitiveObjectives,
      psychomotorObjectives: planning.psychomotorObjectives,
      affectiveObjectives: planning.affectiveObjectives,
      decidingTriggers: planning.decidingTriggers,
    },
  });

  const onSubmit = (data) => {
    onClose();
    axios.patch(`/api/planning/${planning._id}`, data).then((res) => {
      setPlannings((prev) => {
        return prev.map((item) => (item._id === planning._id ? res.data : item));
      });
    });
  };
  return (
    <>
      <EditIcon boxSize={5} mx={1} cursor="pointer" onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Planning</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
                <FormControl>
                  <FormLabel>Short Term Goal</FormLabel>
                  <Input size="sm" variant="outline" {...register("shortTermGoal")} />
                </FormControl>
                <FormControl>
                  <FormLabel>Long Term Goal</FormLabel>
                  <Input size="sm" variant="outline" {...register("longTermGoal")} />
                </FormControl>
                <h1 className=" font-bold text-2xl mb-5">Objectives</h1>
                <FormControl className="ml-9">
                  <FormLabel>Cognitive Objectives</FormLabel>
                  <Input size="sm" variant="outline" {...register("cognitiveObjectives")} />
                </FormControl>
                <FormControl className="ml-9">
                  <FormLabel>Psychomotor Objectives</FormLabel>
                  <Input size="sm" variant="outline" {...register("psychomotorObjectives")} />
                </FormControl>
                <FormControl className="ml-9">
                  <FormLabel>Affective Objectives</FormLabel>
                  <Input size="sm" variant="outline" {...register("affectiveObjectives")} />
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
export default PlanningModal;
