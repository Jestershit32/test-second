import { FC } from "react";
import { Header } from "../components/Header/Header";
import { HeaderLogo } from "../components/HeaderLogo/HeaderLogo";
import { Wrapper } from "../components/Wrapper/Wrapper";


const ErrorPage: FC = () => {
  return (
    <Wrapper >
      <Header logo={<HeaderLogo />} />
    </Wrapper>
  )
}

export default ErrorPage;