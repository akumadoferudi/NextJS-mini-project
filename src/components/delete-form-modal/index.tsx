/** eslint-disable */

import { useRouter } from "next/router";
import { useMutation } from "@/hooks/useMutation";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

export function DeleteFormModal({ note }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { mutate } = useMutation();
  const router = useRouter();

  const HandleDelete = async () => {
    try {
      const response = await mutate({
        url: `https://service.pace-unv.cloud/api/notes/delete/${note.id}`,
        method: "DELETE",
      });
      if (response?.success) {
        router.push("/notes");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button onPress={onOpen} className="bg-red-700 text-white">
        Delete
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="text-black">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p>Delete Note</p>
              </ModalHeader>
              <ModalBody>R U sure wanna delete this important note?</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Nuh Uh
                </Button>
                <Button color="primary" onPress={HandleDelete}>
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
