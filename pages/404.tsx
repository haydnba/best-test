import type { NextPage } from "next";
import { useRouter } from "next/router";
import Error from "next/error";

const Custom404: NextPage = () => {
  const router = useRouter();
  console.log(router);
  // Dispatch error, message, status etc. on Sentry, Mixpanel...

  return <Error statusCode={404} />;
};

export default Custom404;
