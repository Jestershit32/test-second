import { FC } from "react";
import { Header } from "../components/Header/Header";
import { HeaderLogo } from "../components/HeaderLogo/HeaderLogo";
import { Window } from "../components/Window/Window";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { RegistrForm } from "../components/RegistrForm/RegistrForm";
import { useAppSelector } from "../redux/hooks";
import { RegistrInfoForm } from "../components/RegistrInfoForm/RegistrInfoForm";
import { Back } from "../components/Back/Back";
const RegistrPage: FC = () => {
  const window = useAppSelector((state) => state.registration.window)

  return (
    <Wrapper >
      <Header logo={<HeaderLogo />} />
      {window === 1 && <Window title="Регистрация" form={<RegistrForm />} />}
      {window === 2 && <>
        <Back />
        <Window title="Заполните данные о себе" form={<RegistrInfoForm />} />
      </>}
    </Wrapper>
  )
}

export default RegistrPage;