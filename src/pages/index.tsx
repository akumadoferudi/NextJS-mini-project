// import Head from "next/head";
// import Layout from "@/layout";
// import Content from "@/components/content";
// import { useEffect } from "react";
// import Image from "next/image";
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function Main() {
  // useEffect(() => {
  //   fetch("/api/hello")
  //     .then((res) => res.json())
  //     .then((res) => console.log("response => ", res))
  //     .catch((err) => console.log("error => ", err));
  // }, []);

  return (
    <>
      <LayoutComponent
        metaTitle="Main Page"
        metaDescription="Ja, this is index page"
      >
        Index
        {/* <Image src="/nextjs-icon.png" alt="next img" width={400} height={400} /> */}
      </LayoutComponent>
    </>
  );
}
