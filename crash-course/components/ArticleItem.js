import styles from '../styles/Article.module.css';
import Link from 'next/link';

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <div className={styles.card}>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
      </div>
    </Link>
  );
};

export default ArticleItem;
