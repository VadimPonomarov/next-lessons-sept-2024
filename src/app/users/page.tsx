import React, { FC } from "react";
import { Metadata } from "next";

import { IProps } from "./index";
import css from "./index.module.css";

const Users: FC<IProps> = () => {
  return <div className={css.main}>{Users.name}</div>;
};

export const metadata: Metadata = {
  title: Users.name,
  description: "...",
};

export default Users;
