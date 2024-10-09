import { Outlet } from 'react-router-dom';
import Header from "../components/Hearder";
import Copyright from "../components/Copyright";

const MainLayout = () => {
  return (
      <>
          <Header />
          <Outlet />
          <Copyright />
      </>
  )
}

export default MainLayout
