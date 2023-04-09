import React, { FC } from 'react';
import styles from "./Button.module.scss"
import loadingPrime from "./spinnerPrim.svg"
import loadingSecond from "./spinnerSecond.svg"


interface ButtonProps {
  text: string,
  disabled?: boolean,
  styleType: "primary" | "secondary"
  loading?: boolean;
  onClick?: () => void
};


export const Button: FC<ButtonProps> = ({ text, styleType, loading, disabled, onClick }) => {

  if (disabled) {
    return (
      <button className={styles.Button + " " + styles.Button__disabled} disabled>
        {text}
      </button>
    )
  } else {
    return (
      <button type='submit' onClick={onClick} className={styles.Button + " " + (styleType === "primary" ? styles.Button__primary : styles.Button__secondary)}>
        {!loading && text}

        {loading && <img className={styles.icon} src={styleType === "primary" ? loadingPrime : loadingSecond} alt="" />}
      </button>
    )
  }
}
