import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import RegionsPage from "./pages/RegionsPage";
import ArticlesPage from "./pages/ArticlesPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/regions" element={<RegionsPage />} />
      <Route path="/articles/:id" element={<ArticlesPage />} />
    </Route>
    )
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
