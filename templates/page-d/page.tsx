import React, { FC } from "react";
import { Metadata } from "next";

import { IProps } from "./index";
import css from "./index.module.css";

export const generateMetadata = async ({
  params,
}: IProps): Promise<Metadata> => {
  const result = await params;
  if (result) {
    return {
      title: `${Object.entries(result)[0]?.toString() || "Title ..."}`,
      description: "...",
    };
  }
  return {
    title: "Title...",
    description: "...",
  };
};

const TemplateName: FC<IProps> = async ({ params }) => {
  const result = Object.entries(params);
  if (result) {
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
  }
  return <></>;
};

export default TemplateName;
