import React, { FC } from "react";
import { Metadata } from "next";

import { IProps } from "./index";
import css from "./index.module.css";

const Posts: FC<IProps> = () => {
  return <div className={css.main}>{Posts.name}</div>;
};

export const metadata: Metadata = {
  title: Posts.name,
  description: "...",
};

export default Posts;
