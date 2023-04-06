import React, { FC } from 'react';
import styles from "./AuthForm.module.scss"
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { CaptionInForm } from '../CaptionInForm/CaptionInForm';
import { InlineButton } from '../InlineButton/InlineButton';
import { SubmitHandler, useForm, } from 'react-hook-form';


interface IFormInput {
  mail: string,
  password: string
};





export const AuthForm: FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      mail: '',
      password: ''
    }
  });




  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);


  return <><form onSubmit={handleSubmit(onSubmit)} className={styles.AuthForm}>
    <InputText
      register={register("mail", {
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
      error={!!errors.mail}
      caption={errors?.mail?.message}
      success={!errors?.mail} />
    <InputText
      register={register("password", {
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
      placeholder='Введите 8 значный пароль'
      title='Пароль' type="password"
      error={!!errors.password}
      caption={errors?.password?.message}
      success={!errors?.password} />
    <Button styleType="primary" text='продолжить' />
  </form>

    <CaptionInForm text="Уже есть аккаунт">
      <InlineButton link={"/registration"} text='Зарегистрироваться' />
    </CaptionInForm >
    <input type="button" value={"dfhkjsfhfh"} onClick={() => console.log(errors.mail)} />
  </>
};
