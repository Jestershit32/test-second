import React, { FC, ReactNode } from 'react';
import styles from "./CaptionInForm.module.scss"




interface CaptionInFormProps {
  text: string,
  children: ReactNode
};


export const CaptionInForm: FC<CaptionInFormProps> = ({ text, children }) => {
  return (
    <div className={styles.CaptionInForm}>
      <span className={styles.String}>{text}</span>
      {children}
    </div>
  )
};
