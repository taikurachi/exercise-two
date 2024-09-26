import styles from "./page.module.css";
import data from "./data.json";
import ArticleCard from "./components/articleCard";

export default function Home() {
  console.log(data);
  return (
    <main className={styles["pageWrapper"]}>
      <h1 className={styles["header"]}>Articles</h1>
      <div className={styles["articles-container"]}>
        {data.map((article, i) => (
          <ArticleCard key={i} article={article} />
        ))}
      </div>
    </main>
  );
}
