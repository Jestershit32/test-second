import React, { FC } from 'react';
import styles from "./BodyProfile.module.scss"
import iconEdit from "./edit_20.svg"
import { UserInfo } from '../UserInfo/UserInfo';
import { IncreasedBlock } from '../IncreasedBlock/IncreasedBlock';
import { AccordionBlock } from '../AccordionBlock/AccordionBlock';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import { IUser } from '../../types';
import { Link } from 'react-router-dom';


interface BodyProfileProps {
  user: IUser
};


export const BodyProfile: FC<BodyProfileProps> = ({ user }) => {
  return (
    <div className={styles.BodyProfile}>
      <div className={styles.TitleBlock}>
        <h1 className={styles.ProfileTitle} >Мой профиль</h1>
        <Link to="edit">
          <button className={styles.ButtonEdit} >
            <img src={iconEdit} className={styles.iconEdit} alt="" />
            <span className={styles.ButtonText}>Редактировать</span>
          </button>
        </Link>
      </div>
      <div className={styles.InfoBlock}>
        <UserInfo title="Имя" value={user.name} />
        <UserInfo title="Фамилия" value={user.name} />
        <UserInfo title="Телефон" value={user.phone} />
        <UserInfo title="Электронная почта" value={user.email} />
      </div>
      <IncreasedBlock title="Ваша продуктивность выросла!" text='За прошлую неделю вы выполнили 12 задач' link='/profile' />

      <AccordionBlock title="Часто задаваемые вопросы">
        <AccordionItem title='Подписываете ли вы соглашение о неразглашении?'>
          Подписываете ли вы соглашение о неразглашении?
        </AccordionItem>
        <AccordionItem title='Сколько займет создание MVP?'>
          Чтобы создать надежный продукт, вам необходимо создать его прототип, спроектировать, разработать и протестировать. На прохождение всех этих этапов у вас уйдет около 3 месяцев.
        </AccordionItem>
        <AccordionItem title='Предоставляете ли вы маркетинговые услуги?'>
          Предоставляете ли вы маркетинговые услуги?
        </AccordionItem>
        <AccordionItem title='Различается ли MVP от прототипов?'>
          Различается ли MVP от прототипов?
        </AccordionItem>
      </AccordionBlock >
    </div >
  )
};
