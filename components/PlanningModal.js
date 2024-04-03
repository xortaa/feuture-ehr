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
      relievePain: planning.relievePain,
      infectionPrevention: planning.infectionPrevention,
      treatment: planning.treatment,
      cure: planning.cure,
      promote: planning.promote,
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
                <h1 className=" font-bold text-2xl mb-5">Short term</h1>
                <FormControl>
                  <FormLabel>Relieve Pain</FormLabel>
                  <Input size="sm" variant="outline" {...register("relievePain")} />
                </FormControl>
                <FormControl>
                  <FormLabel>Infection Prevention</FormLabel>
                  <Input size="sm" variant="outline" {...register("infectionPrevention")} />
                </FormControl>
                <h1 className="my-5  font-bold text-2xl">Long term</h1>
                <FormControl>
                  <FormLabel>Treatment</FormLabel>
                  <Input size="sm" variant="outline" {...register("treatment")} />
                </FormControl>
                <FormControl>
                  <FormLabel>Cure</FormLabel>
                  <Input size="sm" variant="outline" {...register("cure")} />
                </FormControl>
                <FormControl>
                  <FormLabel>Promote</FormLabel>
                  <Input size="sm" variant="outline" {...register("promote")} />
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
