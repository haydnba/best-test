import * as React from "react";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import "../styles/globals.css";

function Main({ Component, pageProps }: AppProps) {
  // const router = useRouter();

  // React.useEffect(() => {
  //   router.beforePopState(({ url, as, options }) => {
  //     console.log("popstate");
  //     // I only want to allow these two routes!
  //     if (as !== "/" && as !== "/about") {
  //       // Have SSR render bad routes as a 404.
  //       window.location.href = as;
  //       return false;
  //     }

  //     return true;
  //   });
  // }, []);

  // React.useEffect(() => {
  //   const handleStart = (url: string) => {
  //     const from = router.asPath;
  //     const to = url;

  //     console.log("Loading", { from, to });
  //   };

  //   const handleStop = (url: string) => {
  //     const from = router.asPath;
  //     const to = url;

  //     console.log("Unloading", { from, to });
  //   };

  //   const handleErr = (url: string) => {
  //     const from = router.asPath;
  //     const to = url;

  //     console.log("Erroring", { from, to });
  //   };

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleStop);
  //   router.events.on("routeChangeError", handleErr);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleStop);
  //     router.events.off("routeChangeError", handleErr);
  //   };
  // }, [router]);

  return (
    <React.Fragment>
      <nav>
        <style jsx>{`
          a {
            margin: 0 10px 0 0;
          }
        `}</style>
        <Link href="/" locale="en">
          <a>Home</a>
        </Link>
        <Link href="/about" locale="fr">
          <a>About</a>
        </Link>
        <Link href="/forever" locale="de">
          <a>Forever</a>
        </Link>
        <Link href="/non-existing">
          <a>Non Existing Page</a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default Main;
