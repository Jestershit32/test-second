import { FC } from "react";
import { Header } from "../components/Header/Header";
import { HeaderLogo } from "../components/HeaderLogo/HeaderLogo";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { MiniProfile } from "../components/MiniProfile/MiniProfile";




const ProfilePage: FC = () => {

  return (
    <Wrapper >
      <Header logo={<HeaderLogo />} rightMenu={<MiniProfile />} />
    </Wrapper >
  )
}

export default ProfilePage;