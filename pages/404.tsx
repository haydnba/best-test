import type { NextPage } from "next";
import { useRouter } from "next/router";

const Custom404: NextPage = () => {
  const router = useRouter();
  // console.log(new URL(window.location.href));
  console.log(router);

  return <h1>404 - Page Not Found</h1>;
};

export default Custom404;
