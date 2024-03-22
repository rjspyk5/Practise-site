import { Outlet, useNavigation } from "react-router-dom";
import { Mainheader } from "../Header/Mainheader";
import { Mainfooter } from "../Footer/Mainfooter";

export const Home = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Mainheader></Mainheader>
      {navigation.state === "loading" ? "loading......." : <Outlet />}

      <Mainfooter />
    </div>
  );
};
