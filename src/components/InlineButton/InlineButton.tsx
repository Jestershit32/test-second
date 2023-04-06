import React, { FC } from 'react';
import styles from "./InlineButton.module.scss"
import { Link } from 'react-router-dom';


interface InlineButtonProps {
  text: string,
  link: string
};


export const InlineButton: FC<InlineButtonProps> = ({ link, text }) => {
  return (
    <Link to={link} className={styles.InlineButton}>
      {text}
    </Link >
  )
};
