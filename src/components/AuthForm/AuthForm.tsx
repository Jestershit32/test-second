import React, { FC, useState } from 'react';
import styles from "./AuthForm.module.scss"
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { CaptionInForm } from '../CaptionInForm/CaptionInForm';
import { InlineButton } from '../InlineButton/InlineButton';
import { SubmitHandler, useForm, } from 'react-hook-form';
import { useLoginMutation } from '../../redux';


interface IFormInput {
  email: string,
  password: string
};


export const AuthForm: FC = () => {
  const [errorString, setError] = useState<string>("");
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const [login, { isLoading }] = useLoginMutation();


  const onSubmit: SubmitHandler<IFormInput> = async ({ email, password }) => {
    console.log({ email, password })
    setError("")
    if (email.indexOf("@", 0) === -1) {
      setError("поле email не является email")
    } else {
      try {
        const payload = await login({
          email,
          password
        }).unwrap();
        localStorage.setItem("accessToken", payload?.accessToken)
        localStorage.setItem("refreshToken", payload?.refreshToken)
        console.log(payload)

      } catch (error: any) {
        setError("неверный логин или пароль")
        console.log(error)
      }
    }
  };


  return <><form onSubmit={handleSubmit(onSubmit)} className={styles.AuthForm}>
    <InputText
      register={register("email", {
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
      placeholder='exammple@mail.ru'
      title='Электронная почта'
      type="text"
      error={!!errors.email}
      caption={errors?.email?.message} />
    <InputText
      register={register("password", {
        required: "Поле обязательное",
        minLength: {
          value: 8,
          message: 'Нужно больше символов'
        },
        maxLength: {
          value: 20,
          message: 'Нужно меньше символов'
        }
      })}
      placeholder='Введите 8 значный пароль'
      title='Пароль' type="password"
      error={!!errors.password}
      caption={errors?.password?.message}
    />
    <Button styleType="primary" text='продолжить' loading={isLoading} disabled={!!errors.password || !!errors.email} />
  </form>
    <p className={styles.Error} >{errorString}</p>
    <CaptionInForm text="Еще нет аккаунта?">
      <InlineButton link={"/registration"} text='Зарегистрироваться' />
    </CaptionInForm >

  </>
};
