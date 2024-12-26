/* eslint-disable */

/**
 * Usage of "useQuery": custom hook to call an API with default method [GET]
 */

import dynamic from "next/dynamic";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { AddFormModal } from "@/components/add-form-modal";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { EditFormModal } from "@/components/edit-form-modal";
import { DeleteFormModal } from "@/components/delete-form-modal";
import { getNotes } from "@/pages/api/getNotes";

const LayoutComponent = dynamic(() => import("@/layout"));

type NoteDatas = {
  id: string;
  title: string;
  description: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
};

type Notes = {
  success: boolean;
  message: string;
  data: NoteDatas[];
};

export default function Notes({
  notes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <div className="m-3">
          <div className="m-4">
            <AddFormModal />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {notes?.data?.map((item: NoteDatas) => (
              <Card>
                <CardHeader>
                  <p>{item.title}</p>
                </CardHeader>
                <CardBody>{item.description}</CardBody>
                <CardFooter>
                  <div className="flex gap-2">
                    <div>
                      <DeleteFormModal note={item} />
                    </div>
                    <div>
                      <EditFormModal note={item} />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </LayoutComponent>
    </>
  );
}

export const getServerSideProps = (async () => {
  // Fetch data from getNotes API
  const notes: Notes = await getNotes();
  // Pass data to the page via props
  return { props: { notes } };
}) satisfies GetServerSideProps<{ notes: Notes }>;
