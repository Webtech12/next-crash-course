import ArticleList from "../components/ArticleList";
import { server } from "../config";

export default function Home({ articles }) {
  return (
    <div>
      <h1>Home</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    }, // will be passed to the page component as props
  };
};
