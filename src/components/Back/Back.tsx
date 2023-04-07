import React, { FC } from 'react';
import iconArrow from "./arrow_left_16.svg"
import styles from "./Back.module.scss"
import { useAppDispatch } from '../../redux/hooks';
import { setWindow } from '../../redux/slices/registration';





export const Back: FC = (props) => {
  const dispatch = useAppDispatch();

  return (
    <span className={styles.back} onClick={() => dispatch(setWindow({ window: 1 }))}><img src={iconArrow} alt="" /> назад</span >)
};
