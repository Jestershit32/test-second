import React, { FC, ReactNode } from 'react';
import styles from "./AccordionBlock.module.scss"



interface AccordionBlockProps {
  title: string
  children?: ReactNode
};


export const AccordionBlock: FC<AccordionBlockProps> = ({ title, children }) => {
  return (
    <div className={styles.AccordionBlock}>
      <h1 className={styles.AccordionTitle}>{title}</h1>
      <div className={styles.AccordionList}>
        {children}
      </div>
    </div >)
};
