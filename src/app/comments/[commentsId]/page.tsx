import React, { FC } from "react";
import { Metadata } from "next";

import { IProps } from "./index";
import css from "./index.module.css";

const CommentsId: FC<IProps> = async ({ params }) => {
  const result = await params;
  return (
    <div className={css.main}>
      <ul>
        {Object.entries(result).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const generateMetadata = async ({
  params,
}: IProps): Promise<Metadata> => {
  const result = await params;
  return {
    title: `${Object.entries(result)[0].toString()}`,
    description: "...",
  };
};

export default CommentsId;
