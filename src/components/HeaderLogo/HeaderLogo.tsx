import React, { FC } from 'react';
import styles from "./HeaderLogo.module.scss"
import logo from "./logo.svg"
import purrweb from "./Purrweb.svg"

interface HeaderLogoProps {
  offPurrweb?: boolean
};


export const HeaderLogo: FC<HeaderLogoProps> = ({ offPurrweb }) => {
  return (
    <div className={styles.HeaderLogo}>
      <img src={logo} alt='logo' />
      {!offPurrweb ? <img src={purrweb} alt='purrweb' /> : null}
    </div>
  )
};
