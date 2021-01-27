import Article from './Article';
import articleStyles from '../styles/Article.module.css';

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((a) => (
        <Article article={a} />
      ))}
    </div>
  )
}

export default ArticleList
