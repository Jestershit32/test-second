import { FC } from "react";
import { Header } from "../components/Header/Header";
import { HeaderLogo } from "../components/HeaderLogo/HeaderLogo";
import { Window } from "../components/Window/Window";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { AuthForm } from "../components/AuthForm/AuthForm";


// interface AuthPageProps {

// }

const AuthPage: FC = () => {


  return (
    <Wrapper >
      <Header logo={<HeaderLogo />} />
      <Window title="Авторизация" form={<AuthForm />} />
    </Wrapper>
  )
}

export default AuthPage;