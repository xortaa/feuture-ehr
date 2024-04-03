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

const CdssModal = ({ cdss, setCdsss }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      alert: cdss.alert,
    },
  });

  const onSubmit = (data) => {
    onClose();
    axios.patch(`/api/cdss/${cdss._id}`, data).then((res) => {
      setCdsss((prev) => {
        return prev.map((item) => (item._id === cdss._id ? res.data : item));
      });
    });
  };
  return (
    <>
      <EditIcon boxSize={5} mx={1} cursor="pointer" onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Cdss</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
                <FormControl>
                  <FormLabel>Alert</FormLabel>
                  <Input size="sm" variant="outline" {...register("alert")} />
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
export default CdssModal;
