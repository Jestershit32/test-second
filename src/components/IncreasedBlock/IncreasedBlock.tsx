import React, { FC } from 'react';
import styles from "./IncreasedBlock.module.scss"
import { Button } from '../Button/Button';
import illustration from "./illustrationillustration.svg"
import { Link } from 'react-router-dom';


interface IncreasedBlockProps {
  title: string,
  text: string,
  link: string
};


export const IncreasedBlock: FC<IncreasedBlockProps> = ({ title, text, link }) => {
  return (
    <div className={styles.IncreasedBlock}>
      <div className={styles.IncreaseLeft}>
        <h3 className={styles.Title}>{title}</h3>
        <p className={styles.Text} >
          {text}
        </p>
        <Link className={styles.linkButton} to={link}>
          <Button text='Подробнее' styleType='primary' />
        </Link>
      </div>
      <div className={styles.IncreaseRight}>
        <img className={styles.illustration} src={illustration} alt="" />
      </div>
    </div >
  )
};
