import React, { FC } from 'react';
import styles from "./AlertWindow.module.scss"
import { Button } from '../Button/Button';



interface AlertWindowProps {
  text: string,
  open: boolean,
  back: () => void,
  onClick: () => void
  loading?: boolean
};


export const AlertWindow: FC<AlertWindowProps> = ({ text, open, back, onClick, loading }) => {



  if (open) {
    return (
      <div className={styles.background}>
        <div className={styles.AlertWindow}>
          <h3 className={styles.AlertWindowText}>
            {text}
          </h3>
          <div className={styles.buttonBar}>
            <Button text="Отмена" styleType="secondary" onClick={back} />
            <Button text="Выйти" styleType="primary" onClick={onClick} loading={loading} />
          </div>
        </div>
      </div>
    )
  } else {
    return (null)
  }
}
