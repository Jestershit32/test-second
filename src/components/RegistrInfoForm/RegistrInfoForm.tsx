import React, { FC, useState } from 'react';
import styles from "./RegistrInfoForm.module.scss"
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { SubmitHandler, useForm, } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setWindow, setForm } from '../../redux/slices/registration';
import { useLoginMutation, useRegistrationMutation } from '../../redux';
import { useNavigate } from 'react-router-dom';
interface IFormInput {
  name: string,
  surname: string,
  phone: string
};


export const RegistrInfoForm: FC = () => {
  const [errorString, setError] = useState<string>("");

  const Form = useAppSelector(state => state.registration.form)
  const dispatch = useAppDispatch()
  const [registration, { isLoading }] = useRegistrationMutation()
  const [login, { isLoading: loginLoading }] = useLoginMutation();
  const nav = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>
    ({
      defaultValues: {
        name: '',
        surname: '',
        phone: ''
      }
    });

  // const nav = useNavigate()

  const onSubmit: SubmitHandler<IFormInput> = async ({ name, surname, phone }) => {
    setError("")
    console.log({ name, surname, phone })
    try {
      const { email, password } = Form
      const payload = await registration({
        email,
        password,
        name,
        surname,
        phone
      }).unwrap();

      console.log(payload)

      const loginPayload = await login({
        email,
        password,
      })
      console.log(loginPayload)
      localStorage.setItem("accessToken", payload?.accessToken)
      localStorage.setItem("refreshToken", payload?.refreshToken)
      dispatch(setWindow({ window: 1 }))
      dispatch(setForm({}))


      nav("/profile")
    } catch (error) {
      setError("Не удалось зарегистрироваться")
      console.log(error)
    }

  };


  return <>

    <form onSubmit={handleSubmit(onSubmit)} className={styles.RegistrInfoForm}>

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


      <Button styleType="primary" text='продолжить' loading={isLoading || loginLoading} disabled={!!errors.name || !!errors.surname || !!errors.phone} />
    </form>
    <p className={styles.Error} >{errorString}</p>
  </>
};
