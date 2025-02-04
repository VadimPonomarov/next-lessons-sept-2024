import React, { FC } from "react";
import { Metadata } from "next";

import { IProps } from "./index";
import css from "./index.module.css";

const Comments: FC<IProps> = () => {
  return <div className={css.main}>{Comments.name}</div>;
};

export const metadata: Metadata = {
  title: Comments.name,
  description: "...",
};

export default Comments;
