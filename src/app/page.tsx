import React, { FC } from "react";
import { Metadata } from "next";

import { getMetadata } from "./index.metadata";

const Home: FC = async () => {
  return <div>{Home.name}</div>;
};

export const metadata: Metadata = await getMetadata({
  title: Home.name,
  description: "...",
});

export default Home;
