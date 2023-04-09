import { FC, useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { HeaderLogo } from "../components/HeaderLogo/HeaderLogo";
import { Window } from "../components/Window/Window";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { EditForm } from "../components/EditForm/EditForm";
import { useNavigate } from "react-router-dom";
import { useCheckUserMutation } from "../redux";
import { IUser } from "../types";

const EditPage: FC = () => {

  const nav = useNavigate();
  const [checkUser, { isLoading }] = useCheckUserMutation()
  const [userState, setUser] = useState<IUser>({
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
      setUser(user);
      console.log(userState);
    } catch (error) {
      nav("/login");
      console.log(error)
    }
  }
  useEffect(() => {
    handlerFetch()
  }, [])


  return (
    <Wrapper >
      <Header logo={<HeaderLogo />} />
      {!isLoading && <Window title="Заполните данные о себе" form={<EditForm user={userState} />} />}
    </Wrapper>
  )
}

export default EditPage;