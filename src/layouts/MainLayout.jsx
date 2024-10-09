import { Outlet } from 'react-router-dom';
import Header from "../components/Hearder";

const MainLayout = () => {
  return (
      <div id="wrapper">
          <Header />
          <Outlet />
      </div>
  )
}

export default MainLayout
