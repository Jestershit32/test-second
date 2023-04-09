import React, { FC, useState } from 'react';
import styles from "./AccordionItem.module.scss"
import iconUp from "./chevron_up_20.svg"
import iconDown from "./chevron_down_20.svg"


interface AccordionItemProps {
  title: string,
  children: string,
};


export const AccordionItem: FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  return (
    <div className={styles.AccordionItem} onClick={() => setOpen(prev => !prev)}>
      <div className={styles.AccordionItemInfo}>
        <span className={styles.ItemTitle}>{title}</span>
        {isOpen && <p className={styles.ItemText}>{children}</p >}
      </div>
      {isOpen && <img src={iconUp} alt="" />}
      {!isOpen && <img src={iconDown} alt="" />}
    </div >)
};
