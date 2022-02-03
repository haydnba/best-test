import type { NextPage } from "next";
import { useRouter } from "next/router";
import Error from "next/error";
import * as Sentry from "@sentry/nextjs";

const Custom404: NextPage = () => {
  const router = useRouter();
  console.log(router);
  // Dispatch error, message, status etc. on Sentry, Mixpanel...
  Sentry.captureMessage(`This is a 404 on route: ${router.asPath}`);

  return <Error statusCode={404} />;
};

export default Custom404;
