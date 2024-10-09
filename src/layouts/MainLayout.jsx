import { Outlet } from 'react-router-dom';
import Header from "../components/Hearder";

const MainLayout = () => {
  return (
      <>
          <Header />
          <Outlet />
      </>
  )
}

export default MainLayout
