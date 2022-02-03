import type { NextPage } from "next";
import { useRouter } from "next/router";

const Custom500: NextPage = () => {
  const router = useRouter();
  console.log(window.location);
  console.log(router);

  return <h1>500 - Server-side error occurred</h1>;
};

export default Custom500;
