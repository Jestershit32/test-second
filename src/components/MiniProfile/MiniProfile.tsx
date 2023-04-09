import React, { FC, useState } from 'react';
import styles from "./MiniProfile.module.scss"
import iconExit from "./out_16.svg"
import { Link, useNavigate } from 'react-router-dom';
import { AlertWindow } from '../AlertWindow/AlertWindow';
import { IUser } from '../../types';
import { useLogOutMutation } from '../../redux';



interface MiniProfileProps {
  user: IUser
};


export const MiniProfile: FC<MiniProfileProps> = ({ user }) => {
  const nav = useNavigate()
  const [isOpen, setOpen] = useState<boolean>(false)
  const [logOut, { isLoading }] = useLogOutMutation();


  const exitFunc = async () => {
    try {
      const payload = await logOut({}).unwrap();
      console.log(payload);
      nav("/login")
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
    } catch (error) {
      console.log(error);
    }




  }


  return (
    <>
      <div className={styles.MiniProfile}>
        <Link to="/profile" className={styles.ProfileInfo}>{user.surname + " " + user.name}</Link>
        <button className={styles.ButtonExit} onClick={() => setOpen(prev => !prev)}>Выйти
          <img src={iconExit} className={styles.iconExit} alt="" /></button>
      </div >
      <AlertWindow
        text="Вы уверены что хотите выйти из аккаунта?"
        open={isOpen}
        back={() => setOpen(prev => !prev)}
        onClick={exitFunc}
        loading={isLoading}
      />
    </>
  )
};
