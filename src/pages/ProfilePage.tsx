import { FC, useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { HeaderLogo } from "../components/HeaderLogo/HeaderLogo";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { MiniProfile } from "../components/MiniProfile/MiniProfile";
import { BodyProfile } from "../components/BodyProfile/BodyProfile";
import { useCheckUserMutation } from "../redux";
import { IUser } from "../types";
import { useNavigate } from "react-router-dom";




const ProfilePage: FC = () => {
  const nav = useNavigate();
  const [checkUser, { isLoading }] = useCheckUserMutation()
  const [user, setUser] = useState<IUser>({
    email: "",
    id: "",
    name: "",
    phone: "",
    surname: ""
  })

  const handlerFetch = async () => {
    try {
      const user: IUser = await checkUser({}).unwrap();
      console.log(user)
      setUser(user)
    } catch (error) {
      nav("/login");
      console.log(error)
    }
  }

  useEffect(() => {
    handlerFetch()
  }, [])

  if (isLoading) {
    return (<>Ждите</>)
  }

  return (
    <Wrapper >
      <Header logo={<HeaderLogo offPurrweb />} rightMenu={<MiniProfile user={user} />} />
      <BodyProfile user={user} />
    </Wrapper >
  )
}

export default ProfilePage;