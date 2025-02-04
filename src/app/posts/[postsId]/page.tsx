import React, { FC } from "react";
import { Metadata } from "next";

import { IProps } from "./index";
import css from "./index.module.css";

const PostsId: FC<IProps> = ({ params }) => {
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

export const metadata: Metadata = {
  title: PostsId.name,
  description: "...",
};

export default PostsId;
