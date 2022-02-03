import type { NextPage } from "next";
import { useRouter } from "next/router";
import Error from "next/error";

const Custom500: NextPage = () => {
  const router = useRouter();
  console.log(router);
  // Dispatch error, message, status etc. on Sentry, Mixpanel...

  return <Error statusCode={500} />;
};

export default Custom500;
