import React, { FC, ReactNode } from 'react';
import styles from "./Header.module.scss"



interface HeaderProps {
  logo: ReactNode
  rightMenu?: ReactNode
};


export const Header: FC<HeaderProps> = ({ logo, rightMenu }) => {
  return (
    <div className={styles.Header}>
      <a href='/'>
        {logo}
      </a>
      {rightMenu}
    </div>
  )
};
