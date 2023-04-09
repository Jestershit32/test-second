import React, { FC, ReactNode } from 'react';
import styles from "./Window.module.scss"



interface WindowProps {
  children?: ReactNode,
  form: JSX.Element,
  title: string
};


export const Window: FC<WindowProps> = ({ children, title, form }) => {
  return <div className={styles.Window}>
    <h3 className={styles.H3}>{title}</h3>
    {form}
    {children}
  </div>
};
