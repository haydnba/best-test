import type { NextPage } from "next";
import Error from "../404";

const AboutPage: NextPage = ({ value }: any) => {
  if (value % 2 === 0) {
    return <Error />;
  }

  return <p>This is about Next.js!</p>;
};

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

  const value: number = Math.floor(Math.random() * 10);

  return {
    props: { value },
  };
}

export default AboutPage;
