import data from "../../data.json";
import formatDateForArticle from "@/app/components/utils";
import styles from "../../page.module.css";
import ArticleTextDisplay from "@/app/components/ArticleTextDisplay";

export default function Article({ params }) {
  const slug = params.slug;
  const articleData = data.find((article) => article.id === slug);

  return (
    <main>
      <div
        className={styles.articlePageHeaderWrapper}
        style={{
          backgroundImage: `url(${articleData.image.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1>{articleData.title}</h1>
        <p>{formatDateForArticle(articleData.publishedDate)}</p>
        <p className={styles.articlePageBlurb}>{articleData.blurb}</p>
      </div>
      <div className={styles.articleTextWrapper}>
        {articleData?.articleText?.map((text, i) => (
          <ArticleTextDisplay key={i} data={text.data} type={text.type} />
        ))}
      </div>
    </main>
  );
}
