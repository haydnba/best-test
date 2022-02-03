import type { NextPage } from "next";
import Error from "../500";

const ForeverPage: NextPage = ({ value }: any) => {
  if (value % 2 === 0) {
    return <Error />;
  }

  return <p>This page was rendered for a while!</p>;
};

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  const value: number = Math.floor(Math.random() * 10);

  return {
    props: { value },
  };
}

export default ForeverPage;
