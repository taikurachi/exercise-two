import styles from "../page.module.css";
import Link from "next/link";
import formatDateForArticle from "./utils";

export default function ArticleCard({ article }) {
  return (
    <div className={styles["article-container"]}>
      <img
        className={styles["article-img"]}
        src={article.image.url}
        alt={article.image.alt}
      />
      <div className={styles["text-container"]}>
        <h2>{article.title}</h2>
        <p>{formatDateForArticle(article.publishedDate)}</p>
        <p>{article.blurb}</p>
        <Link href={`article/${article.id}`}>Read More</Link>
      </div>
    </div>
  );
}
