import React, { FC, useState } from 'react';
import styles from "./EditForm.module.scss"
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { SubmitHandler, useForm, } from 'react-hook-form';
import { useUpdateProfileMutation } from '../../redux';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../types';


interface IEditFormProps {
  user: IUser

}
interface IFormInput {
  name: string,
  surname: string,
  phone: string
};


export const EditForm: FC<IEditFormProps> = ({ user }) => {

  const [errorString, setError] = useState<string>("");
  const [update, { isLoading }] = useUpdateProfileMutation();
  const nav = useNavigate()


  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      name: user.name,
      surname: user.surname,
      phone: user.phone
    }
  });

  // const nav = useNavigate()

  const onSubmit: SubmitHandler<IFormInput> = async ({ name, surname, phone }) => {
    setError("")
    console.log({ name, surname, phone })
    try {
      const payload = await update({
        name,
        surname,
        phone
      }).unwrap();

      console.log(payload)
      localStorage.setItem("accessToken", payload?.refreshToken)
      nav("/profile")
    } catch (error) {
      setError("Не удалось изменить данные")
      console.log(error)
    }

  };


  return <>

    <form onSubmit={handleSubmit(onSubmit)} className={styles.EditForm}>

      <InputText
        register={register("name", {
          required: "Поле обязательное",
          minLength: {
            value: 4,
            message: 'Нужно больше символов'
          },
          maxLength: {
            value: 20,
            message: 'Нужно меньше символов'
          }
        })}
        placeholder='Введите имя'
        title='Имя'
        type="text"
        error={!!errors.name}
        caption={errors?.name?.message} />
      <InputText
        register={register("surname", {
          required: "Поле обязательное",
          minLength: {
            value: 4,
            message: 'Нужно больше символов'
          },
          maxLength: {
            value: 20,
            message: 'Нужно меньше символов'
          }
        })}
        placeholder='Введите фамилию'
        title='Фамилия'
        type="text"
        error={!!errors.surname}
        caption={errors?.surname?.message} />
      <InputText
        register={register("phone", {
          required: "Поле обязательное",
          minLength: {
            value: 4,
            message: 'Нужно больше символов'
          },
          maxLength: {
            value: 20,
            message: 'Нужно меньше символов'
          }
        })}
        placeholder='+7 (333)-333-33-33'
        title='Электронная почта'
        type="tel"
        error={!!errors.phone}
        caption={errors?.phone?.message} />


      <Button styleType="primary" text='продолжить' loading={isLoading} disabled={!!errors.name || !!errors.surname || !!errors.phone} />
    </form>
    <p className={styles.Error} >{errorString}</p>
  </>
};
