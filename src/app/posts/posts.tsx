import React, { FC } from 'react';

import styles from "./posts.module.css";
import { IProps } from ".";


const posts: FC<IProps> = () => (
  <div className={styles.posts}>
    posts Component
  </div>
);

export default posts;
