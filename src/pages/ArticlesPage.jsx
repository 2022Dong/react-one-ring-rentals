import { useParams } from "react-router-dom";
import articlesData from '../data/articles.json';
import SectionTitle from "../components/SectionTitle";

const ArticlesPage = () => {
    const { id } = useParams();
    const article = articlesData.find((article) => article.id === parseInt(id));
  return (
    <div className="container">
      <SectionTitle title="Single Article" />
      <h3>Title: {article.title}</h3>
      <p>{article.description}</p>
      <img src={article.image} alt={article.title} />
      <p>Date: {article.date}</p>
      <p>Comments: {article.comments}</p>
      <p>Tags: {article.tags}</p>
    </div>
  )
}

export default ArticlesPage
