import React, { FC } from "react";
import { Metadata } from "next";

import { IProps } from "./index";
import css from "./index.module.css";

const TemplateName: FC<IProps> = ({ params }) => {
  return (
    <div className={css.main}>
      <ul>
        {Object.entries(params).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const generateMetadata = async ({}: IProps): Promise<Metadata> => {
  return {
    title: "...",
    description: "...",
  };
};

export default TemplateName;
