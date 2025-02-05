import React, { FC } from "react";
import { Metadata } from "next";

import { IProps } from "./index";
import css from "./index.module.css";

export const generateMetadata = async ({}: IProps): Promise<Metadata> => {
  return {
    title: "...",
    description: "...",
  };
};

const TemplateName: FC<IProps> = async ({ params }) => {
  const result = Object.entries(params);
  return (
    <div className={css.main}>
      <ul>
        {result.map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemplateName;
