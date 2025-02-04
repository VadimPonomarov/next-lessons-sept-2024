import React, { FC } from 'react';
import styles from './posts.module.css';

interface postsProps {}

const posts: FC<postsProps> = () => (
  <div className={styles.posts}>
    posts Component
  </div>
);

export default posts;
