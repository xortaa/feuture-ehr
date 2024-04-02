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
  Heading,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import axios from "axios";

const AssessmentModal = ({ assessment, setAssessments }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
                  <FormLabel>Method/Cause of Injury</FormLabel>
                  <Input size="sm" variant="outline" {...register("method")} defaultValue={assessment.method} />
                </FormControl>
                <FormControl>
                  <FormLabel>Location</FormLabel>
                  <Input size="sm" variant="outline" {...register("location")} defaultValue={assessment.location} />
                </FormControl>
                <FormControl>
                  <FormLabel>Damage Caused</FormLabel>
                  <Input
                    size="sm"
                    variant="outline"
                    {...register("damageCaused")}
                    defaultValue={assessment.damageCaused}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Type of Injury</FormLabel>
                  <Input
                    size="sm"
                    variant="outline"
                    {...register("typeOfInjury")}
                    defaultValue={assessment.typeOfInjury}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Location of Injury</FormLabel>
                  <Input
                    size="sm"
                    variant="outline"
                    {...register("locationOfInjury")}
                    defaultValue={assessment.locationOfInjury}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Size of Injury</FormLabel>
                  <Input
                    size="sm"
                    variant="outline"
                    {...register("sizeOfInjury")}
                    defaultValue={assessment.sizeOfInjury}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Degree of Injury</FormLabel>
                  <Select
                    size="sm"
                    variant="outline"
                    {...register("degreeOfInjury")}
                    defaultValue={assessment.degreeOfInjury}
                  >
                    <option value="Mild">Mild</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Severe">Severe</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Color of Injury</FormLabel>
                  <Input
                    size="sm"
                    variant="outline"
                    {...register("colorOfInjury")}
                    defaultValue={assessment.colorOfInjury}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Drainage</FormLabel>
                  <Select size="sm" variant="outline" {...register("drainage")} defaultValue={assessment.drainage}>
                    <option value="None">None</option>
                    <option value="Serous">Serous</option>
                    <option value="Purulent">Purulent</option>
                  </Select>
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
