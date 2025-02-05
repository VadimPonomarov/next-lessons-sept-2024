import React, { FC } from "react";
import { Metadata } from "next";

import { IProps } from "./index";
import css from "./index.module.css";

const TemplateName: FC<IProps> = () => {
  return <div className={css.main}>{TemplateName.name}</div>;
};

export const metadata: Metadata = {
  title: TemplateName.name,
  description: "...",
};

export default TemplateName;
