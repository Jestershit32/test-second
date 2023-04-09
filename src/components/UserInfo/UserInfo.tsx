import React, { FC } from 'react';
import styles from "./UserInfo.module.scss"



interface UserInfoProps {
  title: string,
  value: string
};


export const UserInfo: FC<UserInfoProps> = ({ title, value }) => {
  return (
    <div className={styles.UserInfo}>
      <span className={styles.UserInfoTitle}>{title}</span>
      <span className={styles.UserInfoValue}>{value}</span>
    </div >)
};
