import React, { FC } from 'react';
import styles from "./MiniProfile.module.scss"
import iconExit from "./out_16.svg"
import { Link } from 'react-router-dom';



interface MiniProfileProps {

};


export const MiniProfile: FC<MiniProfileProps> = () => {
  return (
    <div className={styles.MiniProfile}>
      <Link to="/profile" className={styles.ProfileInfo}>Веденев Максим</Link>
      <button className={styles.ButtonExit}>Выйти
        <img src={iconExit} className={styles.iconExit} alt="" /></button>
    </div >
  )
};
