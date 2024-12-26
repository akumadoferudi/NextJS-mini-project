/** eslint-disable */

import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@/hooks/useMutation";
import {
  Button,
  Form,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";

export function AddFormModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { mutate } = useMutation();
  const router = useRouter();
  const [notes, setNotes] = useState({
    title: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(null);

  const HandleAdd = async () => {
    try {
      const response = await mutate({
        url: "https://service.pace-unv.cloud/api/notes",
        payload: notes,
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
      <Button onPress={onOpen} className="bg-green-500">
        Add Note
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="text-black">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p>Add Notes</p>
              </ModalHeader>
              <ModalBody>
                <Form
                  className="w-full max-w-xs"
                  validationBehavior="native"
                  onSubmit={HandleAdd}
                >
                  <Input
                    isRequired
                    errorMessage="Judul tidak boleh kosong"
                    label="Title"
                    labelPlacement="outside"
                    placeholder="Masukkan judul note"
                    type="text"
                    onChange={(event) =>
                      setNotes({ ...notes, title: event.target.value })
                    }
                  />

                  <Textarea
                    isRequired
                    errorMessage="isi note tidak boleh kosong"
                    className="max-w-xs"
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Masukkan isi note"
                    onChange={(event) =>
                      setNotes({ ...notes, description: event.target.value })
                    }
                  />
                  <Button type="submit" variant="bordered">
                    Submit
                  </Button>
                  {submitted && (
                    <div className="text-small text-default-500">
                      You submitted: <code>{JSON.stringify(submitted)}</code>
                    </div>
                  )}
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
