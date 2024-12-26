/** eslint-disable */

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

export function EditFormModal({ note }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { mutate } = useMutation();
  const router = useRouter();
  const [notes, setNotes] = useState({
    id: note.id,
    title: note.title,
    description: note.description,
  });
  const [submitted, setSubmitted] = useState(null);

  const HandleEdit = async () => {
    try {
      const response = await mutate({
        url: `https://service.pace-unv.cloud/api/notes/update/${note.id}`,
        method: "PATCH",
        payload: {
          title: notes.title,
          description: notes.description,
        },
      });
      if (response?.success) {
        router.push("/notes");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // // Fetch note data when modal opens
  // useEffect(() => {
  //   if (noteId && isOpen) {
  //     fetch(`https://service.pace-unv.cloud/api/notes/${noteId}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setNotes({
  //           id: data.id,
  //           title: data.title,
  //           description: data.description,
  //         });
  //       })
  //       .catch((error) => console.error("Error fetching note:", error));
  //   }
  // }, [noteId, isOpen]);

  return (
    <>
      <Button onPress={onOpen} className="bg-green-500">
        Edit Note
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="text-black">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p>Edit Note</p>
              </ModalHeader>
              <ModalBody>
                <Form
                  className="w-full max-w-xs"
                  validationBehavior="native"
                  onSubmit={HandleEdit}
                >
                  <Input
                    isRequired
                    errorMessage="id harus diisi"
                    name="id"
                    type="hidden"
                    value={notes.id}
                    onChange={(event) =>
                      setNotes({ ...notes, id: event.target.value })
                    }
                  />
                  <Input
                    isRequired
                    errorMessage="Judul tidak boleh kosong"
                    label="Title"
                    labelPlacement="outside"
                    name="email"
                    value={notes.title}
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
                    value={notes.description}
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
