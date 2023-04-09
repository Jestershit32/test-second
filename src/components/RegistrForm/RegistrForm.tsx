import React, { FC, useState } from 'react';
import styles from "./RegistrForm.module.scss"
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { CaptionInForm } from '../CaptionInForm/CaptionInForm';
import { InlineButton } from '../InlineButton/InlineButton';
import { SubmitHandler, useForm, } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setWindow, setForm } from '../../redux/slices/registration';
interface IFormInput {
  email: string,
  passwordOne: string,
  passwordTwo: string
};


export const RegistrForm: FC = () => {
  const [errorString, setError] = useState<string>("");
  const { email, password } = useAppSelector(state => state.registration.form)

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      email: email,
      passwordOne: password,
      passwordTwo: password,
    }
  });

  const dispatch = useAppDispatch()


  const onSubmit: SubmitHandler<IFormInput> = async ({ email, passwordOne, passwordTwo }) => {
    setError("")
    console.log({ email, passwordOne, passwordTwo })


    if (passwordOne !== passwordTwo) {
      setError("Разные пароли")

    } else if (email.indexOf("@", 0) === -1) {
      setError("поле email не является email")
    }
    else {
      dispatch(setWindow({ window: 2 }))
      dispatch(setForm({ email, password: passwordOne }))
    }
  };


  return <><form onSubmit={handleSubmit(onSubmit)} className={styles.RegistrForm}>
    <InputText
      register={register("email", {
        required: "Поле обязательное",
        minLength: {
          value: 4,
          message: 'Нужно больше символов'
        },
      })}
      placeholder='exammple@mail.ru'
      title='Электронная почта'
      type="text"
      error={!!errors.email}
      caption={errors?.email?.message} />
    <InputText
      register={register("passwordOne", {
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
      error={!!errors.passwordOne}
      caption={errors?.passwordOne?.message}
    />
    <InputText
      register={register("passwordTwo", {
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
      error={!!errors.passwordTwo}
      caption={errors?.passwordTwo?.message}
    />
    <Button styleType="primary" text='продолжить' disabled={!!errors.passwordTwo || !!errors.email} />
  </form>
    <p className={styles.Error} >{errorString}</p>
    <CaptionInForm text="Уже есть аккаунт">
      <InlineButton link={"/login"} text='Войти' />
    </CaptionInForm >

  </>
};
