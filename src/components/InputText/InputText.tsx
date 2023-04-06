import React, { FC, ReactNode, useState } from 'react';
import styles from "./InputText.module.scss"
import errIcon from "./x_20.svg"
import succIcon from "./accept_20.svg"
import openEyeIcon from "./eye_open_20.svg"
import closeEyeIcon from "./eye_close_20.svg"

interface InputTextProps {
  placeholder: string,
  title: string,
  caption?: ReactNode
  type: string,
  success?: boolean,
  error?: {},
  register: {}
};


export const InputText: FC<InputTextProps> = ({
  placeholder,
  title,
  caption,
  type,
  success,
  error,
  register }) => {

  const [showPass, setShowPass] = useState<boolean>(false);




  return <label className={styles.InputText}>
    <h6 className={styles.Title}>{title}</h6>
    <div className={styles.InputBlock + " " + (error && styles.ifError) + " " + (success && styles.ifSucces)}>
      <input
        {...register}
        className={styles.InputBar}
        type={showPass ? "text" : type}
        placeholder={placeholder} />
      {(type === "password") && <img
        className={styles.Icon}
        onClick={() => setShowPass(prev => !prev)}
        src={showPass ? openEyeIcon : closeEyeIcon}
        alt="" />}
      {error && <img src={errIcon} alt="" />}
      {success && <img src={succIcon} alt="" />}
    </div>
    <span className={styles.Caption}>{caption}</span>
  </label >
};
